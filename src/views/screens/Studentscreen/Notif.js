import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import Logo from '../../../../assets/bg/Picture3.png'
import Logo1 from '../../../../assets/bg/profile2.png';
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Fontisto'
//import axios from 'axios'
import moment from 'moment'
import { axiosRequest } from '../../components/api';
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


  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{ 
          
          height: Dimensions.get('window').height,
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
    <TouchableOpacity onPress={() => navigation.navigate('Interview information')}>
    <View style={[Universalstyles.jobPost,{}]}>

      <View style={Universalstyles.jobContent}>
          <Image source={Logo1} style={Universalstyles.Jobimage}/>
          
          <View style={Universalstyles.jobContent2}>
          <Text style={{fontSize: 17, }}><Icon3 name='person' style={{fontSize: 20, color: 'black',}}/>
          <Text style={{color: 'black', }}>  Uchiha, Itachi</Text></Text>
          <Text style={{fontSize: 17, opacity: 0.6}}>
          <Text style={{color: 'black',}}>approved your application for <Text>Front end programmer.</Text></Text></Text>
          <Text style={{fontSize: 17,}}>See more...</Text>
          <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
          <Text style={{opacity: .5 }}><Icon2 name='clock-outline' style={{fontSize: 20, color: 'black', }}/> 1 hour ago</Text>
            </View>
    </View>
    </View>
    </View>
    </TouchableOpacity>
    {/* ))} */}
    </ScrollView>
    </SafeAreaView>
  )
}

export default Notif