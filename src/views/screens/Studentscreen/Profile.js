import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, RefreshControl, Dimensions,Alert} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Universalstyles from '../../../const/Universalstyle'
import Logo1 from '../../../../assets/bg/profile.png';
import { axiosRequest,server} from '../../components/api';
import * as DocumentPicker from "expo-document-picker"

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Profile = ({navigation,}) => {
 
  const [gets,setGet] = React.useState({
   profile: []
  })


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
  {gets.profile.map((profiles,index) => (
      <View key = {index} style={[Universalstyles.studprofile, {borderWidth: 2,}]}>
      
        <View style={{flex: 1, margin:10, flexDirection: 'row', alignSelf: 'flex-end',}}>
      
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',  }}> 
        
          <Text style={{ opacity: 0.6}}>
          Email: <Text style={{fontWeight: 'bold',}}>{profiles.email}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Contact no: <Text style={{fontWeight: 'bold',}}>{profiles.contactno}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Address: <Text style={{fontWeight: 'bold',}}>{profiles.street}, {profiles.city}, {profiles.province}, {profiles.zipcode}</Text>
        </Text>
        </View>
       
        <TouchableOpacity onPress={PickFile}>
      { profiles.profile == '' && <Image source={Logo1} style={{
     marginTop: 10,
     marginBottom: 20,
     marginLeft: 0,
     borderRadius: 65, 
     width: 130, 
     height: 130, 
     resizeMode: 'contain'
    }}/> }
     { profiles.profile && <Image source={{uri:server + profiles.profile}} style={{
     marginTop: 10,
     marginBottom: 20,
     marginLeft: 0,
     borderRadius: 65, 
     width: 130, 
     height: 130, 
     resizeMode: 'contain'
    }}/> }
  </TouchableOpacity>
        </View>
        <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit profile S',{Fname:profiles.firstname,
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
       <Text style={{fontSize: 20, fontWeight: '500'}}> Personal information <Icon 
            name= 'pencil'
            style={{fontSize: 20, marginRight: 10}}
            color='black'
        />
        </Text>
        </View>
        </TouchableOpacity> 
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>Name: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.lastname}, {profiles.firstname} {profiles.midname}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Date of birth: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.birthday}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Age: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.age}</Text>
        </Text>
        
       
        
        </View>
      </View>
      <View>

      </View>
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit guardian',{gname:profiles.gname,gaddress:profiles.gaddress,gcontactno:profiles.gcontactno})}>
        <View>
       <Text style={{fontSize: 20, fontWeight: '500'}}> Guardian information <Icon 
            name= 'pencil'
            style={{fontSize: 20, marginRight: 10}}
            color='black'
        />
        </Text>
        </View>
        </TouchableOpacity> 
        <View style={{padding: 5}}>
        
        <Text style={{opacity: 0.6}}>Guardian name: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.gname}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Address: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.gaddress}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Contact no: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.gcontactno}</Text>
        </Text>
        </View>
      </View>
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative', }}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit educBG',{schname:profiles.schname,schaddress:profiles.schaddress,yearlevel:profiles.yearlevel,course:profiles.course})}>
        <View>
       <Text style={{fontSize: 20, fontWeight: '500'}}> <Text style={{fontSize: 20, fontWeight: '500'}}>Educational background (current)</Text> <Icon 
            name= 'pencil'
            style={{fontSize: 20, marginRight: 10}}
            color='black'
        />
        </Text>
        </View>
        </TouchableOpacity> 
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>School name: <Text style={{fontWeight: 'bold'}}>{profiles.schname}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>School address: <Text style={{fontWeight: 'bold'}}>{profiles.schaddress}</Text>
        </Text>
        <Text style={{opacity: 0.6}}>Year & level: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{profiles.yearlevel}</Text>
        </Text>
        <Text style={{opacity: 0.6}}><Text style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{profiles.course}</Text>
        </Text>
        </View>
      </View>
      
      </View>))}
      
      {/* <View style={Universalstyles.studprofile}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>samuel george y. dela cruz</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>25 years old</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Age</Text>
      </View>
      <View style={[Universalstyles.studprofile]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>0123-456-7890</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Contact number</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>C.M. Recto Avenue Lapasan, Cagayan de Oro City 9000</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Address</Text>
      </View>
      <View style={[Universalstyles.studprofile]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>University of science and technology of the philippines</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>School name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>College</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Education stage</Text>
      </View>
      <View style={[Universalstyles.studprofile]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>1st year college</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Year & level</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>BS - Information technology</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Course</Text>
      </View> */}
    
   
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile