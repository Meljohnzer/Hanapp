import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity} from 'react-native'
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
//import axios from 'axios'
import { axiosRequest } from "../../components/api";
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Editprofile = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [textt, setText] = useState('Date of birth');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() ;
    setInputs (prevState => ({...prevState, birthday: fDate}));
    
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    
  };

  const showDatePicker = () => {
    showMode('date');
  };
  const [gets,setGet] = React.useState({
    post : []
   })
const [postID,setPostID] = React.useState()


React.useEffect(()=>{
navigation.addListener('focus',async () => {

await axiosRequest.get('/api/feed.php').then((response)=>{
   
setGet (prevState => ({...prevState, post: response.data}))
   
})

}

)},[])

  
    const [isFocused, setisFocused] = React.useState(false);
    const [inputs, setInputs] = React.useState({
    firstname: '',
    lastname: '',
    midname: '',
    suffname: '',
    birthday: '',
    age: '',
    contactno: '',
    street: '',
    city: '',
    province: '',
    zipcode: '',
    date: '',
    
  });
var Data ={
        fname:inputs.firstname,
        lname:inputs.lastname,
        mname:inputs.midname,
        sname:inputs.suffname,
        birth:inputs.birthday,
        age:inputs.age,
        contact:inputs.contactno,
        street:inputs.street,
        city:inputs.city,
        province:inputs.province,
        zipcode:inputs.zipcode
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
//   const validate = () => {
    
//     Keyboard.dismiss();
//     let valid = true;
    
//     if (!inputs.firstname){
//       handleError('Please enter your first name', 'firstname');
//       valid = false;
//     } else if (inputs.firstname.match(/[0-9]/)){
//       handleError('Name should not have numbers', 'firstname');
//       valid = false;
//     }

//     if (!inputs.lastname){
//       handleError('Please enter your last name', 'lastname');
//       valid = false;
//     } else if (inputs.lastname.match(/[0-9]/)){
//       handleError('Name should not have numbers', 'lastname');
//       valid = false;
//     }

//     if (!inputs.birthday){
//       handleError('Please enter your birthdate', 'birthday');
//       valid = false;
//   }

//     if (!inputs.age){
//         handleError('Please enter your age', 'age');
//         valid = false;
//     }
    
    
//     if (!inputs.contactno){
//         handleError('Please enter your contact number', 'contactno');
//         valid = false;
//     }

//     if (!inputs.street){
//         handleError('Please enter your street', 'street');
//         valid = false;
//     }
//     if (!inputs.city){
//         handleError('Please enter your city', 'city');
//         valid = false;
//     }
//     if (!inputs.province){
//         handleError('Please enter your province', 'province');
//         valid = false;
//     }
//     if (!inputs.zipcode){
//         handleError('Please enter your zipcode', 'zipcode');
//         valid = false;
//     }

    
//     if (valid) {
//       register();
//     }
//   };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
axiosRequest.post('/api/user.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data);
          if (response.data == "Student") {
          navigation.navigate("Guardian");
          
           }else if(response.data == "Employer"){
            navigation.navigate("Company details")
           }
           else{
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
        <View style={[Universalstyles.signup, {height: 'auto'}]}>
    
  
          <View style={[Universalstyles.signupbg, { height: 'auto', paddingBottom: 50, justifyContent: 'center'}]}>
      
          
          <Text style= {{
            color: '#2f2f2f', 
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Edit information
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
            <TouchableOpacity onPress = {()=>{showDatePicker()
            handleError(null, 'birthday')}
            }>
          <Input 
            placeholder= {"Birthday"}
            value = {inputs.birthday}
            iconName= 'calendar' 
            keyboardType= 'none'
            editable={false}
            error={errors.birthday}
            showSoftInputOnFocus = {false}
            onFocus = {() =>{
              handleError(null, 'birthday')
              Keyboard.dismiss()
            }}
            onChangeText = {text => handleOnChange(text, 'birthday')}
            />
           
            </TouchableOpacity>
            {show && (
              <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
              />
              )}

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

      <Text style= {{
            color: '#2f2f2f', 
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Edit Address
        </Text>

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
            keyboardType= 'numeric'
            error={errors.zipcode}
            onFocus={() =>{
              handleError(null, 'zipcode');
            }}
            onChangeText = {text => handleOnChange(text, 'zipcode')}
            />
         
         <View style={{marginTop: 15, marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    
    <TouchableOpacity  onPress={() => navigation.navigate('Employerscreen', 'Profile2')}>
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
      <Text style={{color: 'white', fontWeight: 'light', fontSize: 18}}>Done</Text>
      </View>
    </TouchableOpacity>
    </View>
        </View>
        
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
};

export default Editprofile