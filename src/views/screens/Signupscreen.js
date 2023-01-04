import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react'
import Logo from '../../../assets/bg/Picture1.png';
import Input from "../components/Input";
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Selectlist from "../components/Selectlist";
import { axiosRequest } from "../components/api";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Signupscreen = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
    
    
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    cpassword: '',
    usertype: ''
  });
  
var Data ={
        email: inputs.email ,
        password: inputs.password,
        usertype: inputs.usertype,
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
    if (!inputs.email){
      handleError('Please enter your email', 'email');
      valid = false;
    } else if (!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      handleError('Please enter valid email address', 'email');
      valid = false;
    }
    if (!inputs.password){
      handleError('Please enter your password', 'password');
    valid = false;
} else if(inputs.password.length < 8){
  handleError('Password must be at least 8 characters', 'password');
  valid = false;
} else if (inputs.password.length > 12){
  handleError('The password must be only 12 characters long', 'password');
  valid = false;
}
  else if (!inputs.password.match(/^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{8,12}$/)){
    handleError('Password must contain the ff. \n-at least 1 Special Charaters\n-at least 1 Number', 'password');
    valid = false;
}   
    if (!inputs.cpassword){
      handleError('Please confirm your password', 'cpassword');
    valid = false;
    } 
    else if (inputs.cpassword != inputs.password){
      handleError('Password do not match', 'cpassword');
      valid = false;

    }
    if (inputs.usertype == ''){
      handleError('Please choose user type', 'usertype');
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
 
      axiosRequest.post('/api/register.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
          if (response.data == "Registered successfully!") {
          navigation.navigate("Log in");
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
    <SafeAreaView style={{flex: 1, }}>
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
   
          <View style={[Universalstyles.signupbg, { height: 'auto', justifyContent: 'center'}]}>
      
          <Image source={Logo} style={[Universalstyles.logo, {height: height * 0.19, marginLeft: 10}]} />
          
        <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
            alignSelf: 'center'
          }}>

        Register account
        </Text>
        <Selectlist
            error={errors.usertype}
            
            onFocus={() =>{
              
                handleError(null, 'usertype');
              }}
              
            onChange = {item => handleOnChange(item.value, 'usertype')}
            
            />
          <Input 
            placeholder= 'Email' 
            iconName= 'email-outline' 
            
            error={errors.email}
            onFocus={() =>{
              handleError(null, 'email');
            }}
            onChangeText = {text => handleOnChange(text, 'email')}
            />

            <Input 
            
            placeholder= 'Password' 
            iconName= 'lock-outline' 
            password
            error={errors.password}
            onFocus={() =>{
              handleError(null, 'password');
            }}
            
            onChangeText = {text => handleOnChange(text, 'password')}
            />
            
            <Input 
            placeholder= 'Confirm password' 
            iconName= 'lock-outline' 
            password
            error={errors.cpassword}
            onFocus={() =>{
              handleError(null, 'cpassword');
            }}
            onChangeText = {text => handleOnChange(text, 'cpassword')}
            />



            <View style={{}}>
            <Button title='Register' onPress={validate}/>
            <Text 
           
            style={{textAlign: 'center', fontSize: 16, marginVertical: 20}}> Already have an account? 
              {' '}
            <Text 
            onPress={() => navigation.navigate('Log in')}
            style={{color: 'blue'}}>Login</Text>
            </Text>
            </View>
        </View>
        
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Signupscreen