import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import React, {useState} from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Logo1 from '../../../../assets/bg/profile2.png';
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { axiosRequest } from '../../components/api';
import * as ImagePicker from 'expo-image-picker';
import HTMLView from 'react-native-htmlview';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Profile = ({navigation}) => {

const [gets,setGet] = React.useState({
   profile: []
  })
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      
      allowsEditing: true,
      quality: 1,
    });


    if (!result.canceled) {
      setSelectedImage (result.assets[0].uri);
    } else{
      alert('You did not select any image.'); 
    }
  };

 
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/sprofile.php').then((response)=>response.data).then((data)=>{
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
      
     {gets.profile.map((profiles,index)=>(<View key = {index} style={[Universalstyles.studprofile, {borderWidth: 2,}]}>
      
        <View style={{flex: 1, margin:10, flexDirection: 'row', alignSelf: 'flex-end',}}>
    {  profiles.compname ? <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',  }}> 
        
        <Text style={{fontSize: 20, fontWeight: '500'}}> Company information</Text>
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
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>Add Company</Text>
      </View>
    </TouchableOpacity>
        </View>}
       
        <TouchableOpacity onPress={pickImageAsync}>
        { selectedImage ? <Image source={{uri: selectedImage}} style={{
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
        <Text style={{fontSize: 20, fontWeight: '500'}}> Employer information</Text>
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>
        Name: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.lastname}, {profiles.firstname} {profiles.midname}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>
        Address: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.street}, {profiles.city}, {profiles.province}, {profiles.zipcode}</Text>
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
      </View>))} 
     
     <View style={{marginBottom: 50}}>
      <TouchableOpacity  onPress={() => navigation.navigate('Edit profile')}>
      <View style={[Universalstyles.logout,{marginVertical: 20,}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
 
    </View>
    
   
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile