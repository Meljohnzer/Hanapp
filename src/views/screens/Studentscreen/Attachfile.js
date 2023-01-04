import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import React, { useState } from "react";
import axios from 'axios'
import { axiosRequest } from "../../components/api";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Attachfile = ({navigation}) => {
 
  const [inputs, setInputs] = React.useState({
    Compname: '',
    Establishdate: '',
    WebsiteURL: '',
    Compdesc: '',

  });
  
var Data ={
        compname: inputs.Compname ,
        establishdate: inputs.Establishdate,
        websiteurl: inputs.WebsiteURL,
        compdesc: inputs.Compdesc
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
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

   
    if (!inputs.Compname){
      handleError('Please attach file', 'Compname');
      valid = false;
    } 
    if (!inputs.Establishdate){
        handleError('Please attach picture', 'Establishdate');
      valid = false;
    }
    if (!inputs.Compdesc){
        handleError('Please attach file', 'Compdesc');
      valid = false;
    }
    if (!inputs.WebsiteURL){
        handleError('Please provide link', 'WebsiteURL');
      valid = false;
    }
    
    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
     
axiosRequest.post('/api/company.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
          if (response.data == "Registered successfully!") {
          navigation.navigate("Employerscreen");
           }
      });
     
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState, [input]: text}));
  };
  
  const handleError = (errorMessage, input) =>{
    setErrors((prevState) => ({...prevState, [input]: errorMessage}))
  }
  
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
  
        <View style={[Universalstyles.signupbg, { height: 'auto', paddingBottom: 50, justifyContent: 'center'}]}>
          
        <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Attach file
        </Text>
            <Input 
            placeholder= 'Certificate Of Registration' 
            iconName= 'file' 
            
            error={errors.Compname}
            onFocus={() =>{
              handleError(null, 'Compname');
            }}
            onChangeText = {text => handleOnChange(text, 'Compname')}
            />
            <Input 
            placeholder= 'Cover letter' 
            iconName= 'file' 
            
            error={errors.Compdesc}
            onFocus={() =>{
              handleError(null, 'Compdesc');
            }}
            onChangeText = {text => handleOnChange(text, 'Compdesc')}
            />
            <Input 
            placeholder= 'School ID picture' 
            iconName= 'image' 
            keyboardType= 'numeric'
            error={errors.Establishdate}
            onFocus={() =>{
              handleError(null, 'Establishdate');
            }}
            onChangeText = {text => handleOnChange(text, 'Establishdate')}
            />
            <Input 
            placeholder= 'Facebook profile link' 
            iconName= 'link' 
            error={errors.WebsiteURL}
            onFocus={() =>{
              handleError(null, 'WebsiteURL');
            }}
            onChangeText = {text => handleOnChange(text, 'WebsiteURL')}
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
