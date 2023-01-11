import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'
import React from 'react'


export default function Button({ label,  theme, onPress}) {
    // ...rest of the code remains same
    if (theme === "primary") {
      return (
        <View>
          
          <Pressable
            style={[{ backgroundColor: 'skyblue' }]}
            onPress={onPress}
          />
           <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{label}</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '500%',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });