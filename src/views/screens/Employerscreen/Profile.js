import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, RefreshControl, Dimensions,Alert} from 'react-native'
import React, {useState} from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosRequest,server } from '../../components/api';
import * as DocumentPicker from "expo-document-picker"
import HTMLView from 'react-native-htmlview';


//with mysql database using php for backend


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Profile = ({navigation}) => {


const [gets,setGet] = React.useState({
   profile: []
  })
  const [selectedImage, setSelectedImage] = useState(null);


  const PickFile = async (file) => {


    let File = await DocumentPicker.getDocumentAsync({
     copyToCacheDirectory : false,
      type: 'image/*'
    })
    if(File.type === 'cancel'){
      console.log("cancel")
    }else{

      var config = {
        headers:{
     'Content-type':'multipart/form-data'
        }
       };
       var formData = new FormData();
       formData.append('file1',{type:File.mimeType,uri:File.uri,name:File.name})
      Alert.alert(
        "", 
        "You Want To Apply This As Profile Picture?",
        [
          {
            text: "Yes",
            onPress: () => { axiosRequest.post('api/applyprofile.php',formData,config).then((response) => {
              if(response.data === "Profile Picture Added"){
              Alert.alert(response.data,"Change screen to see the changes made",
              [
          {
            text: "Okay!",
            onPress: () => console.log("NO ACCTION"),
            style: "yes"
          }
        ]
             )
      }
           
                 })},
            style: "yes"
          },
          { 
            text: "No", onPress: () => console.log("No Pressed")
          }
        ]
      )
    }
}

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/sprofile.php').then((response)=>response.data).then((data)=>{
  // console.log(data)
setGet (prevState => ({...prevState, profile: data}))
 })
  
 })

 
  },[])
  
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={{}}
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
     }>
      
     {gets.profile.map((profiles,index)=>(<View key = {index} style={[Universalstyles.studprofile, {}]}>
      
        <View style={{flex: 1, margin:10, flexDirection: 'row', alignSelf: 'flex-end',}}>
    {  profiles.compname ? <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',  }}> 
        
       <TouchableOpacity onPress={()=>navigation.navigate('Company edit',{compname:profiles.compname,
       establishdate:profiles.establishdate,
       websiteurl:profiles.websiteurl,
       compdesc:profiles.compdesc})}>
         <View>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Company information <Icon 
            name= 'pencil'
            style={{fontSize: 20, marginRight: 10}}
            color='black'
        />
        </Text>
        </View></TouchableOpacity>
        <View style={{padding: 5}}>
        <Text style={{paddingBottom: 5, fontSize: 15,opacity:.5}}> 
        <Icon name='warehouse' style={{fontSize: 20, color: 'black', marginRight: 10}}/>
        <Text> <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.compname}</Text></Text>
        </Text> 

        <Text style={{paddingBottom: 5, fontSize: 15,opacity:.5}}> 
        <Icon name='calendar' style={{fontSize: 20, color: 'black', marginRight: 10}}/>
        <Text> <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.establishdate}</Text></Text>
        </Text> 
        
        <Text style={{paddingBottom: 5, fontSize: 15,opacity:.5}}> 
        <Icon name='web' style={{fontSize: 20, color: 'black', marginRight: 10}}/>
        <Text> <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.websiteurl}</Text></Text>
        </Text>
        
        {/* <Text style={{ fontSize: 15,opacity:.5}}> 
        <Icon name='trophy' style={{fontSize: 20, color: 'black', marginRight: 10}}/>
        <Text> {profiles.compdesc}</Text>
        </Text> */}
        </View>
      </View> : <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',  }}> 
        
      <TouchableOpacity  onPress={()=> navigation.navigate('Company details')}>
      <View style={[Universalstyles.jobContent3, {marginRight: 20}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>Add Company </Text>
      </View>
    </TouchableOpacity>
        </View>}
       
        <TouchableOpacity onPress={PickFile}>
        { profiles.profile ? <Image source={{uri: server + profiles.profile}} style={{
     marginTop: 10,
     marginBottom: 20,
     marginLeft: 0,
     borderRadius: 65, 
     width: 130, 
     height: 130, 
     resizeMode: 'contain',
     alignSelf: 'center',
    }}/>: <Image source={Logo1} style={{
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 0,
      borderRadius: 65, 
      width: 130, 
      height: 130, 
      resizeMode: 'contain',
      alignSelf: 'center',
     }}/>}
    
  </TouchableOpacity>
        </View>
       

      <View>

      </View>
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
      
      
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
     <TouchableOpacity onPress={() => navigation.navigate('Edit profile',{Fname:profiles.firstname,
     Lname:profiles.lastname,
      Mname:profiles.midname,
      Sname:profiles.suffname,
      birth:profiles.birthday,
      age:profiles.age,
      contact:profiles.contactno,
      street:profiles.street,
      city:profiles.city,
      province:profiles.province,
      zipcode:profiles.zipcode})}>
        <View>
       <Text style={{fontSize: 20, fontWeight: '500'}}> Employer information <Icon 
            name= 'pencil'
            style={{fontSize: 20, marginRight: 10}}
            color='black'
        />
        </Text>
        </View>
        </TouchableOpacity> 
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>
        Name: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.lastname}, {profiles.firstname} {profiles.midname} {profiles.suffname}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>
        Address: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.street} {profiles.city} {profiles.province} {profiles.zipcode}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>
        Contact#: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.contactno}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Date of birth: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.birthday}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Age: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.age}</Text>
        </Text>
        </View>
      </View>
       <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
       { profiles.compdesc &&  <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Company description</Text>
        <View style={{padding: 5}}>
        
       {/* <Text style={{paddingBottom: 10, margin: 3, opacity: 0.6, fontSize: 15, alignSelf: 'center', fontWeight: '500'}}>
      {profiles.compdesc} 
    </Text>*/}
    
    <HTMLView
    value = {profiles.compdesc}
    />
    
     </View>
        </View>}

        {/* <View style={{marginBottom: 10}}>
      <TouchableOpacity  onPress={() => navigation.navigate('Edit profile')}>
      <View style={[Universalstyles.logout,{}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
 
    </View> */}
      </View>))} 
     
 
    
   
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile