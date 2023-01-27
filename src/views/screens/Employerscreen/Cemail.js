import { View, Text } from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Input from '../../components/Input'
import Button1 from '../../components/Button1'


//with mysql database using php for backend
const Cemail = ({navigation}) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        newemail: '',
    
      });
    const handleOnChange = async  (text, input) => {

  
    setInputs(prevState => ({ ...prevState, [input]: text }));
 

  };
      
  return (
    <View
    style={[Universalstyles.signup, {}]}>

          <View style={[Universalstyles.signupbg, {height: 'auto', paddingVertical: 20}]}>
         
      <Text style= {Universalstyles.txt}>
        Update Email 
        </Text>

        
            <Input 
            placeholder= 'New email address' 
            iconName= 'email-outline' 
            
            onChangeText = {text => handleOnChange(text, 'email')}
            />
 <Button1 title='Confirm' onPress={() => navigation.navigate('Personal & account information')}/>
        </View>
        </View>
  )
}

export default Cemail