import React, {useState} from 'react';
import { View, useWindowDimensions, Dimensions, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Logo from '../../../../assets/bg/bgimage5.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Universalstyles from '../../../const/Universalstyle';
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import * as DocumentPicker from "expo-document-picker"

import { axiosRequest } from '../../components/api';

const FirstRoute = ({navigation, arr,bookmark,Remove,save,apply}) => (
    <ScrollView style={{}}>
   { arr.map((label,index)=>(<View key={index}>
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon4 name='person' style={{fontSize: 30, color: 'grey', }}/> {label.lookingfor}</Text>
      {label.compname && <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'blue',}}/> {label.compname}</Text>}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', }}/> {label.lastname}, {label.firstname} {label.midname}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', }}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
      <Text style={Universalstyles.text}><Icon name='currency-php' style={{fontSize: 20, color: 'blue', }}/> {label.salary} {label.rate} </Text>
      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'green', marginRight: 10}}/> Hiring start in: </Text>
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end on: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{ paddingHorizontal: 25,  fontSize: 15, opacity:.5, color: "blue"}}> {label.startdate}</Text>
      <Text style={{ paddingHorizontal: 105,  fontSize: 15, opacity:.5, color: "red"}}>{label.enddate}</Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
     <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500'}}>Job Description</Text>
    </View>
    <View style={{padding: 5, }}>
    <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}>
      {label.jobdesc} 
    </Text>
    </View>
    </View>
    <View style={{marginTop: 15, marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
   { save ? <TouchableOpacity  onPress={Remove}>
    <View style={{borderColor: 'red',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>unsaved</Text>
    </View>
    </TouchableOpacity> : <TouchableOpacity  onPress={bookmark}>
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
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>save</Text>
      </View>
    </TouchableOpacity>
    
   }
    {apply ? <TouchableOpacity  >
      <View style={{borderColor: 'red',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Abort</Text>
      </View>
    </TouchableOpacity> : <TouchableOpacity  onPress={() => navigation.navigate('Apply',{postID:label.postID})}>
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
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Apply</Text>
      </View>
    </TouchableOpacity> }
    </View>
    </View>))}
   </ScrollView>
 );


const SecondRoute = ({arr}) => (
 
<ScrollView style={{}}>
  {arr.map((label,index)=>(<View key={index}>
    <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, }}>
    <View style={{borderBottomWidth: 2, borderColor: '#e8e8e8', backgroundColor: '#e5e6e6', borderTopEndRadius: 10, borderTopStartRadius: 10}}>
    <View style={{
      backgroundColor: '#F5E44C',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 0,
      borderRadius: 67.5, 
      width: 135, 
      height: 135, 
      alignSelf: 'center',
      }}>
        
    <Image source={Logo1} style={{
     marginTop: 2.5,
     borderRadius: 65, 
     width: 130, 
     height: 130, 
     resizeMode: 'contain',
     alignSelf: 'center',
    }}/>
    </View>
    </View>
     <Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10, 
            paddingHorizontal: 5,  
            fontSize: 20, 
            fontWeight: '500',
          }}>
            Employer information
        </Text>
      <Text style={Universalstyles.text}><Icon name='account-outline' style={{fontSize: 20, color: 'blue', }}/> {label.lastname}, {label.firstname} {label.midname} {label.suffname}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', }}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
      {label.compname &&<Text style= {{
            color: '#2f2f2f', 
            paddingVertical: 10, 
            paddingHorizontal: 5,  
            fontSize: 20, 
            fontWeight: '500',
          }}>
            Company information
        </Text>}
      {label.compname && <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 25, color: 'blue',}}/> {label.compname} </Text>}
      {label.establishdate &&<Text style={Universalstyles.text}><Icon name='medal-outline' style={{fontSize: 20, color: 'blue', }}/>  Since {label.establishdate} </Text>}
      
     </View>

    
     {label.compname && <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '500'}}>Company Description</Text>
    </View>
    <View style={{padding: 5, }}>
    <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}>
      {label.compdesc}
    </Text>
    </View>
    </View>}
    </View>))}

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




export default function Description({navigation,route}) {
 const [gets,setGet] = React.useState({
      post : []
     })
     
     const [save,setSave] = React.useState()
     const [apply,setApply] = React.useState()
     
     const { itemId,title } = route.params
     
var Data ={
      postID : itemId
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      };
    
    
    // const [myimg,setMyimg] = React.useState()


    // const Chimg = async() =>{
    //   let File = await DocumentPicker.getDocumentAsync({
    //     type: 'image/*'
    //   })
    //   if(File.type === 'cancel'){
    //     console.log("cancel")
    //   }else{
    //   setMyimg(()=> File.uri);
    //   console.log(File.uri)
    //   }


    // }
    
 const Bookmark = () => {
 axiosRequest.post('/api/save.php', JSON.stringify(Data), headers) 
      .then((response) => {
         console.log(response.data)
         setSave(current => !current)
         
      })


 }
 
 const Remove = () => {
 axiosRequest.post('/api/unsaved.php', JSON.stringify(Data), headers) 
      .then((response) => {
         console.log(response.data)
         setSave(current => !current)
      })
 }
 
 
React.useEffect(()=>{

navigation.setOptions({
   title: title,
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 150, },
   headerTitleStyle: { fontWeight: '100', fontSize: 25,  }
  })
 
 
 
 
 navigation.addListener('focus',async () => {
 await axiosRequest.post('/api/manage.php', JSON.stringify(Data), headers)  
      .then((response) => {

setGet (prevState => ({...prevState, post: response.data}))
      })
      
await axiosRequest.post('api/condition2.php',JSON.stringify(Data),headers).then((res)=>{
     console.log(res.data)
     if(res.data == 'Already Save'){
      setSave(true)
     }else{
      
     }
     
    })
    
await axiosRequest.post('api/condition3.php',JSON.stringify(Data),headers).then((res)=>{
     console.log(res.data)
     if(res.data == 'Already applied'){
      setApply(true)
     }else{
      
     }
     
    })
      
}

  )},[])
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
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute bookmark = {Bookmark} Remove = {Remove} save = {save} navigation={navigation} arr = {gets.post} apply = {apply}/>;
          case 'second':
            return <SecondRoute arr={gets.post} />;
          default:
            return null;
        }
      };
  const layout = useWindowDimensions();
  const {height, width} = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Job overview' },
    { key: 'second', title: 'Employer overview' },
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

    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={{ width: Dimensions.get('window').width }}
    />
</SafeAreaView>
  );
}