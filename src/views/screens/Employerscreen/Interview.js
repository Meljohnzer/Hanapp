import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, StyleSheet, useWindowDimensions, Dimensions, Keyboard, Alert,Image, SafeAreaView, RefreshControl, TouchableOpacity, FlatList} from 'react-native'
import Input from "../../components/Input";
import {Universalstyles} from "../../../const/Universalstyle";
import Loader from "../../components/Loader";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, {useState } from "react";
import Selectlist from "../../components/Selectlist4";
import { axiosRequest } from "../../components/api";
import * as DocumentPicker from "expo-document-picker"

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Interview = ({navigation,route}) => {
  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState('date');
  const [show1, setShow1] = useState(false);

  const onChange1 = (event, selectedDate) => {
    
    const currentDate = selectedDate || event;
    setShow1(false);
    setDate1(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate() ;
    setInputs (prevState => ({...prevState, intstartdate: fDate}));
   
  };

  
  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode1(currentMode);
  };

  const showDatePicker1 = () => {
    showMode1('date');
  };
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event1, selectedDate1) => {
    
    const currentDate1 = selectedDate1 || event1;
    setShow(false);
    setDate(currentDate1);
    let tempDate1 = new Date(currentDate1);
    let fDate1 = tempDate1.getFullYear() + '-' + (tempDate1.getMonth() + 1) + '-' + tempDate1.getDate() ;
    setInputs (prevState1 => ({...prevState1, intenddate: fDate1}));
   
  };

  
  const showMode = (currentMode1) => {
    setShow(true);
    setMode(currentMode1);
  };

  const showDatePicker = () => {
    showMode('date');
  };


    


React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
  await navigation.setOptions({
   title: "Interview Schedule",
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 150 },
   headerTitleStyle: { fontWeight: '100', fontSize: 25 }
  })

}

  )},[])

    
  
  const [inputs, setInputs] = React.useState({
   inttype: '',
  //  intWays: '',
   intWays: '',
   intstartdate: '',
   intenddate: '',

  });
  
  const {itemId} = route.params
  
var Data ={
        applicantID : itemId,
        inttype: inputs.inttype,
        // intWays: inputs.intWays,
        intWays: inputs.intWays,
        intstartdate: inputs.intstartdate,
        intenddate: inputs.intenddate
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

   
    if (!inputs.inttype){
      handleError('Please choose interview type', 'inttype');
      valid = false;
    } 
    // if (!inputs.intWays){
    //     handleError('Please provide the link of the online interview', 'intWays');
    //   valid = false;
    // }
    if (!inputs.intWays){
        handleError('Please provide the complete address of the interview', 'intWays');
      valid = false;
    }
    if (!inputs.intstartdate){
        handleError('Please select the date the start of the interview', 'intstartdate');
      valid = false;
    }
    if (!inputs.intenddate){
        handleError('Please select the date the end of the interview', 'intenddate');
      valid = false;
    }
    else if(inputs.intenddate < inputs.intstartdate){
      handleError('Interview end date must be greater than starting date', 'intenddate');
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
     
axiosRequest.post('/api/schedule.php', JSON.stringify(Data))  
      .then((response) => {
        console.log(response.data);
        navigation.goBack()
      });
     
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs (prevState => ({...prevState, [input]: text}));
  };
  
  const handleError = (errorMessage, input) =>{
    setErrors((prevState) => ({...prevState, [input]: errorMessage}))
  }


//   const PickFile = async (file) => {
//       let File = await DocumentPicker.getDocumentAsync({
        
//         type: ['application/*','image/*']
       

//       })
//       if(File.type === 'cancel'){
//         console.log("cancel")
//       }else{
//       setInputs (prevState => ({...prevState, [file]: File}));
//       console.log(File.uri)
//       }
//   }

//   React.useEffect(()=> {
//     navigation.setOptions({
//       title: "Apply",
//       headerTitleAlign: 'center',
//       headerStyle: { backgroundColor: '#eede28', height: 150 },
//       headerTitleStyle: { fontWeight: '100', fontSize: 30 }
//      })
//   },[])
 
  
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

      <Loader visible={loading}/>
      <View style={[Universalstyles.signup, {}]}>
  
        <View style={[Universalstyles.signupbg, { height: 'auto', paddingBottom: 50, justifyContent:'center'}]}>
        {/* {Data.SchoolID && <Image style= {{height:100,width:100,alignSelf:'center',borderRadius:100}} source={{uri : Data.SchoolID}}/>} */}
        <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10,  
            fontSize: 25, 
            fontWeight: '500',
          }}>

        Set schedule
        </Text>
           
               <Selectlist
            error={errors.inttype}
            onFocus={() =>{ 
                handleError(null, 'inttype');
              }}
            onChange = {item => handleOnChange(item.label, 'inttype')}
            />
           { inputs.inttype == "Online" && <Input 
            placeholder= 'Link of the interview' 
            value={inputs.intWays}
            iconName= 'link' 
           
            error={errors.intWays}
            onFocus={() =>{
              handleError(null, 'intWays');
            }}
            onChangeText = {text => handleOnChange(text, 'intWays')}
            /> }
           { inputs.inttype == "Face to face" && <Input 
            placeholder= 'Location of the interview' 
            value={inputs.intWays}
            iconName= 'map-marker' 
            error={errors.intWays}
            onFocus={() =>{
              handleError(null, 'intWays');
            }}
            onChangeText = {text => handleOnChange(text, 'intWays')}
            />}
            
            
            <TouchableOpacity onPress={()=>{showDatePicker1()
            handleError(null, 'intstartdate')
            }}>
            <Input 
            placeholder= 'Hiring Start Date (YYYY-MM-DD)' 
            iconName= 'calendar-month' 
            editable={false}
            value = {inputs.intstartdate}
            error={errors.intstartdate}
            onFocus={() =>{
              handleError(null, 'intstartdate');
            }}
            onChangeText = {text => handleOnChange(text, 'intstartdate')}
            /></TouchableOpacity>
              {show1 && (
              <DateTimePicker
              testID="dateTimePicker"
              value={date1}
              mode={mode1}
              is24Hour={true}
              display='default'
              onChange={onChange1}
              />
              )}
              <TouchableOpacity onPress={()=>{showDatePicker()
            handleError(null, 'intenddate')
            }}>
            <Input 
            placeholder= 'Hiring End Date (YYYY-MM-DD)' 
            iconName= 'calendar-month' 
            editable={false}
            value = {inputs.intenddate}
            error={errors.intenddate}
            onFocus={() =>{
              handleError(null, 'intenddate');
            }}
            onChangeText = {text => handleOnChange(text, 'intenddate')}
            /></TouchableOpacity>
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
           

             <View style={{marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    
    <TouchableOpacity  onPress={validate}>
    <View style={{backgroundColor: '#4169e1',
    alignSelf: 'center',
    width: '250%',
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

export default Interview
