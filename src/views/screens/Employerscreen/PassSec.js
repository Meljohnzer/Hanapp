import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Input from '../../components/Input'
import Button1 from '../../components/Button1'


//with mysql database using php for backend
const PassSec = ({navigation, error, onFocus=()=>{}}) => {
    const [inputs, setInputs] = React.useState({
        oldpass: '',
        newpass: '',
    
      });
      var Data ={
        password: inputs.oldpass,
        password: inputs.newpass,
        
      };

      const [errors, setErrors] = React.useState({});
      const validate = () => {
    
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.oldpass){
          handleError('Please enter your old password', 'oldpass');
        valid = false;
    }
        if (!inputs.newpass){
          handleError('Please enter your new password', 'newpass');
        valid = false;
    } else if(inputs.newpass.length < 8){
      handleError('Password must be at least 8 characters', 'newpass');
      valid = false;
    } else if (inputs.newpass.length > 12){
      handleError('The password must be only 12 characters long', 'newpass');
      valid = false;
    }
      else if (!inputs.newpass.match(/^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{8,12}$/)){
        handleError('Password must contain the ff. \n-at least 1 Special Charaters\n-at least 1 Number', 'newpass');
        valid = false;
    }   
  }
      const handleOnChange = async  (text, input) => {

  
        setInputs(prevState => ({ ...prevState, [input]: text }));
     
    
      };
      const handleError = (errorMessage, input) =>{
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
      }
  return (
    <View
    style={[Universalstyles.signup, {}]}>

          <View style={[Universalstyles.signupbg, {height: 'auto', paddingVertical: 20}]}>
         
      <Text style= {Universalstyles.txt}>
        Update Password 
        </Text>

        
            <Input 
            placeholder= 'Old password' 
            iconName= 'lock-outline' 
            password
            error={errors.oldpass}
            onFocus={() =>{
              handleError(null, 'oldpass');
            }}
            onChangeText = {text => handleOnChange(text, 'oldpass')}
            />
            <Input 
            placeholder= 'New password' 
            iconName= 'lock-outline' 
            password
            error={errors.newpass}
            onFocus={() =>{
              handleError(null, 'newpass');
            }}
            onChangeText = {text => handleOnChange(text, 'newpass')}
            />
 <Button1 title='Confirm' onPress={validate}/>
        </View>
        </View>
  )
}

export default PassSec