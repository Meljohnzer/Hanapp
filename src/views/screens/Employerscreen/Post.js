import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import React, { useState } from "react";
import Selectlist from "../../components/Selectlist";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Post = ({navigation}) => {
 
  const [inputs, setInputs] = React.useState({
    email: '',
    Cname: '',
    Empname: '',
    Lookingfor: '',
    Jobloc: '',
    Jobdesc: '',
    startdate: '',
    enddate:'',
    attachcor: '',
    attachstudid: '',
    policecler: '',
    idengent: '',
    currivitae: '',


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
      handleError('Please enter the company email', 'email');
      valid = false;
    } else if (!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      handleError('Please enter valid email address', 'email');
      valid = false;
    }
    if (!inputs.Cname){
      handleError('Please enter the company name', 'Cname');
      valid = false;
    } 
    if (!inputs.Empname){
      handleError('Please enter the employer name', 'Empname');
      valid = false;
    } else if (inputs.Empname.match(/[0-9]/)){
      handleError('This field should not have numbers', 'Empname');
      valid = false;
    }
    if (!inputs.Jobloc){
      handleError('Please enter the job location', 'Jobloc');
      valid = false;
    }
    if (!inputs.Lookingfor){
      handleError('Please enter the employer name', 'Lookingfor');
      valid = false;
    } else if (inputs.Lookingfor.match(/[0-9]/)){
      handleError('This field should not have numbers', 'Lookingfor');
      valid = false;
    }
    if (!inputs.Jobdesc){
      handleError('Please enter the job description', 'Jobdesc');
      valid = false;
    } 
    if (!inputs.currivitae){
      handleError('Please attach file of your Curriculum vitae', 'currivitae');
      valid = false;
    }
    if (!inputs.attachcor){
      handleError('Please attach picture of your COR', 'attachcor');
      valid = false;
    }
    if (!inputs.attachstudid){
      handleError('Please attach picture of your student identification', 'attachstudid');
      valid = false;
    }
    if (!inputs.policecler){
      handleError('Please attach picture of your police clearance', 'policecler');
      valid = false;
    }
    if (!inputs.idengent){
      handleError('Please attach picture of your indigency', 'idengent');
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
        navigation.navigate('Home',{fname:inputs.firstname,lname:inputs.Lastname,email:inputs.email});
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
    <SafeAreaView style={{flex: 1}}>
    <ScrollView
        contentContainerStyle={{ 
          justifyContent: 'center',
          width: Dimensions.get('window').width,
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
  
   
          <View style={{height: 'auto', padding: 10, flex: 1}}>
            <View  style= {Universalstyles.txt2}>
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Create post</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>Create a job hiring application with valid information</Text>
            </View>


            <Input 
            placeholder= 'Company name' 
            iconName= 'warehouse' 
            
            error={errors.Cname}
            onFocus={() =>{
              handleError(null, 'Cname');
            }}
            onChangeText = {text => handleOnChange(text, 'Cname')}
            />

            <Input 
            placeholder= 'Employer name' 
            iconName= 'account-outline' 
            
            error={errors.Empname}
            onFocus={() =>{
              handleError(null, 'Empname');
            }}
            onChangeText = {text => handleOnChange(text, 'Empname')}
            />
           
             <Input 
            placeholder= 'Company email' 
            iconName= 'email-outline' 
            
            error={errors.email}
            onFocus={() =>{
              handleError(null, 'email');
            }}
            onChangeText = {text => handleOnChange(text, 'email')}
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
            placeholder= 'Job location' 
            iconName= 'map-marker' 
            
            error={errors.Jobloc}
            onFocus={() =>{
              handleError(null, 'Jobloc');
            }}
            onChangeText = {text => handleOnChange(text, 'Jobloc')}
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

{/* TEMPORAY */}

             <Selectlist
            
            error={errors.Edustage}
            onFocus={() =>{
                handleError(null, 'Edustage');
              }}
            onChangeText = {text => handleOnChange(text, 'Edustage')}
            />

             <Input 
            placeholder= 'Curriculum vitae (CV)' 
            iconName= 'attachment' 
            
            error={errors.currivitae}
            onFocus={() =>{
              handleError(null, 'currivitae');
            }}
            onChangeText = {text => handleOnChange(text, 'currivitae')}
            />
             <Input 
            placeholder= 'Certificate of registration (COR)' 
            iconName= 'attachment' 
            
            error={errors.attachcor}
            onFocus={() =>{
              handleError(null, 'attachcor');
            }}
            onChangeText = {text => handleOnChange(text, 'attachcor')}
            />
            <Input 
            placeholder= 'Student identification (ID)' 
            iconName= 'attachment' 
            
            error={errors.attachstudid}
            onFocus={() =>{
              handleError(null, 'attachstudid');
            }}
            onChangeText = {text => handleOnChange(text, 'attachstudid')}
            />
             <Input 
            placeholder= 'Police clearance' 
            iconName= 'attachment' 
            
            error={errors.policecler}
            onFocus={() =>{
              handleError(null, 'policecler');
            }}
            onChangeText = {text => handleOnChange(text, 'policecler')}
            />
             <Input 
            placeholder= 'Indigency' 
            iconName= 'attachment' 
            
            error={errors.idengent}
            onFocus={() =>{
              handleError(null, 'idengent');
            }}
            onChangeText = {text => handleOnChange(text, 'idengent')}
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
