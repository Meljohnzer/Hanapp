import { SafeAreaView, ScrollView, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React from 'react'
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

const Activity = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

const [gets,setGet] = React.useState({
      post : []
     })

    React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/activity.php').then((response)=>{
     
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
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Activity log</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>Monitor your submitted job hiring application</Text>
            </View>
             </View>
      </View>
      {gets.post.map((label,index)=>(<View key = {index} style={[Universalstyles.jobPost, {}]}>
  
       <View style={Universalstyles.jobContent}>
      
       {label.profile ? <Image source={{uri:server+label.profile}} style={Universalstyles.Jobimage}/>
     : <Image source={Logo1} style={Universalstyles.Jobimage}/>} 
   
    <View style={Universalstyles.jobContent2}>
    
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'black',}}/>  {label.lookingfor}</Text>
   {label.compname && <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'black',}}/> {label.compname}</Text>}
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> {label.street} {label.city} {label.province} {label.zipcode}</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'black', }}/> {label.jobtype}</Text>   
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.appliedat).add(8,'hour').startOf('seconds').fromNow()}</Text>

    
    {label.status == null &&  <TouchableOpacity onPress={()=> navigation.navigate('Application status',{itemId:label.postID})}>
      <View style={[Universalstyles.jobstatus, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
         Pending
      </Text>
      </View>
      </TouchableOpacity> }
      
    {label.status == "Approved" &&  <TouchableOpacity onPress={()=> navigation.navigate('Application status',{itemId:label.postID})}>
      <View style={[Universalstyles.jobstatus, {backgroundColor:"green"}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
         {label.status}
      </Text>
      </View>
      </TouchableOpacity> }

      {label.status == "Decline" &&  <TouchableOpacity onPress={()=> navigation.navigate('Application status',{itemId:label.postID})}>
      <View style={[Universalstyles.jobstatus, {backgroundColor:"red"}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
         {label.status}
      </Text>
      </View>
      </TouchableOpacity> }

    </View>
    </View>
    
    </View>))}
    </ScrollView>
    </SafeAreaView>
  )
}

export default Activity