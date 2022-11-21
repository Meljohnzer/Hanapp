import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Fontaw from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon2 from 'react-native-vector-icons/MaterialIcons';


const Settings = ({navigation}) => {
  const logout = () =>{
    navigation.navigate('Log in')
  }
  return (
    <ScrollView>
    <View style={Universalstyles.setAccount}>
      <Text style={{fontSize: 40, fontWeight: '500', }}>Account</Text>
      <Text style={{fontSize: 12}}>Update your info to keep your account secure</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
    <View style={{flexDirection: 'row', alignItems: 'center' , }}>
    <Fontaw 
      name='user-circle'
      color='#42A4FF'
      style={{fontSize: 40, padding: 10,}}
    /> 

      <View style={{ marginBottom: 0}}>
       <Text style={{fontSize: 18,}}>
        Personal and account information
      </Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
    <View style={{flexDirection: 'row', alignItems: 'center' , }}>
    <MatIcon 
      name='security'
      color='#42A4FF'
      style={{fontSize: 40, padding: 10,}}
    /> 

      <View style={{ marginBottom: 0}}>
       <Text style={{fontSize: 18,}}>
        Password and security
      </Text>
      </View>
    </View>
    </TouchableOpacity>
    <View style={Universalstyles.setAccount}>
      <Text style={{fontSize: 40, fontWeight: '500'}}>Help and support   </Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
    <View style={{flexDirection: 'row', alignItems: 'center' , }}>
    <Fontaw 
      name='support'
      color='#FFB429'
      style={{fontSize: 40, padding: 10,}}
    /> 

      <View style={{ marginBottom: 0}}>
       <Text style={{fontSize: 18,}}>
        Help
      </Text>
      </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('')}>
    <View style={{flexDirection: 'row', alignItems: 'center' , }}>
    <Fontaw 
      name='inbox'
      color='#FFB429'
      style={{fontSize: 40, padding: 10,}}
    /> 
   
      <View style={{ marginBottom: 0}}>
       <Text style={{fontSize: 18,}}>
        Support inbox
      </Text>
      </View>
    </View>
    </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('')}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Fontaw 
      name='exclamation-circle'
      color='#FFB429'
      style={{fontSize: 40, padding: 10,}}
    /> 
    
      <View style={{ marginBottom: 0}}>
       <Text style={{fontSize: 18,}}>
        About
      </Text>
      </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <MatIcon2 
      name='report-problem'
      color='red'
      style={{fontSize: 40, padding: 10,}}
    /> 
    
      <View style={{ marginBottom: 0}}>
       <Text style={{fontSize: 18,}}>
        Report a problem
      </Text>
      </View>
    </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={logout}>
      <View style={Universalstyles.logout}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Log out</Text>
      </View>
    </TouchableOpacity>

    
    </ScrollView>
  )
}

export default Settings