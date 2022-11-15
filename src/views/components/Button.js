import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, onPress = () =>{}}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={onPress} 
    style={{
        height: 50, 
        width: '100%',
        borderRadius: 30,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button