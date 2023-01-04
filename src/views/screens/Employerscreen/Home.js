import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import Logo from '../../../../assets/bg/Picture3.png'
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
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

var Data ={
      postID : postID
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      };
  


React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axiosRequest.get('/api/posted.php').then((response)=>{
     
setGet (prevState => ({...prevState, post: response.data}))
     
})



}

  )},[])


  return (
    <SafeAreaView style={{flex: 1, }}>
   <ScrollView style={{}}
        contentContainerStyle={{
          
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#F5E44C']}
          />
        }
      >
    <View style={[Universalstyles.HomeEmp, {backgroundColor: '#F5E44C', paddingVertical: 5, paddingHorizontal: 10, }]}>

    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Icon
      name="navicon"
      style={{ fontSize: 50,  color: 'black', }} />
      </TouchableOpacity>

      <Image source={Logo} style={[Universalstyles.Logo1, {height: height * 0.1, }]} />

      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <Icon2
      name="bell"
      style={{ fontSize: 50,  color: 'black', }} />
      </TouchableOpacity>    
    </View>
   
<View  style={Universalstyles.jobPost}>
{gets.post.map((label,index)=>(
    <View  key = {index} style={Universalstyles.jobContent}>
    <Image source={Logo1} style={Universalstyles.Jobimage}/>
    <View style={Universalstyles.jobContent2}>

    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon3 name='person' style={{fontSize: 23, color: 'black',}}/><Text style={{color: 'black', }}>  {label.lookingfor}</Text></Text>
    
   { label.status ? <Text style={{opacity:.5}}><Icon name='exclamation' style={{fontSize: 20, color: 'orange', alignContent: 'center'}}/> {'Status: '} <Text style={{color: 'green', }}>open</Text></Text> : <Text style={{opacity:.5}}><Icon name='exclamation' style={{fontSize: 20, color: 'orange', alignContent: 'center'}}/> {'Status: '} <Text style={{color: 'red', }}>close</Text></Text>}

    <Text style={{opacity:.5}}><Icon2 name='account-group' style={{fontSize: 20, color: 'brown', alignContent: 'center'}}/> {'Applicants: '} <Text style={{color: 'blue', }}>87</Text></Text>

    <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Manage', { itemId : label.postID, })

    }
    }>
    <View style={Universalstyles.jobContent3}>
      
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          {label.lookingfor}
      </Text>
      </View>
      </TouchableOpacity>
      </View>
    
    
    
    </View>))}
    
  </View>
  
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home