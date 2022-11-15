import { View, Text, TouchableOpacity, useWindowDimensions, Image} from 'react-native'
import React from 'react'
import Logo from '../../../assets/bg/Picture1.png';
import Universalstyles from '../../const/Universalstyle'

const Userstypescreen = ({navigation}) => {
    const {height} = useWindowDimensions();
  return (
    <>
    
    <View style={{
        paddingTop: 50,
        justifyContent: 'center',
          
    }}>
          <Image source={Logo} style={[Universalstyles.logo, { height: height * 0.20, marginLeft: 10 }]} />
      </View>
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 200
      }}>

        <Text style={{fontSize: 25}}>What are you?</Text>

              <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                  <Text style={Universalstyles.userstype}>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
              <Text style={Universalstyles.userstype}>Employer</Text>
              </TouchableOpacity>
              
          </View>
          </>
    
  )
}

export default Userstypescreen