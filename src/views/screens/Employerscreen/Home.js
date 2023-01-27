import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, Alert,Dimensions} from 'react-native'
import Logo from '../../../../assets/bg/Picture3.png'
import Logo1 from '../../../../assets/bg/profile2.png';
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/Octicons'
import OptionsMenu from "react-native-option-menu";
import moment from 'moment'

import { axiosRequest,server } from '../../components/api';



//with mysql database using php for backend


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}



const Home = ({navigation}) => {
    const {height} = useWindowDimensions();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

     const [gets,setGet] = React.useState({
      post : []
     })
const [postID,setPostID] = React.useState()

// var Data ={
//       postID : postID
//       };

//       var headers = {
//         'Access-Control-Allow-Origin': 'true',
//         'Content-Type': 'application/json',
//       };
  


React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/posted.php').then((response)=>{
     
setGet (prevState => ({...prevState, post: response.data}))
     
})



}

  )},[])
  const myIcon = (<Icon2 name='dots-horizontal' size={30} color="black "/>)

  return (
    <SafeAreaView style={{flex: 1, }}>
   <ScrollView style={{}}
        contentContainerStyle={{
          
          width: Dimensions.get('window').width,
         
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#F5E44C']}
          />
        }
      >
    <View style={[Universalstyles.HomeEmp, {backgroundColor: '#F5E44C', paddingVertical: 5, paddingHorizontal: 10}]}>

    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Icon
      name="navicon"
      style={{ fontSize: 50,  color: 'black', }} />
      </TouchableOpacity>

      <Image source={Logo} style={[Universalstyles.Logo1, {height: height * 0.1,resizeMode:'center'}]} />

      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <Icon
      name="bell"
      style={{ fontSize: 50,  color: 'black', }} />
      </TouchableOpacity>    
    </View>

  {gets.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost,{}]}>

    <View style={Universalstyles.jobContent}>
    {label.profile ? <Image source={{uri : server + label.profile}} style={[Universalstyles.Jobimage,{resizeMode:'cover'}]}/> : <Image source={Logo1} style={Universalstyles.Jobimage}/>}
    <View style={[Universalstyles.jobContent2,{resizeMode:'cover'}]}>
    <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
    
  {label.status == "open" &&  <OptionsMenu
  customButton={myIcon}

  options={["Remove", "close", "Cancel"]}
  actions={[() => Alert.alert(
    "", 
    "Are you sure you want to save this post?",
    [
      {
        text: "Yes",
        onPress: () => { axiosRequest.post('api/removepost.php',JSON.stringify({postID:label.postID})).then((response) => {
          console.log(response.data)
          Alert.alert(response.data,"Change screen to see the changes made",
          [
      {
        text: "Okay!",
        onPress: () => console.log("NO ACCTION"),
        style: "yes"
      }
    ]
         )
       
             })},
        style: "yes"
      },
      { 
        text: "No", onPress: () => console.log("No Pressed")
      }
    ]
  ), () => Alert.alert(
    "", 
    "Disable The post for applicants??",
    [
      {
        text: "Yes",
        onPress: () => { axiosRequest.post('api/poststatus.php',JSON.stringify({status:label.status,status:"close",postID:label.postID})).then((response) => {
          Alert.alert(response.data,"Change screen to see the changes made",
          [
      {
        text: "Okay!",
        onPress: () => console.log("NO ACCTION"),
        style: "yes"
      }
    ]
         )
       
             })},
        style: "yes"
      },
      { 
        text: "No", onPress: () => console.log("No Pressed")
      }
    ]
  )]}
  /> }

{label.status == "close" &&  <OptionsMenu
  customButton={myIcon}

  options={["Remove", "Open", "Cancel"]}
  actions={[() => Alert.alert(
    "", 
    "Are you sure you want to Remove this post?",
    [
      {
        text: "Yes",
        onPress: () => console.log("Yes Pressed"),
        style: "yes"
      },
      { 
        text: "No", onPress: () => console.log("No Pressed")
      }
    ]
  ), () => Alert.alert(
    "", 
    "Enable The post for applicants??",
    [
      {
        text: "Yes",
        onPress: () => { axiosRequest.post('api/poststatus.php',JSON.stringify({status:label.status,status:"open",postID:label.postID})).then((response) => {
          Alert.alert(response.data,"Change screen to see the changes made",
          [
      {
        text: "Okay!",
        onPress: () => console.log("NO ACCTION"),
        style: "yes"
      }
    ]
         )
       
             })},
        style: "yes"
      },
      { 
        text: "No", onPress: () => console.log("No Pressed")
      }
    ]
  )]}
  /> }
  </View>
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon3 name='person' style={{fontSize: 23, color: 'black',}}/><Text style={{color: 'black', }}>  {label.lookingfor}</Text></Text>
    
    { label.status == "open" && <Text style={{opacity:.5}}><Icon4 name='dot-fill' style={{fontSize: 20, color: 'green', alignContent: 'center'}}/>  Open</Text> }
    { label.status == "close" && <Text style={{opacity:.5}}><Icon4 name='dot-fill' style={{fontSize: 20, color: 'red', alignContent: 'center'}}/>  Close</Text>}

    <Text style={{opacity:.5}}><Icon2 name='account-group' style={{fontSize: 20, color: 'brown', alignContent: 'center'}}/> <Text style={{color: 'black', }}> {label.applicantNO}</Text> People applied</Text>
<Text style={{opacity: .5 }}><Icon2 name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.createdat).local().startOf('seconds').fromNow()}</Text>

    <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Manage', { itemId : label.postID,title:label.lookingfor })

    }
    }>
    <View style={Universalstyles.jobContent3}>
      
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          Manage
      </Text>
      </View>
      </TouchableOpacity>
      </View>
    
    
    
    </View>
    
  </View>))}
  
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home