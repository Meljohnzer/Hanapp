import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Universalstyles} from '../../const/Universalstyle';


const Input = ({
    label,
    iconName, 
    value,
    error, 
    editable,
    onBlur,
    showSoftInputOnFocus,
    password,
    keyboardType,
    onFocus=()=>{},
    ...props
}) => {
    const [isFocused, setisFocused] = React.useState(false);
    const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View style={{marginBottom: 15, }}>
        
    <View style={[style.inputContainer,{borderColor: error ? 'red': isFocused ? 'black': '#e8e8e8', borderWidth: 1.5 }]}>
        <Icon 
            name={iconName}
            style={{fontSize: 22, marginRight: 10}}
            color={isFocused ? '#F5E44C' : 'grey'}
        />
        <TextInput 
        editable = {editable}
        keyboardType={keyboardType}
        secureTextEntry={hidePassword}
        autoCorrect={false}
        showSoftInputOnFocus = {showSoftInputOnFocus}
        value = {value}
        onFocus={() => {
            onFocus();
            setisFocused(true);
        }}
            onBlur={() => {
                setisFocused(false);
            }}
        style={{color: '#2c2c2c', flex: 1}} {...props}/>
        
        {password && (
        <Icon 
            onPress={() => setHidePassword(!hidePassword)}
            style={{fontSize: 22, color: 'grey'}} 
            name={hidePassword ? 'eye-off-outline': 'eye-outline'}/>  
        )}
      

        </View>
        { error && (
        <Text style={[Universalstyles.errotxt]}>{error}</Text>
        )}
       
    </View>
    
  )
}

const style = StyleSheet.create({
    

    inputContainer: {
        backgroundColor: 'white',
        height: 45,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10
        
    },



});

export default Input