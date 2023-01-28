import { SafeAreaView, ScrollView, StyleSheet, Pressable, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Searchbar from '../../components/Searchbar';
import OptionsMenu from "react-native-option-menu";
import Universalstyles from "../../../const/Universalstyle";
import { axiosRequest,server} from '../../components/api';
import moment from 'moment'

//with mysql database using php for backend

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({navigation}) => {


const [id,setId] = React.useState()

const gg = {
 gg : id
}
console.log(id)
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  const {width} = useWindowDimensions();
  const [value,setValue] = useState();
  function updateSearch(value){
  }
  



  
 const [gets,setGet] = React.useState({
      post : []
     })
const [postID,setPostID] = React.useState()


React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/feed.php').then((response)=>{
     
setGet (prevState => ({...prevState, post: response.data}))
     
})

}

  )},[])

  const myIcon = (<Icon name='dots-horizontal' size={30} color="black "/>)
const report = () => Alert.alert(
    "", 
    "Are you sure you want to report this post?",
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
  
  
  
  return (
<<<<<<< HEAD
<SafeAreaView style={{flex:1}}>
=======
<SafeAreaView style={{flex: 1}}>
>>>>>>> 48ad56adfed645b8e17e194e6e3693c49b06769f
<View style={{padding: 10, flexDirection: 'row', backgroundColor: '#F5E44C' }}>

  
    <Image source={Logo} style={{
      width: 45,
      height: 40,
      resizeMode: 'center',
      marginRight: 7
    }} />
  

  <Searchbar 
    IconName='search-web'
    placeholder='Search job'
    value={value}
    updateSearch={updateSearch}
    />

  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
    <Icon
      name="bell"
      style={{ fontSize: 40, marginLeft: 5, color: 'black', }} />
  </TouchableOpacity>
</View>
<ScrollView
        contentContainerStyle={{
<<<<<<< HEAD
=======
          justifyContent: 'center',
>>>>>>> 48ad56adfed645b8e17e194e6e3693c49b06769f
          
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
        <>
      
<<<<<<< HEAD


=======
>>>>>>> 48ad56adfed645b8e17e194e6e3693c49b06769f
{gets.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost,{}]}>
  
    <View style={Universalstyles.jobContent}>
      
    {label.profile  ? <Image source={{uri:server+label.profile}} style={Universalstyles.Jobimage}/>
     : <Image source={Logo1} style={Universalstyles.Jobimage}/>} 
    

    <View style={Universalstyles.jobContent2}>
    <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
    <OptionsMenu
    key={label.postID}
  customButton={myIcon}
  options={["Report", "Cancel"]}
  actions={[report]}
  
 // onPress = {()=>setId(()=>{label.postID})}
  
  

  />

    </View>
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'grey',}}/>  {label.lookingfor}</Text>
    {label.compname && <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'blue',}}/> {label.compname}</Text>}
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', }}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'blue', }}/> {label.jobtype}</Text>   
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.createdat).add(8,'hour').startOf('seconds').fromNow()}</Text>

    
   {label.status == 'open' &&  <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { itemId : label.postID, title : label.lookingfor})
    }
    }>
      <View style={[Universalstyles.jobContent3, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          VIEW
      </Text>
      </View>
      </TouchableOpacity>}
      {label.status == 'close' &&  <TouchableOpacity disabled = {true} onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { itemId : label.postID, title : label.lookingfor})
    }
    }>
      <View style={[Universalstyles.jobContent3, {backgroundColor:"red"}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
      Application is Now Closed
      </Text>
      </View>
      </TouchableOpacity>}
    </View>
    </View>
  
    </View>
    
    ))}
    </>
 
  </ScrollView>
  
  </SafeAreaView>
  
  
  );

}

export default Home
