import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView,View, Text ,ImageBackground} from 'react-native'
import React from 'react'
import {Universalstyles} from "../../const/Universalstyle";
import Button from "../components/Button";

const Homescreen = ({navigation,route}) => {

const {fname,lname , email} = route.params

const logout = () =>{
  navigation.navigate('Log in')
}

  return(
    <ImageBackground 
    source={require('../../../assets/bg/bgimage5.jpg')}
    style={[Universalstyles.signup, {height: 'auto'}]}>
        <ScrollView
        
        contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
            justifyContent: 'center',
            flex:1,
            
        }}
        >
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingHorizontal: 40,
      
    
    }}>
     
     <View style = {{ marginVertical: 20,
    backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    padding: 10,}}>
      <Text style={{fontSize: 40, fontWeight: '300'}}>Profile</Text>
      <Text style={{fontSize: 30,width:"100%",textAlign:'center', fontWeight: '200',paddingTop:10,letterSpacing:5,borderBottomColor:'#4169e1',borderBottomWidth:1}}>{fname}</Text>
      <Text style={{fontSize: 15, fontWeight: '100'}}>Firstname</Text>
      <Text style={{fontSize: 30,width:"100%",textAlign:'center', fontWeight: '200',paddingTop:10,letterSpacing:5,borderBottomColor:'#4169e1',borderBottomWidth:1}}>{lname}</Text>
      <Text style={{fontSize: 15, fontWeight: '100'}}>Lastname</Text>
      <Text style={{fontSize: 30,width:"100%",textAlign:'center', fontWeight: '200',paddingTop:10,letterSpacing:5,borderBottomColor:'#4169e1',borderBottomWidth:1}}>{email}</Text>
      <Text style={{fontSize: 15, fontWeight: '100'}}>Email</Text>
      </View>
      <Button title='Log out' onPress={logout}/>
    </View>
    </ScrollView>
        </ImageBackground>

  );
};

export default Homescreen