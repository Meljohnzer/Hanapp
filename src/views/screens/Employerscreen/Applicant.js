import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import Logo1 from '../../../../assets/bg/profile2.png';
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Fontisto'
import Icon4 from 'react-native-vector-icons/Octicons'
//import axios from 'axios'
import moment from 'moment'
import { axiosRequest,server } from '../../components/api';

//with mysql database using php for backend
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}



const Applicant = ({navigation}) => {
  // navigation.setOptions({
  //   title: "Applicants",
  //   headerTitleAlign: 'center',
  //   headerStyle: { backgroundColor: 'white', height: 150 },
  //   headerTitleStyle: { fontWeight: '100', fontSize: 25 }
  //  })
  
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
  
 await axiosRequest.get('/api/pendings.php').then((response)=>{
     
setGet (prevState => ({...prevState, post: response.data}))
     
})



}

  )},[])


  return (
    <SafeAreaView style={{flex: 1, }}>
   <ScrollView style={{}}
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
   
   <View style={[{}]}>
    <View style={{padding: 10, }}>
            <View  style= {Universalstyles.txt2}>
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Applicants</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>You can review and set the interview type and schedule here</Text>
            </View>
             </View>
      </View>
  {gets.post.map((label,index)=>(
<View key = {index} style={[Universalstyles.jobPost,{}]}>

    <View style={Universalstyles.jobContent}>
    {label.profile ? <Image source={{uri : server + label.profile}} style={Universalstyles.Jobimage}/> :  <Image source={Logo1} style={Universalstyles.Jobimage}/>}
    <View style={Universalstyles.jobContent2}>

    <Text style={{fontSize: 20, borderBottomWidth:1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon3 name='person' style={{fontSize: 23, color: 'black',}}/><Text style={{color: 'black', }}>  {label.lookingfor}</Text></Text>
    
    { label.status == "open"  && <Text style={{opacity:.5}}><Icon4 name='dot-fill' style={{fontSize: 20, color: 'green', alignContent: 'center'}}/>  Open</Text> }
    { label.status == "close"  &&<Text style={{opacity:.5}}><Icon4 name='dot-fill' style={{fontSize: 20, color: 'red', alignContent: 'center'}}/>  Close</Text>}

<Text style={{opacity:.5}}><Icon2 name='account-group' style={{fontSize: 20, color: 'brown', alignContent: 'center'}}/> <Text style={{color: 'black', }}> {label.noApprove}</Text> Approved applicant</Text>
<Text style={{opacity: .5 }}><Icon2 name='clock-outline' style={{fontSize: 20, color: 'black', }}/>{moment(label.createdat).add(8,'hour').startOf('seconds').fromNow()}</Text>

    <TouchableOpacity onPress={()=>{
     setPostID(label.postID)
        navigation.navigate('Review', { itemId : label.postID,title:label.lookingfor })

    }
    }>
    <View style={Universalstyles.jobContent3}>
      
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          Review
      </Text>
      </View>
      </TouchableOpacity>
      </View>
    
    
    
    </View>
    
  </View>))}
  
    </ScrollView>
    </SafeAreaView>
  )
}

export default Applicant