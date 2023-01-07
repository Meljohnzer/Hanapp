import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, Dimensions, useWindowDimensions, Keyboard, Alert, TouchableOpacity, Image, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react';
import Logo from '../../../assets/bg/Picture1.png';
import Input from "../components/Input";
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Ggl from "../../../assets/bg/Google-Logo-PNG3.png";
import Fb from "../../../assets/bg/Facebook-Logo-PNG4.png";
import Apl from "../../../assets/bg/Apple-Logo-PNG5.png";
import { axiosRequest } from "../components/api";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Loginscreen = ({navigation}) => {
 
  
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',

  });
  
      var Data ={
        email: inputs.email,
        password: inputs.password
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
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const {height} = useWindowDimensions();
  
  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email){
     await  handleError('Please enter your email', 'email');
      valid = false;
    } 
    else if (!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      await handleError('Please enter valid email address', 'email');
      valid = false;
    }

    if (!inputs.password){
     await  handleError('Please enter your password', 'password');
    valid = false;
}   
    
    if (valid) {
     await login();
    }
    
    
  };

  const login = async () => {
    setLoading(true);
      setTimeout( async() => {
      setLoading(false);
      await axiosRequest.post('/api/login.php', JSON.stringify(Data), headers)  
      .then((response) => {
        //console.log(response.data);
       switch (response.data) {
        case 'no details yet':
         navigation.navigate('User info')
         break;
       case 'Student Login':
         navigation.navigate('Studentscreen')
         break;
       case 'Employer Login':
         navigation.navigate('Employerscreen')
         break;
        default:
         alert(response.data)
       }
      });
        }, 3000)
        
  };
  


  

  const handleOnChange = async  (text, input) => {

  
    setInputs(prevState => ({ ...prevState, [input]: text }));
 

  };
  
  const handleError = async (errorMessage, input) =>{
   setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
  }
  
 // console.log(moment("2023-01-02 11:31:27").local().startOf('seconds').fromNow());
  return (
    <SafeAreaView style={{flex: 1, }}>
    
    <ScrollView
      contentContainerStyle={{
        
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Loader visible={loading}/>
    <View
    style={[Universalstyles.signup, {}]}>

      
        
          <View style={[Universalstyles.signupbg, {height: 'auto', paddingVertical: 20}]}>
          <Image source={Logo} style={[Universalstyles.logo, {height: height * 0.19, marginLeft: 10}]} />
      <Text style= {Universalstyles.txt}>
        Login account
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
           <Text 
            onPress={() => navigation.navigate('Forgotscreen')}
            style={{color: 'blue', textAlign: "center", marginBottom: 10}}>Forgot Password</Text>
          
          
            <Button title='Login' onPress={validate}/>
            
            <View style={{height: 120, marginTop: 10}}>
              <Text style={Universalstyles.signwith}>Sign in with</Text>
              <View style={Universalstyles.Signwith}>
                <TouchableOpacity  onPress={''}>
                  <Image source={Ggl} style={Universalstyles.Ggl}/>
                  <Text style={{textAlign: 'center', fontWeight: '500'}}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={''}>
                  <Image source={Fb} style={Universalstyles.Fb}/>
                  <Text style={{textAlign: 'center', fontWeight: '500'}}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={''}>
                  <Image source={Apl} style={Universalstyles.Apl}/>
                  <Text style={{textAlign: 'center', fontWeight: '500'}}>Apple</Text>
                </TouchableOpacity>
              </View>
             
            </View>
            <Text 
           
            style={{textAlign: 'center', fontSize: 16, marginVertical: 20}}> Doesn't have an account? 
              {' '}
            <Text 
            onPress={() => navigation.navigate('Sign up')}
            style={{color: 'blue'}}>Register</Text>
            </Text>
            </View>
        </View>
      </ScrollView>
      </SafeAreaView>
  );
};

export default Loginscreen