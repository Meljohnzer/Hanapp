import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react'

import Input from "../components/Input";
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import Loader from "../components/Loader";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Userinfo = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    firstname: '',
    lastname: '',
    midname: '',
    suffname: '',
    birthday: '',
    age: '',
    contactno: '',
    address: '',

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

    if (!inputs.lastname){
      handleError('Please enter your last name', 'lastname');
      valid = false;
    } else if (inputs.lastname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'lastname');
      valid = false;
    }

    if (!inputs.birthday){
      handleError('Please enter your birthdate', 'birthday');
      valid = false;
  }

    if (!inputs.age){
        handleError('Please enter your age', 'age');
        valid = false;
    }
    
    
    if (!inputs.contactno){
        handleError('Please enter your contact number', 'contactno');
        valid = false;
    }

    if (!inputs.address){
        handleError('Please enter your address', 'address');
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
        navigation.navigate('Education', {firstname:inputs.firstname, lastname:inputs.lastname});
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
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

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
            
            error={errors.midname}
            onFocus={() =>{
              handleError(null, 'midname');
            }}
            onChangeText = {text => handleOnChange(text, 'midname')}
            />

          <Input 
            placeholder= 'Last name' 
            iconName= 'account-outline' 
            
            error={errors.lastname}
            onFocus={() =>{
              handleError(null, 'lastname');
            }}
            onChangeText = {text => handleOnChange(text, 'lastname')}
            />

          <Input 
            placeholder= 'Suffix name (if applicable)' 
            iconName= 'account-outline' 
            
            error={errors.suffname}
            onFocus={() =>{
              handleError(null, 'suffname');
            }}
            onChangeText = {text => handleOnChange(text, 'suffname')}
            />
          <Input 
            placeholder= 'Birthdate (mm-dd-yy)' 
            iconName= 'calendar' 
            keyboardType= 'numeric'
            error={errors.birthday}
            onFocus={() =>{
              handleError(null, 'birthday');
            }}
            onChangeText = {text => handleOnChange(text, 'birthday')}
            />

          <Input 
            placeholder= 'Age' 
            iconName= 'numeric' 
            keyboardType= 'numeric'
            error={errors.age}
            onFocus={() =>{
              handleError(null, 'age');
            }}
            onChangeText = {text => handleOnChange(text, 'age')}
            />

          <Input 
            placeholder= 'Contact number' 
            iconName= 'phone' 
            keyboardType= 'numeric'
            error={errors.contactno}
            onFocus={() =>{
              handleError(null, 'contactno');
            }}
            onChangeText = {text => handleOnChange(text, 'contactno')}
            />

          <Input 
            placeholder= 'Complete address' 
            iconName= 'map-marker' 
            
            error={errors.address}
            onFocus={() =>{
              handleError(null, 'address');
            }}
            onChangeText = {text => handleOnChange(text, 'address')}
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

export default Userinfo