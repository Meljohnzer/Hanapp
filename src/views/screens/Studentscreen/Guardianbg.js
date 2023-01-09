import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity} from 'react-native'
import React from 'react'

import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import Selectlist from "../../components/Selectlist";
import { axiosRequest } from '../../components/api';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Guardianbg = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    
    gname: '',
    gcontactno: '',
    gaddress: '',
    
   
  });
  
var Data ={
        gname:inputs.gname,
        gcontactno:inputs.gcontactno,
        gaddress:inputs.gaddress
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
    

if (!inputs.gname){
  handleError("Please enter your guardian's name", 'gname');
  valid = false;
} else if (inputs.gname.match(/[0-9]/)){
  handleError('Name should not have numbers', 'gname');
  valid = false;
}
if (!inputs.gcontactno){
  handleError("Please enter your guardian's contact number", 'gcontactno');
  valid = false;
}
if (!inputs.gaddress){
  handleError('Please enter your guardian address', 'gaddress');
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
axiosRequest.post('/api/guardian.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
          if (response.data == "Registered successfully!") {
          navigation.navigate("Education");
          
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
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Guardian information
        </Text>

         
         <Input 
            placeholder= "Guardian's name" 
            iconName= 'account-outline' 
            
            error={errors.gname}
            onFocus={() =>{
              handleError(null, 'gname');
            }}
            onChangeText = {text => handleOnChange(text, 'gname')}
            />
         <Input 
            placeholder= 'Contact number' 
            iconName= 'phone' 
            keyboardType='numeric'
            error={errors.gcontactno}
            onFocus={() =>{
              handleError(null, 'gcontactno');
            }}
            onChangeText = {text => handleOnChange(text, 'gcontactno')}
            />
            <Input 
            placeholder= 'Complete address' 
            iconName= 'map-marker' 
            
            error={errors.gaddress}
            onFocus={() =>{
              handleError(null, 'gaddress');
            }}
            onChangeText = {text => handleOnChange(text, 'gaddress')}
            />
        
            
            {/* <View style={{}}>
            <Button title='Next' onPress={validate}/>
            
            </View> */}
          <View style={{marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    <TouchableOpacity  onPress={() => navigation.navigate('User info')}>
    <View style={{borderColor: 'red',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Back</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={validate}>
    <View style={{backgroundColor: '#4169e1',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    }}>
      <Text style={{color: 'white', fontWeight: 'light', fontSize: 18}}>Next</Text>
      </View>
    </TouchableOpacity>

    </View>
        </View>
        
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Guardianbg