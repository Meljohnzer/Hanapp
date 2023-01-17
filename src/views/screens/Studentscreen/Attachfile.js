import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import React, { useState } from "react";
import axios from 'axios'
import { axiosRequest } from "../../components/api";
import * as DocumentPicker from "expo-document-picker"

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Attachfile = ({navigation,route}) => {
 
 const { postID } = route.params
 
  const [inputs, setInputs] = React.useState({
    CoR: '',
    SchoolID: '',
    Facebook: '',
    CovLet: '',

  });
  
var Data ={
        CoR: inputs.CoR ,
        SchoolID: inputs.SchoolID,
        Facebook: inputs.Facebook,
        CovLet: inputs.CovLet
      };
      
     

      var config = {
       headers:{
       //'Access-Control-Allow-Origin': 'true',
     //   'Content-Type': 'application/json',
   //  Accept:'application/json',
    'Content-type':'multipart/form-data'
       }
      };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const {height} = useWindowDimensions();
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  
  const validate = () => {
    
    Keyboard.dismiss();
    let valid = true;

   
    if (!inputs.CoR){
      handleError('Please attach file', 'CoR');
      valid = false;
    } 
    if (!inputs.SchoolID){
        handleError('Please attach picture', 'SchoolID');
      valid = false;
    }
    if (!inputs.CovLet){
        handleError('Please attach file', 'CovLet');
      valid = false;
    }
    if (!inputs.Facebook){
        handleError('Please provide link', 'Facebook');
      valid = false;
    }
    
    if (valid) {
      register();
    }
  };

 var formData = new FormData();
 formData.append('file1',{type:inputs.CoR.mimeType,uri:inputs.CoR.uri,name:inputs.CoR.name})
 formData.append('file2',{type:inputs.SchoolID.mimeType,uri:inputs.SchoolID.uri,name:inputs.SchoolID.name})
 formData.append('file3',{type:inputs.CovLet.mimeType,uri:inputs.CovLet.uri,name:inputs.CovLet.name})
 formData.append('file4',inputs.Facebook)
 formData.append('file5',postID)
 //formData.append('file2',true)

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
     
     
    //  formData.append('file','ok')
      //formData.append('fileName',JSON.stringify(inputs.CoR.name))
     console.log(formData)
axiosRequest.post('/api/apply.php',formData,config)
      .then((response) => {
        console.log(response.data);
       // console.log(form);
          
      });
     
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState, [input]: text}));
  };
  
  const handleError = (errorMessage, input) =>{
    setErrors((prevState) => ({...prevState, [input]: errorMessage}))
  }


  const PickFile = async (file) => {
      let File = await DocumentPicker.getDocumentAsync({
        
       copyToCacheDirectory : false

      })
      if(File.type === 'cancel'){
        console.log("cancel")
      }else{
      setInputs (prevState => ({...prevState, [file]: File}));
      console.log(File)
      }
  }

  React.useEffect(()=> {
    navigation.setOptions({
      title: "Apply",
      headerTitleAlign: 'center',
      headerStyle: { backgroundColor: '#eede28', height: 150 },
      headerTitleStyle: { fontWeight: '100', fontSize: 30 }
     })
  },[])
 
  
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView
        contentContainerStyle={{ 
         
        }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
               colors={['#F5E44C']}
            />
          }
        >

      <Loader visible={loading}/>
      <View style={[Universalstyles.signup, {}]}>
  
        <View style={[Universalstyles.signupbg, { height: 'auto', paddingBottom: 50, justifyContent:'center'}]}>
        {/* {Data.SchoolID && <Image style= {{height:100,width:100,alignSelf:'center',borderRadius:100}} source={{uri : Data.SchoolID}}/>} */}
        <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Attach file
        </Text>
            
            <TouchableOpacity onPress={()=>{PickFile('CoR')
            handleError(null, 'CoR')

            }}>
              <Input 
            placeholder= 'Certificate Of Registration' 
            iconName= 'file' 
            value={inputs.CoR.name}
            editable={false}
            error={errors.CoR}
            onFocus={() =>{
              handleError(null, 'CoR');
            }}
            onChangeText = {text => handleOnChange(text, 'CoR')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{PickFile('CovLet')
            handleError(null, 'CovLet')

            }}>
            <Input 
            placeholder= 'Cover letter' 
            value={inputs.CovLet.name}
            iconName= 'file' 
            editable={false}
            error={errors.CovLet}
            onFocus={() =>{
              handleError(null, 'CovLet');
            }}
            onChangeText = {text => handleOnChange(text, 'CovLet')}
            /></TouchableOpacity>
            
            <TouchableOpacity  onPress={()=>{PickFile('SchoolID')
            handleError(null, 'SchoolID')

            }}
            >
            <Input 
            placeholder= 'School ID picture' 
            value={inputs.SchoolID.name}
            iconName= 'image' 
            editable={false}
            keyboardType= 'numeric'
            error={errors.SchoolID}
            onFocus={() =>{
              handleError(null, 'SchoolID');
            }}
            onChangeText = {text => handleOnChange(text, 'SchoolID')}
            /></TouchableOpacity>
            <Input 
            placeholder= 'Facebook profile link' 
            iconName= 'link' 
            error={errors.Facebook}
            onFocus={() =>{
              handleError(null, 'Facebook');
            }}
            onChangeText = {text => handleOnChange(text, 'Facebook')}
            />
                   
             
             <View style={{marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    
    <TouchableOpacity  onPress={validate}>
    <View style={{backgroundColor: '#4169e1',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    }}>
      <Text style={{color: 'white', fontWeight: 'light', fontSize: 18}}>Apply</Text>
      </View>
    </TouchableOpacity>

    </View>
            
    </View>
            
        </View>
        
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Attachfile
