import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react'
import Logo from '../../../assets/bg/Picture1.png';
import Input from "../components/Input";
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Selectlist from "../components/Selectlist";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Infoscreen2 = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: '',
    firstname: '',
    Lastname: '',
    Midname: '',
    Suffname: '',
    Age: '',
    Contactno: '',
    Address: '',
    Busecer: '',




  });
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

    if (!inputs.firstname){
      handleError('Please enter your first name', 'firstname');
      valid = false;
    } else if (inputs.firstname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'firstname');
      valid = false;
    }

    if (!inputs.Lastname){
      handleError('Please enter your last name', 'Lastname');
      valid = false;
    } else if (inputs.Lastname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'Lastname');
      valid = false;
    }

    if (!inputs.Age){
        handleError('Please enter your age', 'Age');
        valid = false;
    }
    
    
    if (!inputs.Contactno){
        handleError('Please enter your contact number', 'Contactno');
        valid = false;
    }

    if (!inputs.Address){
        handleError('Please enter your address', 'Address');
        valid = false;
    }

    if (!inputs.Busecer){
        handleError('Please attach picture of your business certificate', 'Busecer');
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
      try {
        AsyncStorage.setItem('user', JSON.stringify(inputs));
        navigation.navigate('Log in', {email:inputs.email, password:inputs.password});
      } catch (error) {
        Alert.alert('Error', 'Something went wrong')
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState, [input]: text}));
  };
  
  const handleError = (errorMessage, input) =>{
    setErrors((prevState) => ({...prevState, [input]: errorMessage}))
  }
  
  return (
    <SafeAreaView style={{flex: 1,}}>
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
    <View
    style={[Universalstyles.signup, {height: 'auto'}]}>

      <Loader visible={loading}/>
  
   
          <View style={[Universalstyles.signupbg, {height: 'auto'}]}>
      
          <Image source={Logo} style={[Universalstyles.logo, {height: height * 0.10, marginLeft: 15}]} />
          
          <Text style= {Universalstyles.txt}>

        Personal information
        </Text>

        
            <Input 
            placeholder= 'First name' 
            iconName= 'account-outline' 
            
            error={errors.firstname}
            onFocus={() =>{
              handleError(null, 'firstname');
            }}
            onChangeText = {text => handleOnChange(text, 'firstname')}
            />

            <Input 
            placeholder= 'Middle name (if applicable)' 
            iconName= 'account-outline' 
            
            error={errors.Midname}
            onFocus={() =>{
              handleError(null, 'Midname');
            }}
            onChangeText = {text => handleOnChange(text, 'Midname')}
            />

            <Input 
            placeholder= 'Last name' 
            iconName= 'account-outline' 
            
            error={errors.Lastname}
            onFocus={() =>{
              handleError(null, 'Lastname');
            }}
            onChangeText = {text => handleOnChange(text, 'Lastname')}
            />

<Input 
            placeholder= 'Suffix name (if applicable)' 
            iconName= 'account-outline' 
            
            error={errors.Suffname}
            onFocus={() =>{
              handleError(null, 'Suffname');
            }}
            onChangeText = {text => handleOnChange(text, 'Suffname')}
            />

<Input 
            placeholder= 'Age' 
            iconName= 'numeric' 
            keyboardType= 'numeric'
            error={errors.Age}
            onFocus={() =>{
              handleError(null, 'Age');
            }}
            onChangeText = {text => handleOnChange(text, 'Age')}
            />

<Input 
            placeholder= 'Contact number' 
            iconName= 'phone' 
            keyboardType= 'numeric'
            error={errors.Contactno}
            onFocus={() =>{
              handleError(null, 'Contactno');
            }}
            onChangeText = {text => handleOnChange(text, 'Contactno')}
            />

<Input 
            placeholder= 'Workplace address' 
            iconName= 'map-marker' 
            
            error={errors.Address}
            onFocus={() =>{
              handleError(null, 'Address');
            }}
            onChangeText = {text => handleOnChange(text, 'Address')}
            />

<Input 
            placeholder= 'Company name' 
            iconName= 'warehouse' 
            error={errors.Schname}
            onFocus={() =>{
              handleError(null, 'Schname');
            }}
            onChangeText = {text => handleOnChange(text, 'Schname')}
            />
            
           

{/* TEMPORARY */}
<Input 
            
            placeholder= 'Business certificate' 
            iconName= 'attachment' 
            
            error={errors.Busecer}
            onFocus={() =>{
              handleError(null, 'Busecer');
            }}
            onChangeText = {text => handleOnChange(text, 'Busecer')}
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

export default Infoscreen2