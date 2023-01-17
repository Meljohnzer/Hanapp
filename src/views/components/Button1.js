import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button1 = ({title, onPress = () =>{}}) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={onPress} 
    style={{
        height: 50, 
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button1