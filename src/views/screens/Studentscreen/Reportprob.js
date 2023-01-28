import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import React, { useState } from "react";
import { axiosRequest } from "../../components/api";
import RichText from "../../components/Richtext";



//with mysql database using php for backend

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Reportprob = ({navigation}) => {
  

  const [inputs, setInputs] = React.useState({
    
    repemail: '',
    repmessage: ''

  });
  
  
var Data ={
       repemail:inputs.repemail,
       repmessage:inputs.repmessage,
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

    
    if (!inputs.repemail){
      handleError('Please enter your email', 'repemail');
      valid = false;
    }
   else if (!inputs.repemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    handleError('Please enter valid email address', 'repemail');
    valid = false;
  }
    if (!inputs.repmessage){
      handleError('Please write any message', 'repmessage');
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
     axiosRequest.post('/api/reportprob.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
         if(response.data = "report created Successfully"){
          navigation.navigate("Settings");
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
   <SafeAreaView style={{flex: 1, backgroundColor: 'white',}}>
    <ScrollView 
      contentContainerStyle={{
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
       
          <View style={[Universalstyles.signupbg, { height: 'auto', padding: 20,}]}>
            <Input 
            placeholder= 'Enter your email' 
            iconName= 'email-outline' 
            
            error={errors.repemail}
            onFocus={() =>{
              handleError(null, 'repemail');
            }}
            onChangeText = {text => handleOnChange(text, 'repemail')}
            />
        
            
            <RichText
            
              placeholder= 'Write any message here...' 
              error={errors.repmessage}
              onFocus={() =>{
                handleError(null, 'repmessage');
              }}
              onChange = {text => handleOnChange(text, 'repmessage')}
            />
 
     
<View style={{marginBottom: 50, alignItems: 'center'}}>
    <TouchableOpacity  onPress={validate}>
      <View style={[Universalstyles.logout, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Submit</Text>
      </View>
    </TouchableOpacity>
    </View>
    
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Reportprob
