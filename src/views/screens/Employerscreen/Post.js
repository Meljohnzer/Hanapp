import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import React, { useState } from "react";
import Selectlist2 from "../../components/Selectlist2";
import Selectlist3 from "../../components/Selectlist3";
import { axiosRequest } from "../../components/api";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Post = ({navigation}) => {
 
  const [inputs, setInputs] = React.useState({
    
    Lookingfor: '',
    street: '',
    city: '',
    province: '',
    zipcode: '',
    Jobdesc: '',
    Jobtype: '',
    startdate: '',
    enddate:'',
    rate: '',
    salary:'',

  });
  
  
var Data ={
       lookingfor:inputs.Lookingfor,
       street:inputs.street,
       city:inputs.city,
       province:inputs.province,
       zipcode:inputs.zipcode,
       jobdesc:inputs.Jobdesc,
       jobtype:inputs.Jobtype,
       startdate:inputs.startdate,
       enddate:inputs.enddate,
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

    
    if (!inputs.street){
      handleError('Please enter the street', 'street');
      valid = false;
    }
    if (!inputs.city){
      handleError('Please enter the city', 'city');
      valid = false;
    }
    if (!inputs.province){
      handleError('Please enter the province', 'province');
      valid = false;
    }
    if (!inputs.zipcode){
      handleError('Please enter the zipcode', 'zipcode');
      valid = false;
    }
    if (inputs.Jobtype == ""){
      handleError('Please choose what type of job', 'Jobtype');
      valid = false;
    }
    if (!inputs.salary){
      handleError('Please enter the salary', 'salary');
      valid = false;
    }
    if (!inputs.rate){
      handleError('Please choose ratings', 'rate');
      valid = false;
    }
    if (!inputs.Lookingfor){
      handleError('Please enter the vacant job position', 'Lookingfor');
      valid = false;
    } else if (inputs.Lookingfor.match(/[0-9]/)){
      handleError('This field should not have numbers', 'Lookingfor');
      valid = false;
    }
    if (!inputs.Jobdesc){
      handleError('Please enter the job description', 'Jobdesc');
      valid = false;
    } 
    
    if (!inputs.startdate){
      handleError('Please Input Hiring Start Date', 'startdate');
      valid = false;
    }
    if (!inputs.enddate){
      handleError('Please Input Hiring End Date', 'enddate');
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
     axiosRequest.post('/api/post.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
         if(response.data = "Post created Successfully"){
          navigation.navigate("Home");
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
    <SafeAreaView style={{flex: 1}}>
    <ScrollView
        contentContainerStyle={{ 
         
        }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
               colors={['#F5E44C']}
            />
          }
        >
          
    <View
    style={[Universalstyles.signup, {height: 'auto'}]}>

      <Loader visible={loading}/>
  
   
          <View style={{height: 'auto', padding: 5, flex: 1,  }}>
            <View  style= {[Universalstyles.txt2, {}]}>
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Create post</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>Create a job hiring application with valid information</Text>
            </View>

            <Text style={{fontSize: 20, fontWeight: '500' ,opacity:0.6, marginBottom: 10}}> Job information</Text>
            <Selectlist2
            error={errors.Jobtype}
            
            onFocus={() =>{
              
                handleError(null, 'Jobtype');
              }}
              
            onChange = {item => handleOnChange(item.label, 'Jobtype')}
            
            />
            <Input 
            placeholder= 'Vacant job position' 
            iconName= 'account-outline' 
            
            error={errors.Lookingfor}
            onFocus={() =>{
              handleError(null, 'Lookingfor');
            }}
            onChangeText = {text => handleOnChange(text, 'Lookingfor')}
            />
            <Input 
            placeholder= 'Salary of employee' 
            iconName= 'currency-php' 
            keyboardType= 'numeric'
            error={errors.salary}
            onFocus={() =>{
              handleError(null, 'salary');
            }}
            onChangeText = {text => handleOnChange(text, 'salary')}
            
            />
             <Selectlist3
            error={errors.rate}
            onFocus={() =>{ 
                handleError(null, 'rate');
              }}
            onChange = {item => handleOnChange(item.value, 'rate')}
            />
             <Input 
            placeholder= 'Job description' 
            iconName= 'newspaper-variant-outline' 
            error={errors.Jobdesc}
            onFocus={() =>{
              handleError(null, 'Jobdesc');
            }}
            onChangeText = {text => handleOnChange(text, 'Jobdesc')}
            />
            
 <Text style={{fontSize: 20, fontWeight: '500' ,opacity:0.6, marginBottom: 10}}> Job Location</Text>
            
           <View style = {{}}>
           
            <Input 
            placeholder= 'Street' 
            iconName= 'map-marker' 
            
            error={errors.street}
            onFocus={() =>{
              handleError(null, 'street');
            }}
            onChangeText = {text => handleOnChange(text, 'street')}
            
            />
             <Input 
            placeholder= 'City' 
            iconName= 'map-marker' 
            
            error={errors.city}
            onFocus={() =>{
              handleError(null, 'city');
            }}
            onChangeText = {text => handleOnChange(text, 'city')}
           
            />
             <Input 
            placeholder= 'Province' 
            iconName= 'map-marker' 
            
            error={errors.province}
            onFocus={() =>{
              handleError(null, 'province');
            }}
            onChangeText = {text => handleOnChange(text, 'province')}
            
            />
             <Input 
            placeholder= 'Zipcode' 
            iconName= 'map-marker' 
            
            error={errors.zipcode}
            onFocus={() =>{
              handleError(null, 'zipcode');
            }}
            onChangeText = {text => handleOnChange(text, 'zipcode')}
           
            />
           
           </View>
            

          <Text style={{fontSize: 20, fontWeight: '500' ,opacity:0.6, marginBottom: 10}}> Hiring start and end</Text>

             
            
 <Input 
            placeholder= 'Hiring Start Date (YYYY-MM-DD)' 
            iconName= 'calendar-month' 
            
            error={errors.startdate}
            onFocus={() =>{
              handleError(null, 'startdate');
            }}
            onChangeText = {text => handleOnChange(text, 'startdate')}
            />
            <Input 
            placeholder= 'Hiring End Date (YYYY-MM-DD)' 
            iconName= 'calendar-month' 
            
            error={errors.enddate}
            onFocus={() =>{
              handleError(null, 'enddate');
            }}
            onChangeText = {text => handleOnChange(text, 'enddate')}
            />
     
<View style={{marginBottom: 50, alignItems: 'center'}}>
    <TouchableOpacity  onPress={validate}>
      <View style={[Universalstyles.logout, {height: 'auto'}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Post</Text>
      </View>
    </TouchableOpacity>
    </View>
            
        </View>
        
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Post
