import React, {useState} from 'react';
import { View, useWindowDimensions, Dimensions, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Universalstyles from '../../../const/Universalstyle';
import * as ImagePicker from 'expo-image-picker';
import Logo1 from '../../../../assets/bg/profile.png';
import Logo from './../../../../assets/bg/bgimage5.jpg'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Fontisto';
import OptionsMenu from "react-native-option-menu";
import { axiosRequest } from '../../components/api';
import { WebView } from 'react-native-webview';
import HTMLView from 'react-native-htmlview';
import {
 Menu,
 MenuProvider,
 MenuOptions,
 MenuOption,
 MenuTrigger,
 renderers
} from "react-native-popup-menu";



const myIcon = (<Icon3 name='dots-three-vertical' size={30} color="black " />)




const closeIconAlert = () => Alert.alert(
  "", 
  "Are you sure you want to reject the applicant?",
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
);

const report = () => Alert.alert(
    "", 
    "Are you sure you want to report this applicant?",
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
  );
  
  




      
  
const FirstRoute = ({navigation,arr}) => 


    <ScrollView style={{}}>
   {arr.map((label,index)=>( <View key = {index}>
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon4 name='person' style={{fontSize: 25, color: 'black',}}/>  {label.lookingfor}</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style=style={Universalstyles.text}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
     { label.compname && <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'black', marginRight: 10}}/> {label.compname}</Text>}
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> {label.lastname}, {label.firstname} {label.midname}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'red', marginRight: 10}}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
      {/* <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}
    <Text style={Universalstyles.text}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'black', }}/> {label.jobtype}</Text> 
    <Text style={Universalstyles.text}><Icon name='currency-php' style={{fontSize: 20, color: 'red', }}/> {label.salary} {label.rate} </Text>

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Hiring start in:</Text> 
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end on: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{paddingHorizontal: 25, fontSize: 15, opacity:.5}}>{label.startdate} </Text>
      <Text style={{paddingHorizontal: 100,fontSize: 15, opacity:.5}}>{label.enddate}</Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500'}}>Job Description</Text>
    </View>
    <View style={{paddingHorizontal: 50,paddingVertical:20}}>
  {/* <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}> {label.jobdesc}
    </Text>*/}
    
    <HTMLView
    
    value = {label.jobdesc}
  />
    </View>
    </View>
    </View>))}
    <View style={{marginTop: 15, marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
    <View style={{borderColor: 'orange',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
      <View style={{borderColor: '#4169e1',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Done</Text>
      </View>
    </TouchableOpacity>
    </View>
   </ScrollView>
 




 

const SecondRoute = ({navigation, profile,arr}) => (
  

<ScrollView style={{}}>
<View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 0, margin: 0}}>
    
    <View style={{paddingVertical: 10}}>
   {arr.map((label,index)=>(  label.applyID ? <View key = {index}>
    {/* <Text>
    No Applicants</Text> */}
    </View>: <View key = {index} style={{backgroundColor: 'white',
    borderColor: '#e8e8e8',
    padding: 5,
    borderWidth:  2,
    flexDirection: 'row',
    borderRadius: 5}}>
    
    
    <Image source={Logo1} style={{
      width: 70,
      height: 70,
      marginRight: 7,
      borderRadius: 35,
      alignSelf: 'center'
      
    }}/>
    
    
    <View style={{flex:1,flexDirection:"row"}}>
    <View key = {index} style={{padding: 10,
    flex: 1,
    borderColor: '#e8e8e8',
    marginLeft: 0,
    flexDirection: 'column',
    justifyContent: 'space-evenly'}}>
    <Text style={{ marginBottom: 0, fontSize: 15}}>{label.lastname}, {label.firstname} {label.midname}<Text style={{color: 'blue', textTransform: 'capitalize'}}> </Text> </Text>
    <Text style={{ opacity: .5, fontSize: 12}}>{label.street} {label.city} {label.province} {label.zipcode} <Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>
    <Text style={{ opacity: .5}}>{label.birthday}<Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>
        </View>
      
      <View style={{ flex: 1, flexDirection: 'row',position:"relative",flexDirection:"row",justifyContent:"flex-end" ,alignItems:"center"}}>
      
      
    
      <TouchableOpacity onPress={closeIconAlert}>
      <Icon2 name='closecircle' style={{fontSize: 30, color: 'red', marginHorizontal: 10}}/>
      </TouchableOpacity>
     
      
      <TouchableOpacity onPress={() => Alert.alert(
  "", 
  "Are you sure you want to Approved the applicant?",
  [
    {
      text: "Yes",
      onPress: () => {
        axiosRequest.post('api/applicant.php',JSON.stringify({applyID:label.aid,status:"Approved"})).then((response) => {
       
         // console.log(response.data)
         // navigation.navigate('Manage')
          // setApp (prevState => ({...prevState, post: response.data}))
      
            })
        },
      style: "yes"
    },
    { 
      text: "No", onPress: () => console.log("No Pressed")
    }
  ]
)}>
      <Icon2 name='checkcircle' style={{fontSize: 30, color: 'green', marginHorizontal: 10}}/>
      </TouchableOpacity>
      <OptionsMenu
      customButton={myIcon}
      options={["Profile", "Report", "Cancel"]}
      actions={[()=>navigation.navigate('Applicant profile',{
       itemId:label.userID,postID:label.pid
      }), report]}
      />
    {/*  <MenuProvider style = {{flex:1,justifyContent:"center",alignItems:"center",width:100}}>
            <Menu o renderer={renderers.Popover}
     rendererProps={{ placement: 'auto' }} style= {{height:80,width:100,flex:1,alignItems:"center",justifyContent:"center"}}>
  <MenuTrigger><Icon3 name='dots-three-vertical' size={30} color="black " />
  </MenuTrigger>
  <MenuOptions optionsContainerStyle={{ marginLeft:-15,width:300,position:"relative",top:5 }}>
    <MenuOption onSelect= {()=> navigation.navigate('Applicant profile',{itemId:label.userID,postID:label.postID})} style={{color:"whiteSmoke"} }value={1} text='PROFILE' />
    <MenuOption style={{color:"whiteSmoke"}} value={2}>
      <Text style={{color:"whiteSmoke"}}>REPORT</Text>
    </MenuOption>
    <MenuOption value={3} text='CLOSE' />
  </MenuOptions>
</Menu>
        </MenuProvider>  */}        
      </View>
      </View>
  
 
    </View>))}
    </View>
    </View>
    
  
  
  </ScrollView>
);


  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'black'}
        inactiveColor={'black'}
        style={{marginTop:0,backgroundColor:'white', textTransform: 'lowercase'}}
        indicatorStyle={{ backgroundColor: 'blue' }}
        getLabelText={({ route }) => route.title}
    />
);

// const PlaceholderImage = require('../../../../assets/bg/bgimage5.jpg');


export default function Manage({navigation,route, }) {
 
 
 
  const profile = () => navigation.navigate('Applicant profile');
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      
      allowsEditing: true,
      quality: 1,
    });



    if (!result.canceled) {

      setSelectedImage(result.assets[0].uri);
      console.log(result.assets[0].uri)

      setSelectedImage (result.assets[0].uri);

    } else{
      alert('You did not select any image.'); 
    }
  };

 const [gets,setGet] = React.useState({
      post : []
     })
 const [app,setApp] = React.useState({
      post : []
     })
     
     

 const Profile = () => {
    navigation.navigate('Applicant profile')
  }
     
    

