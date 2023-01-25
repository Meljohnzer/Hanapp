import { SafeAreaView, ScrollView, StyleSheet, Pressable, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Searchbar from '../../components/Searchbar';
import OptionsMenu from "react-native-option-menu";
import Universalstyles from "../../../const/Universalstyle";
import { axiosRequest } from '../../components/api';
import moment from 'moment'



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
  function Save(id){ Alert.alert(
    "", 
    "Are you sure you want to save this post?",
    [
      {
        text: "Yes",
        onPress:  () =>{console.log(id)}
        ,
        style: "yes"
      },
      { 
        text: "No", onPress: () => console.log("No Pressed")
      }
    ]
  )
  };
  
  
  return (
<SafeAreaView>

<ScrollView
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
        }
      >
        <>
      
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

{gets.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost,{paddingBottom: 10}]}>
  
    <View style={Universalstyles.jobContent}>
      
    <Image source={Logo1} style={Universalstyles.Jobimage}/>
    

    <View style={Universalstyles.jobContent2}>
    <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
    <OptionsMenu
    key={label.postID}
  customButton={myIcon}
  options={["Save", "Report", "Cancel"]}
  actions={[Save, report]}
  
 // onPress = {()=>setId(()=>{label.postID})}
  
  

  />

    </View>
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'grey',}}/>  {label.lookingfor}</Text>
    {label.compname && <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'blue',}}/> {label.compname}</Text>}
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', }}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'blue', }}/> {label.jobtype}</Text>   
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.createdat).local().startOf('seconds').fromNow()}</Text>

    
      <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Job description', { itemId : label.postID, title : label.lookingfor})
    }
    }>
      <View style={[Universalstyles.jobContent3, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          {label.lookingfor}
      </Text>
      </View>
      </TouchableOpacity>
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
