import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'


const Loader = ({visible = false}) => {
const {height, width} = useWindowDimensions();
  return (
    visible && ( 
    <View style={[style.container,{height: '100%', width}]}>
      <View style={style.loader}>
      <ActivityIndicator size ='large' color = 'blue'/>
        <Text style={{marginRight: 15, fontSize: 15}}> Please wait...</Text>
     </View>
    </View>
    )
  )
};

const style = StyleSheet.create ({
    container: {
      position: 'absolute',
      zIndex: 10,
      backgroundColor: 'rgba(133, 130, 129, 0.45)',
      justifyContent: 'center',
      
    },
    loader: {
        height: 70,
        backgroundColor: 'white',
        marginHorizontal: 50,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,

    }
})


export default Loader 