const { itemId,title } = route.params

     
var Data ={
      postID : itemId
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      };
     
 
React.useEffect(()=>{
 
navigation.setOptions({
   title: title,
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 150 },
   headerTitleStyle: { fontWeight: '100', fontSize: 25 }
  })
 
 navigation.addListener('focus',async () => {
  
 await axiosRequest.post('/api/manage.php', JSON.stringify(Data), headers)  
      .then((response) => {
       
setGet (prevState => ({...prevState, post: response.data}))

    axiosRequest.post('/api/applied.php', JSON.stringify(Data), headers)  
      .then((response) => {
    setApp (prevState => ({...prevState, post: response.data}))

      })
      
      


      })
      
 
      
}

  )},[])

    
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute navigation={navigation} arr = {gets.post}/>;
          case 'second':

            return <SecondRoute navigation={navigation}  profile = {Profile} arr = {app.post}  />;

         
            
          default:
            return null;
        }
      };
  const layout = useWindowDimensions();
  const {height, width} = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Posted hiring' },
    { key: 'second', title: 'Applicants' },
  ]
  );
  
  return (
    <SafeAreaView style={{flex: 1}}>
    
    { selectedImage ? <Image 
    source= {{uri: selectedImage}}
    style={[{  
     width: 'auto',
     height: 100,
     resizeMode: 'cover', height: height * 0.20, 
     }]} 
     /> :  <Image 
     source= {Logo}
      style={[{  
       width: 'auto',
       height: 100,
       resizeMode: 'cover', height: height * 0.20, 
       }]} 
       /> }
     <View style={{flexDirection: 'row-reverse',  justifyContent: 'flex-start', alignItems: 'flex-end'}}>
     <View style={{padding: 5, position: 'absolute', flex: 1, }}>
     <TouchableOpacity onPress={pickImageAsync}>
     <View style={{backgroundColor: 'grey', width: 50, height: 50,  borderRadius: 25, padding: 6,}}>
     <Icon3 name='edit' style={{
      fontSize: 35, 
      color: 'gold', 
      margin: 1
      
      }}/>
     </View>
     </TouchableOpacity>
     </View>
     </View>
     
     
<TabView key= {index}
    navigationState={{ index, routes }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={{ width: Dimensions.get('window').width }}
    />
     
     
    
</SafeAreaView>
  );
}
