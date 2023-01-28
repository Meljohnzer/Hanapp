import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Universalstyles from '../../const/Universalstyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Searchbar({value, updateSearch, style, IconName, placeholder,onChange}) {
    const [query, setQuery] = useState();

  return (
    <View style={Universalstyles.searchBar}>
      <View style={Universalstyles.searchContainer}>
    
      <Icon 
            name={IconName}
            style={{fontSize: 30, marginRight: 10, color: 'grey', position: 'absolute', right: 0, }}
            
        />
        <TextInput
         placeholder={placeholder}
         value={value}
         onChangeText={onChange}
        />
      </View>
    </View>
  )
}
