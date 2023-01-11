import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Logo1 from '../../../../assets/bg/profile.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Profile = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView style={{}}
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
     }>
      
      <View style={[Universalstyles.studprofile, {borderWidth: 2,}]}>
      
        <View style={{flex: 1, margin:10, flexDirection: 'row', alignSelf: 'flex-end',}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',  }}> 
          <Text style={{ opacity: 0.6}}>
          Email: <Text style={{fontWeight: 'bold',}}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Contact number: <Text style={{fontWeight: 'bold',}}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Address: <Text style={{fontWeight: 'bold',}}></Text>
        </Text>
        </View>
       
        <TouchableOpacity onPress={() => navigation.navigate('')}>
        <Image source={Logo1} style={{
     marginTop: 10,
     marginBottom: 20,
     marginLeft: 0,
     borderRadius: 65, 
     width: 130, 
     height: 130, 
     resizeMode: 'contain'
    }}/>
  </TouchableOpacity>
        </View>
        <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Personal information</Text>
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>
          Full name: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Birthday: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Age: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        
        </View>
      </View>
      <View>

      </View>
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Guardian information</Text>
        <View style={{padding: 5}}>
        
        <Text style={{opacity: 0.6}}>
          Guardian name: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Contact number: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        </View>
      </View>
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative', }}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Educational background (current)</Text>
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>
          School name: <Text style={{fontWeight: 'bold', }}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          School address: <Text style={{fontWeight: 'bold', }}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
          Year & level: <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        <Text style={{opacity: 0.6}}>
        <Text style={{fontWeight: 'bold', textTransform: 'capitalize'}}></Text>
        </Text>
        </View>
      </View>
  
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Submitted requirements</Text>
        <View style={{padding: 5}}>
        <View style={{ flex: 1, flexDirection: 'row',  alignSelf: 'center' , }}>
      
      <View style={{}}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <View style={[Universalstyles.jobContent3, {flexDirection: 'column',height: 45, alignItems: 'center' }]}>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Cover letter</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <View style={[Universalstyles.jobContent3, {flexDirection: 'column',height: 45 }]}>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Certificate of Registration</Text>
      </View>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      </View>
      <View style={{marginTop: 15, marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
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
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Decline</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
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
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Approve</Text>
      </View>
    </TouchableOpacity>
    </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile