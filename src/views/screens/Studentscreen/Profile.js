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
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>BE SAGUNSA</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>name</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>0123-456-7890</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Contact number</Text>
      </View>
      <View style={[Universalstyles.studprofile,]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8',  width: 'auto', textTransform: 'uppercase'}}>3rd year</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Grade level</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>BS - Information technology</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Course</Text>
      </View>
      <View style={[Universalstyles.studprofile,]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'uppercase'}}>Student</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Occupation</Text>
      </View>
      <View style={[Universalstyles.studprofile, {marginVertical: 20}]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>University of science and technology of the philippines</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>School name</Text>
      </View>
      <View style={[Universalstyles.studprofile,]}>
          <Text style={{textAlign: 'center', fontWeight: '400', fontSize: 20, borderBottomWidth: 1, borderColor: '#e8e8e8', width: 'auto', textTransform: 'capitalize'}}>C.M. Recto Avenue Lapasan, Cagayan de Oro City 9000</Text>
          <Text style={{textAlign: 'center', fontWeight: '500', textTransform: 'capitalize', color: 'blue'}}>Address</Text>
      </View>
     <View style={{marginBottom: 50}}>
      <TouchableOpacity  onPress={''}>
      <View style={[Universalstyles.logout,{marginVertical: 5,}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
 
    </View>
   
    </ScrollView>
  )
}

export default Profile