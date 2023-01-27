import { ScrollView, Text, View, ImageBackground, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity} from 'react-native'
import React from 'react'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import { axiosRequest } from '../../components/api';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const EditeducBG = ({navigation, error,route, onFocus=()=>{}, ...props
}) => {
    const {schname,schaddress,course,yearlevel} = route.params

    React.useEffect(()=>{
 
        navigation.setOptions({
           title: "Edit Education Info",
           headerTitleAlign: 'center',
           headerStyle: { backgroundColor: 'white', height: 150 },
           headerTitleStyle: { fontWeight: '100', fontSize: 25 }
          })
         
         navigation.addListener('focus',async () => {
          
    
              
        }
        
          )},[])
    const [isFocused, setisFocused] = React.useState(false);
    const [inputs, setInputs] = React.useState({
    
    schname: schname,
    schaddress: schaddress,
    course: course,
    yearlevel: yearlevel,
   
  });
  
var Data ={
       schname:inputs.schname,
       schaddress:inputs.schaddress,
       course:inputs.course,
       yearlevel:inputs.yearlevel
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
    
    if (!inputs.schname){
        handleError('Please enter the name of the school', 'schname');
        valid = false;
    }
    if (!inputs.schaddress){
      handleError('Please enter the school address', 'schaddress');
      valid = false;
  }
  if (!inputs.yearlevel){
    handleError('Please enter what your year & level', 'yearlevel');
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
      console.log(Data)
      axiosRequest.post('/api/editeduc.php', JSON.stringify(Data), headers)  
      .then((response) => {
        console.log(response.data)
        if(response.data === "Educational Background is Successfully updated!!"){
          Alert.alert(response.data,"Go Back to Profile to see the changes Made",
          [
      {
        text: "Okay!",
        onPress: () => navigation.navigate("Profile"),
        style: "yes"
      }
    ]
         )
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

        Educational background (current)
        </Text>

          <Input 
            placeholder= 'School name' 
            iconName= 'school' 
            value={inputs.schname}
            error={errors.schname}
            onFocus={() =>{
              handleError(null, 'schname');
            }}
            onChangeText = {text => handleOnChange(text, 'schname')}
            />
          <Input 
            placeholder= 'School address' 
            iconName= 'school' 
            value={inputs.schaddress}
            error={errors.schaddress}
            onFocus={() =>{
              handleError(null, 'schaddress');
            }}
            onChangeText = {text => handleOnChange(text, 'schaddress')}
            />
          <Input 
          value={inputs.yearlevel}
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
            value={inputs.course}
            error={errors.Course}
            onFocus={() =>{
              handleError(null, 'course');
            }}
            onChangeText = {text => handleOnChange(text, 'course')}
            />
          
            {/* <View style={{}}>
            <Button title='Next' onPress={validate}/>
            
            </View> */}
             <View style={{marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
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

export default EditeducBG