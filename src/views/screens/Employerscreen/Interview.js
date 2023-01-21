import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, {useState } from "react";
import Selectlist from "../../components/Selectlist4";
import { axiosRequest } from "../../components/api";
import * as DocumentPicker from "expo-document-picker"

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Interview = ({navigation}) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() ;
      setInputs (prevState => ({...prevState, intstartdate: fDate}));
      
    };
    
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
      
    };
    
    const showDatePicker = () => {
      showMode('date');
    };
    
  const [inputs, setInputs] = React.useState({
   inttype: '',
  //  intWays: '',
   intWays: '',
   intstartdate: '',
   intenddate: '',

  });
  
var Data ={
        inttype: inputs.inttype,
        // intWays: inputs.intWays,
        intWays: inputs.intWays,
        intstartdate: inputs.intstartdate,
        intenddate: inputs.intenddate
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

   
    if (!inputs.inttype){
      handleError('Please choose interview type', 'inttype');
      valid = false;
    } 
    // if (!inputs.intWays){
    //     handleError('Please provide the link of the online interview', 'intWays');
    //   valid = false;
    // }
    if (!inputs.intWays){
        handleError('Please provide the complete address of the interview', 'intWays');
      valid = false;
    }
    if (!inputs.intstartdate){
        handleError('Please select the date the start of the interview', 'intstartdate');
      valid = false;
    }
    if (!inputs.intenddate){
        handleError('Please select the date the end of the interview', 'intenddate');
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


//   const PickFile = async (file) => {
//       let File = await DocumentPicker.getDocumentAsync({
        
//         type: ['application/*','image/*']
       

//       })
//       if(File.type === 'cancel'){
//         console.log("cancel")
//       }else{
//       setInputs (prevState => ({...prevState, [file]: File}));
//       console.log(File.uri)
//       }
//   }

//   React.useEffect(()=> {
//     navigation.setOptions({
//       title: "Apply",
//       headerTitleAlign: 'center',
//       headerStyle: { backgroundColor: '#eede28', height: 150 },
//       headerTitleStyle: { fontWeight: '100', fontSize: 30 }
//      })
//   },[])
 
  
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

        Set schedule
        </Text>
           
               <Selectlist
            error={errors.inttype}
            onFocus={() =>{ 
                handleError(null, 'inttype');
              }}
            onChange = {item => handleOnChange(item.label, 'inttype')}
            />
           { inputs.inttype == "Online" && <Input 
            placeholder= 'Link of the interview' 
            value={inputs.intWays}
            iconName= 'link' 
           
            error={errors.intWays}
            onFocus={() =>{
              handleError(null, 'intWays');
            }}
            onChangeText = {text => handleOnChange(text, 'intWays')}
            /> }
           { inputs.inttype == "Face to face" && <Input 
            placeholder= 'Location of the interview' 
            value={inputs.intWays}
            iconName= 'map-marker' 
            error={errors.intWays}
            onFocus={() =>{
              handleError(null, 'intWays');
            }}
            onChangeText = {text => handleOnChange(text, 'intWays')}
            />}
            
            
             <TouchableOpacity onPress = {()=>{showDatePicker()
            handleError(null, 'intstartdate')}
            }>
          <Input 
            placeholder= {"Interview Start Date (YYYY-MM-DD)"}
            value = {inputs.intstartdate}
            iconName= 'calendar' 
            keyboardType= 'none'
            editable={false}
            error={errors.intstartdate}
            showSoftInputOnFocus = {false}
            onFocus = {() =>{
              handleError(null, 'intstartdate')
              Keyboard.dismiss()
            }}
            onChangeText = {text => handleOnChange(text, 'intstartdate')}
            />
           
            </TouchableOpacity>
            {show && (
              <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
              />
              )}
               <Input 
            placeholder= 'Interview End Date (YYYY-MM-DD)' 
            iconName= 'calendar' 
            keyboardType='numeric'
            error={errors.intenddate}
            onFocus={() =>{
              handleError(null, 'intenddate');
            }}
            onChangeText = {text => handleOnChange(text, 'intenddate')}
           
            />
           
            
             
             <View style={{marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    
    <TouchableOpacity  onPress={validate}>
    <View style={{backgroundColor: '#4169e1',
    alignSelf: 'center',
    width: '250%',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    }}>
      <Text style={{color: 'white', fontWeight: 'light', fontSize: 18}}>Done</Text>
      </View>
    </TouchableOpacity>

    </View>
            
    </View>
            
        </View>
        
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Interview
