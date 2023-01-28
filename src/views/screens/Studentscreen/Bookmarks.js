import { SafeAreaView, ScrollView, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React from 'react'
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Universalstyles from '../../../const/Universalstyle';
import { axiosRequest,server} from '../../components/api';
import moment from 'moment'


//with mysql database using php for backend
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}




const Bookmarks = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
   const [gets,setGet] = React.useState({
      post : []
     })
const [postID,setPostID] = React.useState()

React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/bookmark.php').then((response)=>{
     
setGet (prevState => ({...prevState, post: response.data}))
     
})



}

  )},[])

  return (
    <SafeAreaView style={{flex: 1}}>
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
        
    <View style={[{}]}>
    <View style={{padding: 10, }}>
            <View  style= {Universalstyles.txt2}>
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Bookmarks</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>Your saved job will be place here for you to review</Text>
            </View>
             </View>
      </View>

      {gets.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost, {paddingBottom: 10}]}>
  
    <View style={Universalstyles.jobContent}>
      
    {label.profile ? <Image source={{uri:server+label.profile}} style={Universalstyles.Jobimage}/>
     : <Image source={Logo1} style={Universalstyles.Jobimage}/>} 
   
    <View style={Universalstyles.jobContent2}>
   
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'black',}}/>  {label.lookingfor}</Text>
    {label.compname && <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'black',}}/> {label.compname}</Text>}
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> {label.street} {label.city} {label.province} {label.zipcode}</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'black', }}/> {label.jobtype}</Text>   
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
    
    </View>))}
     
    </ScrollView>
    </SafeAreaView>
  )
}

export default Bookmarks