import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Universalstyles from '../../const/Universalstyle';
  const data = [
    { label: 'Part time', value: '1' },
    { label: 'Remote', value: '2' },
    { label: 'OJT', value: '3' },
    
  ];

  const DropdownComponent = ({
    label,
    iconName, 
    error, 
    onChange,
    password, 
    keyboardType,
    onFocus=()=>{},
    ...props
}) => {
    //const [value, setValue] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    

    return (
        <View style={{marginBottom: 15, paddingTop: 0}}>
        
        
      
        <Dropdown
          style={[styles.inputContainer, { borderColor: error ? 'red': isFocused ? 'black': '#e8e8e8', borderWidth: 1.5 }]}
          placeholderStyle={styles.placeholderStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocused ? 'Job type' : '...'}
          dropdownPosition = 'bottom'
          itemContainerStyle = {{}}
          selectedTextStyle={styles.selectedTextStyle}
          //value={value}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
        }}
            onBlur={() => {
                setIsFocused(false);
            }}
        styles={{color: '#2c2c2c', flex: 1}} {...props}
          onChange={onChange}
          renderLeftIcon={() => (
            <Icon
              style={{fontSize: 22, marginRight: 10}}
              color={isFocused ? '#F5E44C' : 'grey'}
              name="briefcase-outline"
              size={20}
            />
          )}
        />
        { error && (
        <Text style={[Universalstyles.errotxt]}>{error}</Text>
        )}
      </View>
     
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    
    inputContainer: {
        backgroundColor: 'white',
        height: 45,
        borderColor: '#e8e8e8',
        paddingHorizontal: 15,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        paddingBottom: 0
        
    },
    placeholderStyle: {
        color: 'grey',
        fontWeight: '300'
      },
      selectedTextStyle: {
        fontSize: 14,
      },
  });