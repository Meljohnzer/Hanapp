import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, RefreshControl} from 'react-native'
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
    <ScrollView
          contentContainerStyle={{}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
      <View style={[Universalstyles.studprofile, {borderWidth: 2,}]}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={{ }}>
        <Image source={Logo1} style={{
     marginTop: 20,
     marginBottom: 20,
     borderWidth: 1, 
     borderRadius: 50, 
     width: 100, 
     height: 100, 
     alignSelf: 'center',
    }}/>
        </View>
      </TouchableOpacity>
      </View>
      <View style={{padding: 10}}></View>
      <View style={Universalstyles.studprofile}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>BE SAGUNSA inc.</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Company name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>Richard V. quincy</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Employer name</Text>
      </View>
   
      <View style={[Universalstyles.studprofile,]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 2, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>C.M. Recto Avenue Lapasan, Cagayan de Oro City 9000</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Workplace address</Text>
      </View>
     <View style={{marginBottom: 50}}>
      <TouchableOpacity  onPress={''}>
      <View style={[Universalstyles.logout,{marginVertical: 20,}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
    <Text 
                onPress={() => navigation.navigate('Settings')}
                style={{color: 'blue', textAlign: 'center', padding: 10}}>Cancel
                </Text>
    </View>
    
    </ScrollView>
    </SafeAreaView>
  )
}

export default Profile