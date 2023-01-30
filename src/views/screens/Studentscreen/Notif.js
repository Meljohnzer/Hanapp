import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import Logo1 from '../../../../assets/bg/profile2.png';
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Fontisto'
import moment from 'moment'
import { axiosRequest,server } from '../../components/api';




//with mysql database using php for backend


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Notif = ({navigation}) => {
  const {height} = useWindowDimensions();
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
  
navigation.setOptions({
   title: "Notification",
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 100, },
   headerTitleStyle: { fontWeight: '100', fontSize: 25, }
  })
 await axiosRequest.get('/api/activity.php').then((response)=>{
    //  console.log(response.data)
setGet (prevState => ({...prevState, post: response.data}))
     
})

}

  )},[])


  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ 
          //height: Dimensions.get('window').height,
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
    {/* {gets.post.map((label,index)=>( */}
 { gets.post.map((label,index)=>( <TouchableOpacity key={index} onPress={() => navigation.navigate('Application status',{itemId:label.postID})}>
  { label.status == "Approved"  && <View style={[Universalstyles.jobPost,{}]}>

      <View style={[Universalstyles.jobContent,{backgroundColor:"#83e0f8"}]}>
      { label.profile ? <Image source={{uri: server + label.profile}} style={Universalstyles.Jobimage}/>: <Image source={Logo1} style={Universalstyles.Jobimage}/>}
          
          <View style={Universalstyles.jobContent2}>
          <Text style={{fontSize: 17, }}><Icon3 name='person' style={{fontSize: 20, color: 'black',}}/>
          <Text style={{color: 'black', }}>  {label.lastname}, {label.firstname} {label.midname} {label.suffname}</Text></Text>
          <Text style={{fontSize: 17, opacity: 0.6}}>
          <Text style={{color: 'black',}}>approved your application for <Text>{label.lookingfor}</Text></Text></Text>
          <Text style={{fontSize: 17,}}>See more...</Text>
          <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
          <Text style={{opacity: .5 }}><Icon2 name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.dateA).add(8,'hour').startOf('seconds').fromNow()}</Text>
            </View>
    </View>
    </View>
    </View> }
    </TouchableOpacity>))}
    
    {/* ))} */}
    </ScrollView>
    </SafeAreaView>
  )
}

export default Notif