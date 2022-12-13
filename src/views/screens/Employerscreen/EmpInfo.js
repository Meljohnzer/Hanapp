import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl} from 'react-native'
import React from 'react'
// import Logo from '../../../assets/bg/Picture1.png';
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Selectlist from "../../components/Selectlist";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const EmpInfo = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
  const [inputs, setInputs] = React.useState({
   
    empname: '',
    empaddress: '',
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
   
    if (!inputs.empname){
      handleError('Please enter your name', 'empname');
      valid = false;
    } else if (inputs.empname.match(/[0-9]/)){
      handleError('Name should not have numbers', 'empname');
      valid = false;
    }

    if (!inputs.empaddress){
        handleError('Please enter your address', 'empaddress');
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
        navigation.navigate('Employerscreen', {empname:inputs.empname});
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
    style={[Universalstyles.signup, {}]}>

      <Loader visible={loading}/>
  
   
          <View style={[Universalstyles.signupbg, {height: 'auto', paddingBottom: 50, justifyContent: 'center'}]}>
      
         
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
            placeholder= 'Address' 
            iconName= 'map-marker' 
            
            error={errors.empaddress}
            onFocus={() =>{
              handleError(null, 'empaddress');
            }}
            onChangeText = {text => handleOnChange(text, 'empaddress')}
            />
          
             
{/* TEMPORARY */}
        {/* <Text style= {{
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
            /> */}



            <View style={{}}>
            <Button title='Done' onPress={validate}/>
            
            </View>
        </View>
        
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default EmpInfo