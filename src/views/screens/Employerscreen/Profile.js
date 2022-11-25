import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
const Profile = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={{ }}>
        <Image source={Logo1} style={{
     marginTop: 20,
     marginBottom: 30,
     borderWidth: 1, 
     borderRadius: 50, 
     width: 100, 
     height: 100, 
     alignSelf: 'center',
    }}/>
        </View>
      </TouchableOpacity>
      <View style={Universalstyles.studprofile}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>BE SAGUNSA inc.</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Company name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>Be sagunsa</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Employer name</Text>
      </View>
   
      <View style={[Universalstyles.studprofile,]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>C.M. Recto Avenue Lapasan, Cagayan de Oro City 9000</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Work address</Text>
      </View>
     <View style={{marginBottom: 50}}>
      <TouchableOpacity  onPress={''}>
      <View style={[Universalstyles.logout,{marginVertical: 10,}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
    <Text 
                onPress={() => navigation.navigate('Settings')}
                style={{color: 'blue', textAlign: 'center', padding: 10}}>Cancel
                </Text>
    </View>
    
    </ScrollView>
  )
}

export default Profile