import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react'

import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Selectlist from "../../components/Selectlist";
import axios from 'axios'
import { axiosRequest } from "../../components/api";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Educbg = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
    const [inputs, setInputs] = React.useState({
    
    schname: '',
    schaddress: '',
    course: '',
    yearlevel: '',
   
  });
  
var Data ={
       schname:inputs.schname,
       schaddress:inputs.schaddress,
       course:inputs.course,
       yearlevel:inputs.yearlevel
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
    
    if (!inputs.schname){
        handleError('Please enter the name of the school', 'schname');
        valid = false;
    }
    if (!inputs.schaddress){
      handleError('Please enter the school address', 'schaddress');
      valid = false;
  }
  if (!inputs.yearlevel){
    handleError('Please enter what your year & level', 'yearlevel');
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
    axiosRequest.post('/api/educ.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
        if(response.data == "Registered successfully!"){
         navigation.navigate('Studentscreen')
        }else{
         alert(response.data)
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
    <SafeAreaView style={{flex: 1,  }}>
    <ScrollView 
      contentContainerStyle={{
       
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
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

        Educational background (current)
        </Text>

          <Input 
            placeholder= 'School name' 
            iconName= 'school' 
            error={errors.schname}
            onFocus={() =>{
              handleError(null, 'schname');
            }}
            onChangeText = {text => handleOnChange(text, 'schname')}
            />
          <Input 
            placeholder= 'School address' 
            iconName= 'school' 
            error={errors.schaddress}
            onFocus={() =>{
              handleError(null, 'schaddress');
            }}
            onChangeText = {text => handleOnChange(text, 'schaddress')}
            />
          <Input 
            placeholder= 'Year & level' 
            iconName= 'school' 
            error={errors.yearlevel}
            onFocus={() =>{
              handleError(null, 'yearlevel');
            }}
            onChangeText = {text => handleOnChange(text, 'yearlevel')}
            />
            
          <Input 
            
            placeholder= 'Course (if applicable)' 
            iconName= 'school' 
            
            error={errors.Course}
            onFocus={() =>{
              handleError(null, 'course');
            }}
            onChangeText = {text => handleOnChange(text, 'course')}
            />
          
            <View style={{}}>
            <Button title='Next' onPress={validate}/>
            
            </View>
        </View>
        
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Educbg