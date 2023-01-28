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


const Support = ({navigation}) => {
  

  const [inputs, setInputs] = React.useState({
    
    suppemail: '',
    suppmessage: ''

  });
  
  
var Data ={
       suppemail:inputs.suppemail,
       suppmessage:inputs.suppmessage,
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

    
    if (!inputs.suppemail){
      handleError('Please enter your email', 'suppemail');
      valid = false;
    }
   else if (!inputs.suppemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    handleError('Please enter valid email address', 'suppemail');
    valid = false;
  }
    if (!inputs.suppmessage){
      handleError('Please write any message', 'suppmessage');
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
     axiosRequest.post('/api/support.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
         if(response.data = "support created Successfully"){
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
            
            error={errors.suppemail}
            onFocus={() =>{
              handleError(null, 'suppemail');
            }}
            onChangeText = {text => handleOnChange(text, 'suppemail')}
            />
        
            
            <RichText
            
              placeholder= 'Write any message here...' 
              error={errors.suppmessage}
              onFocus={() =>{
                handleError(null, 'suppmessage');
              }}
              onChange = {text => handleOnChange(text, 'suppmessage')}
            />
 
     
<View style={{marginBottom: 90, alignItems: 'center',}}>
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

export default Support
