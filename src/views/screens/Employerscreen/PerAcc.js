import { View, Text} from 'react-native'
import React from 'react'
import Button1 from '../../components/Button1'

//with mysql database using php for backend
const PerAcc = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 10, }}>
      {/* <Button1 title='Change personal information' onPress={() => navigation.navigate('Edit profile')}/> */}
    
      <Button1 title='Change email address' onPress={() => navigation.navigate('Change email address')}/>
    
    </View>
  )
}

export default PerAcc