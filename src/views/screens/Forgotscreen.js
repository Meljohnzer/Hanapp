import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, Keyboard, Alert, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Input from "../components/Input";
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import Loader from "../components/Loader";

const Forgotscreen = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
        email: ''
    
      });
      const [valid,setValid] = React.useState(false)
      const handleError = (errorMessage, input) =>{
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
      }
      const handleOnChange = (text, input) => {
        setInputs (prevState => ({...prevState, [input]: text}));
      };
      
      const [errors, setErrors] = React.useState({});
      const [loading, setLoading] = React.useState(false);

      const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email){
          handleError('Please enter your email', 'email');
          valid = false;
        } 
     if (valid) {
          showPass();
        }
      };
      const cancel = () =>{
        navigation.navigate('Loginscreen')
      }
    
      const showPass = () => {
        setLoading(true);
        setTimeout(async() => {
          setLoading(false);
          let userData = await AsyncStorage.getItem('user');
          if (userData) {
            userData = JSON.parse(userData);
            if (inputs.email == userData.email 
              ){
                AsyncStorage.setItem(
                  'user', JSON.stringify({...userData, loggedIn: true}),
                );
                Alert.alert('Forgotten Password', userData.password)
               navigation.navigate('Homescreen',{fname:userData.firstname,lname:userData.Lastname,email:userData.email});
                setValid(true)
              } 
              else {
                  Alert.alert('Error', 'User does not exists')
              }
          }
              
            }, 1000)
      };

      return (   
      
      <ImageBackground 
        source={require('../../../assets/bg/bgimage5.jpg')}
        style={[Universalstyles.signup, {height: 'auto'}]}>
    
          <Loader visible={loading}/>
            <ScrollView
            
            contentContainerStyle={{
                paddingTop: 50,
                paddingHorizontal: 20,
                justifyContent: 'center',
                flex:1,
                
            }}
            >
              
              <View style={[Universalstyles.signupbg, {height: 'auto'}]}>
          <Text style= {Universalstyles.txt}>
            Verify Email
            </Text>
    
            
                <Input 
                placeholder= 'Email' 
                iconName= 'email-outline' 
                
                error={errors.email}
                onFocus={() =>{
                  handleError(null, 'email');
                }}
                onChangeText = {text => handleOnChange(text, 'email')}
                />


                <Button title='Submit' onPress={validate}/>
                
                <Text 
                onPress={() => navigation.navigate('Loginscreen')}
                style={{color: 'blue', textAlign: 'center', padding: 10}}>Cancel
                </Text>
               
                
               
                
                </View>
          </ScrollView>
        </ImageBackground>
        )


}

export default Forgotscreen;