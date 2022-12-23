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


const Signupscreen = ({navigation, error,  onFocus=()=>{}, ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    cpassword: '',
    usertype: ''




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
    if (inputs.usertype == null){
      handleError('Please choose user type', 'usertype');
      valid = false;
    }
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

//     if (!inputs.address){
//         handleError('Please enter your address', 'address');
//         valid = false;
//     }
//     if (!inputs.bloodtype){
//       handleError('Please enter your blood type', 'bloodtype');
//       valid = false;
//   }
//   if (!inputs.nationality){
//     handleError('Please enter your nationality', 'nationality');
//     valid = false;
// }
// if (!inputs.language){
//   handleError('Please enter your language use', 'language');
//   valid = false;
// }
// if (!inputs.fname){
//   handleError("Please enter your father's name", 'fname');
//   valid = false;
// } else if (inputs.fname.match(/[0-9]/)){
//   handleError('Name should not have numbers', 'fname');
//   valid = false;
// }
// if (!inputs.mname){
//   handleError("Please enter your mother's name", 'mname');
//   valid = false;
// } else if (inputs.mname.match(/[0-9]/)){
//   handleError('Name should not have numbers', 'mname');
//   valid = false;
// }
// if (!inputs.fbirthday){
//   handleError("Please enter your father's birthdate", 'fbirthday');
//   valid = false;
// }
// if (!inputs.mbirthday){
//   handleError("Please enter your mother's birthdate", 'mbirthday');
//   valid = false;
// }
// if (!inputs.mage){
//   handleError("Please enter your mother's age", 'mage');
//   valid = false;
// }
// if (!inputs.fage){
//   handleError("Please enter your father's age", 'fage');
//   valid = false;
// }

// if (!inputs.gname){
//   handleError("Please enter your guardian's name", 'gname');
//   valid = false;
// } else if (inputs.gname.match(/[0-9]/)){
//   handleError('Name should not have numbers', 'gname');
//   valid = false;
// }
// if (!inputs.gcontactno){
//   handleError("Please enter your guardian's contact number", 'gcontactno');
//   valid = false;
// }
//     if (!inputs.schname){
//         handleError('Please enter the name of the school', 'schname');
//         valid = false;
//     }
//     if (!inputs.schaddress){
//       handleError('Please enter the school address', 'schaddress');
//       valid = false;
//   }
//   if (!inputs.yearlevel){
//     handleError('Please enter what your year & level', 'yearlevel');
//     valid = false;
// }
    
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
    <SafeAreaView style={{flex: 1, }}>
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
   
          <View style={[Universalstyles.signupbg, { height: 'auto', justifyContent: 'center'}]}>
      
          <Image source={Logo} style={[Universalstyles.logo, {height: height * 0.19, marginLeft: 10}]} />
          
          {/* <Text style= {{
            color: '#2f2f2f', 
            marginTop: 10,
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Personal information
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
          <Input 
            placeholder= 'Birthdate' 
            iconName= 'calendar' 
            keyboardType= ''
            error={errors.birthday}
            onFocus={() =>{
              handleError(null, 'birthday');
            }}
            onChangeText = {text => handleOnChange(text, 'birthday')}
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
            placeholder= 'Contact number' 
            iconName= 'phone' 
            keyboardType= 'numeric'
            error={errors.contactno}
            onFocus={() =>{
              handleError(null, 'contactno');
            }}
            onChangeText = {text => handleOnChange(text, 'contactno')}
            />

          <Input 
            placeholder= 'Complete address' 
            iconName= 'map-marker' 
            
            error={errors.address}
            onFocus={() =>{
              handleError(null, 'address');
            }}
            onChangeText = {text => handleOnChange(text, 'address')}
            />

          <Input 
            placeholder= 'Blood type' 
            iconName= 'blood-bag' 
            keyboardType= ''
            error={errors.bloodtype}
            onFocus={() =>{
              handleError(null, 'bloodtype');
            }}
            onChangeText = {text => handleOnChange(text, 'bloodtype')}
            />
          <Input 
            placeholder= 'Nationality' 
            iconName= 'account-group' 
            keyboardType= ''
            error={errors.nationality}
            onFocus={() =>{
              handleError(null, 'nationality');
            }}
            onChangeText = {text => handleOnChange(text, 'nationality')}
            />
          <Input 
            placeholder= 'Language' 
            iconName= 'earth' 
            keyboardType= ''
            error={errors.language}
            onFocus={() =>{
              handleError(null, 'language');
            }}
            onChangeText = {text => handleOnChange(text, 'language')}
            />

          <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Family information
        </Text>

          <Input 
            placeholder= "Father's name" 
            iconName= 'account-outline' 
            
            error={errors.fname}
            onFocus={() =>{
              handleError(null, 'fname');
            }}
            onChangeText = {text => handleOnChange(text, 'fname')}
            />
          <Input 
            placeholder= 'Birthdate' 
            iconName= 'calendar' 
            
            error={errors.fbirthday}
            onFocus={() =>{
              handleError(null, 'fbirthday');
            }}
            onChangeText = {text => handleOnChange(text, 'fbirthday')}
            />
          <Input 
            placeholder= 'Age' 
            iconName= 'numeric' 
            
            error={errors.fage}
            onFocus={() =>{
              handleError(null, 'fage');
            }}
            onChangeText = {text => handleOnChange(text, 'fage')}
            />
          <Input 
            placeholder= "Mother's name" 
            iconName= 'account-outline' 
            
            error={errors.mname}
            onFocus={() =>{
              handleError(null, 'mname');
            }}
            onChangeText = {text => handleOnChange(text, 'mname')}
            />
          <Input 
            placeholder= 'Birthdate' 
            iconName= 'calendar' 
            
            error={errors.mbirthday}
            onFocus={() =>{
              handleError(null, 'mbirthday');
            }}
            onChangeText = {text => handleOnChange(text, 'mbirthday')}
            />
          <Input 
            placeholder= 'Age' 
            iconName= 'numeric' 
            
            error={errors.mage}
            onFocus={() =>{
              handleError(null, 'mage');
            }}
            onChangeText = {text => handleOnChange(text, 'mage')}
            />
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
            
            error={errors.gcontactno}
            onFocus={() =>{
              handleError(null, 'gcontactno');
            }}
            onChangeText = {text => handleOnChange(text, 'gcontactno')}
            />
        
            <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Educational background (current)
        </Text>

          <Input 
            placeholder= 'School name' 
            iconName= 'school' 
            error={errors.schname}
            onFocus={() =>{
              handleError(null, 'schname');
            }}
            onChangeText = {text => handleOnChange(text, 'schname')}
            />
          <Input 
            placeholder= 'School address' 
            iconName= 'school' 
            error={errors.schaddress}
            onFocus={() =>{
              handleError(null, 'schaddress');
            }}
            onChangeText = {text => handleOnChange(text, 'schaddress')}
            />
          <Input 
            placeholder= 'Year & level' 
            iconName= 'school' 
            error={errors.yearlevel}
            onFocus={() =>{
              handleError(null, 'yearlevel');
            }}
            onChangeText = {text => handleOnChange(text, 'yearlevel')}
            />
            
          <Input 
            
            placeholder= 'Course (if applicable)' 
            iconName= 'school' 
            
            error={errors.Course}
            onFocus={() =>{
              handleError(null, 'Course');
            }}
            onChangeText = {text => handleOnChange(text, 'Course')}
            />
          <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Skills
        </Text>
        <Input 
            
            placeholder= 'What are your skills...' 
            iconName= 'bullseye-arrow' 
            
            error={errors.Course}
            onFocus={() =>{
              handleError(null, 'Course');
            }}
            onChangeText = {text => handleOnChange(text, 'Course')}
            /> */}
        <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
            alignSelf: 'center'
          }}>

        Register account
        </Text>
        <Selectlist
            error={errors.usertype}
            
            onFocus={() =>{
              
                handleError(null, 'usertype');
              }}
              
            onChange = {text => handleOnChange(text, 'usertype')}
            
            />
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
            
            <Input 
            placeholder= 'Confirm password' 
            iconName= 'lock-outline' 
            password
            error={errors.cpassword}
            onFocus={() =>{
              handleError(null, 'cpassword');
            }}
            onChangeText = {text => handleOnChange(text, 'cpassword')}
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

export default Signupscreen