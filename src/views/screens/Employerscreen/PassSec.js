import { View, Text, Keyboard ,Alert} from 'react-native'
import React from 'react'
import Loader from '../../components/Loader'
import Universalstyles from '../../../const/Universalstyle'
import Input from '../../components/Input'
import Button1 from '../../components/Button1'
import { axiosRequest } from '../../components/api'


//with mysql database using php for backend
const PassSec = ({navigation, error, onFocus=()=>{}}) => {


    const[pass,setPass]= React.useState([])
    const [inputs, setInputs] = React.useState({
        oldpass: '',
        newpass: '',
    
      });
      var Data ={
        password: inputs.newpass,
        
      };

      const [errors, setErrors] = React.useState({});
      const validate = async () => {
    
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
    if(valid){
      await update();
    }
  }

  const [loading, setLoading] = React.useState(false);

  const update = ()=> {
    setLoading(true);
      setTimeout( async() => {
      setLoading(false);
      await axiosRequest.post('/api/newpass.php', JSON.stringify(Data))  
      .then((response) => {
        console.log(response.data);
        Alert.alert(response.data,"Keep your passwords always secure",
        [
    {
      text: "Okay!",
      onPress: () => navigation.goBack(),
      style: "yes"
    }
  ]
       )  
      });
        }, 3000)
  }
      const handleOnChange = async  (text, input) => {

  
        setInputs(prevState => ({ ...prevState, [input]: text }));
     
    
      };
      const handleError = (errorMessage, input) =>{
        setErrors((prevState) => ({...prevState, [input]: errorMessage}))
      }

      React.useEffect(()=>{
        navigation.addListener('focus',async () => {
          await navigation.setOptions({
            title: "Passwords and Security",
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'white', height: 150 },
            headerTitleStyle: { fontWeight: '100', fontSize: 25 }
           })
         
        await axiosRequest.get('/api/changepass.php').then((response)=>{
            
       setPass (response.data)
            
       })
       
       
       
       }
       
         )},[])
  return (

  <View
    style={[Universalstyles.signup, {}]}>

         { pass.map((label,index)=>(<View key= {index} style={[Universalstyles.signupbg, {height: 'auto', paddingVertical: 20}]}>
         
      <Text style= {Universalstyles.txt}>
        Update Password 
        </Text>

        <Loader visible={loading}/>
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
          {  inputs.oldpass == label.password && <Input 
            placeholder= 'New password' 
            iconName= 'lock-outline' 
            password
            error={errors.newpass}
            onFocus={() =>{
              handleError(null, 'newpass');
            }}
            onChangeText = {text => handleOnChange(text, 'newpass')}
            /> }
 <Button1 title='Confirm' onPress={validate}/>
        </View>)) }
        </View> 
  )
}

export default PassSec