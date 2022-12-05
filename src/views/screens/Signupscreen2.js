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


const Signupscreen2 = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    compemail: '',
    compontact: '',
    compaddress: '',
    compname: '',
    yearstart: '',
    emphired: '',
    custserve: '',
    empname: '',
    empage: '',
    jobpostition: '',
    jobdesc: '',
    email: '',
    password: '',
    cpassword: '',
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

    if (!inputs.empname){
      handleError('Please enter the name of employer', 'empname');
      valid = false;
    } else if (inputs.Lastname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'empname');
      valid = false;
    }

    if (!inputs.age){
        handleError('Please enter the age of employer', 'age');
        valid = false;
    }
    
    
    if (!inputs.jobpostition){
        handleError('Please enter the job position of the employer', 'jobposition');
        valid = false;
    }
    if (!inputs.compname){
      handleError('Please enter the company name', 'compname');
      valid = false;
    }
    if (!inputs.compaddress){
        handleError('Please enter the company address', 'compaddress');
        valid = false;
    }
    if (!inputs.compemail){
      handleError('Please enter the company email', 'compemail');
      valid = false;
    } else if (!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      handleError('Please enter valid email address', 'compemail');
      valid = false;
    }
    if (!inputs.compontact){
      handleError('Please enter the company contact number', 'compontact');
      valid = false;
  }
  if (!inputs.yearstart){
    handleError('Please enter the company year first started', 'yearstart');
    valid = false;
}
if (!inputs.emphired){
  handleError('Please enter the number of employer hired', 'emphired');
  valid = false;
}
if (!inputs.custserve){
  handleError('Please enter the number of customer serve', 'custserve');
  valid = false;
}
if (!inputs.jobdesc){
  handleError('Please enter the company description', 'jobdesc');
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
          
          <Text style= {{
            color: '#2f2f2f', 
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Company information
        </Text>

        
            <Input 
            placeholder= 'Company name' 
            iconName= 'warehouse' 
            
            error={errors.compname}
            onFocus={() =>{
              handleError(null, 'compname');
            }}
            onChangeText = {text => handleOnChange(text, 'compname')}
            />
<Input 
            placeholder= 'Company address' 
            iconName= 'map-marker' 
            
            error={errors.compaddress}
            onFocus={() =>{
              handleError(null, 'compaddress');
            }}
            onChangeText = {text => handleOnChange(text, 'compaddress')}
            />
<Input 
            placeholder= 'Company email address' 
            iconName= 'email-outline' 
            
            error={errors.compemail}
            onFocus={() =>{
              handleError(null, 'compemail');
            }}
            onChangeText = {text => handleOnChange(text, 'compemail')}
            />

<Input 
            placeholder= 'Contact number' 
            iconName= 'phone' 
            keyboardType= 'numeric'
            error={errors.compontact}
            onFocus={() =>{
              handleError(null, 'compontact');
            }}
            onChangeText = {text => handleOnChange(text, 'compontact')}
            />

<Input 
            placeholder= 'Year started' 
            iconName= 'calendar' 
            keyboardType= 'numeric'
            error={errors.yearstart}
            onFocus={() =>{
              handleError(null, 'yearstart');
            }}
            onChangeText = {text => handleOnChange(text, 'yearstart')}
            />
<Input 
            placeholder= 'Employee hired' 
            iconName= 'account-group' 
            error={errors.emphired}
            onFocus={() =>{
              handleError(null, 'emphired');
            }}
            onChangeText = {text => handleOnChange(text, 'emphired')}
            />
<Input 
            placeholder= 'Number of customer serve' 
            iconName= 'account-group' 
            error={errors.custserve}
            onFocus={() =>{
              handleError(null, 'custserve');
            }}
            onChangeText = {text => handleOnChange(text, 'custserve')}
            />
            
            <Text style= {{
            color: '#2f2f2f', 
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Employer information
        </Text>

        <Input 
            placeholder= 'Employer name' 
            iconName= 'account-outline' 
            
            error={errors.empname}
            onFocus={() =>{
              handleError(null, 'empname');
            }}
            onChangeText = {text => handleOnChange(text, 'empname')}
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
            placeholder= 'Job position' 
            iconName= 'account' 
            
            error={errors.jobpostition}
            onFocus={() =>{
              handleError(null, 'jobpostition');
            }}
            onChangeText = {text => handleOnChange(text, 'jobpostition')}
            />


             
{/* TEMPORARY */}
        <Text style= {{
            color: '#2f2f2f', 
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Company proof of legitimacy
        </Text>
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

export default Signupscreen2