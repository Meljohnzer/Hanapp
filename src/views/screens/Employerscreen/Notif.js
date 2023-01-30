import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import React from 'react'
import { axiosRequest,server } from '../../components/api';
import Universalstyles from '../../../const/Universalstyle';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Fontisto'
import Logo1 from '../../../../assets/bg/profile2.png'
import moment from 'moment'
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

//with mysql database using php for backend

const Notif = ({navigation}) => {
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
  
  await navigation.setOptions({
   title: "Notification",
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 150 },
   headerTitleStyle: { fontWeight: '100', fontSize: 25 }
  })

  await axiosRequest.get('/api/empnotif.php').then((response)=>{
    setGet (prevState => ({...prevState, post: response.data}))
         console.log(response.data)
    })
    

}

  )},[])

  return (
    <SafeAreaView style={{}}>
      <ScrollView
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
  { gets.post.map((label,index)=>( <TouchableOpacity key={index} onPress={() =>  navigation.navigate('Manage', { itemId : label.postID,title:label.lookingfor })}>
  { label.cor && label.applicantID == null ? <View style={[Universalstyles.jobPost,{}]}>

      <View style={[Universalstyles.jobContent,{backgroundColor:"#83e0f8"}]}>
          {label.profile ? <Image source={{uri:server + label.profile}} style={Universalstyles.Jobimage}/>: <Image source={Logo1} style={Universalstyles.Jobimage}/>}
          
          <View style={Universalstyles.jobContent2}>
          <Text style={{fontSize: 17, }}><Icon3 name='person' style={{fontSize: 20, color: 'black',}}/>
          <Text style={{color: 'black', }}>  {label.lastname}, {label.firstname} {label.midname} {label.suffname}</Text></Text>
          <Text style={{fontSize: 17, opacity: 0.6}}>
          <Text style={{color: 'black',}}>Send an Application For <Text>{label.lookingfor}</Text></Text></Text>
          <Text style={{fontSize: 17,}}>See more...</Text>
          <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
          <Text style={{opacity: .5 }}><Icon2 name='clock-outline' style={{fontSize: 20, color: 'black', }}/> {moment(label.appliedat).add(8,'hour').startOf('seconds').fromNow()}</Text>
            </View>
    </View>
    </View>
    </View> : <View></View>}
    </TouchableOpacity>))} 
    </ScrollView>
    </SafeAreaView>
  )
}

export default Notif