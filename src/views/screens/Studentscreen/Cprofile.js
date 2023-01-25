import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, RefreshControl, Dimensions} from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Logo1 from '../../../../assets/bg/bgimage5.jpg';


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
          Company email: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Contact number: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Address: 
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
        <Text style={{fontSize: 20, fontWeight: '500'}}> Company information</Text>
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>
          Company name: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Year company started: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Employees hired: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Number of customer serve:  
        </Text>
        
        </View>
      </View>
      <View>

      </View>
      <View style={{borderWidth: .3, borderColor: '#aba9ab', marginHorizontal: 10, position: 'relative'}}></View>
        <View style={{paddingHorizontal: 5, paddingVertical: 20, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}> Employer information</Text>
        <View style={{padding: 5}}>
        <Text style={{opacity: 0.6}}>
          Employer name: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Age: 
        </Text>
        <Text style={{opacity: 0.6}}>
          Job position: 
        </Text>
        
        </View>
      </View>
     
      </View>
      
      {/* <View style={Universalstyles.studprofile}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>samuel george y. dela cruz</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>25 years old</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Age</Text>
      </View>
      <View style={[Universalstyles.studprofile]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>0123-456-7890</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Contact number</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>C.M. Recto Avenue Lapasan, Cagayan de Oro City 9000</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Address</Text>
      </View>
      <View style={[Universalstyles.studprofile]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>University of science and technology of the philippines</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>School name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>College</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Education stage</Text>
      </View>
      <View style={[Universalstyles.studprofile]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>1st year college</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Year & level</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>BS - Information technology</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Course</Text>
      </View> */}
     
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile