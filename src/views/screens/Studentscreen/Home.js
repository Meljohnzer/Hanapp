import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, Text, View, ImageBackground, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image} from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Searchbar from '../../components/Searchbar';
import Universalstyles from "../../../const/Universalstyle";
  

const Home = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [value,setValue] = useState();
  function updateSearch(value){
  }

  return (
    <ScrollView style={Universalstyles.studscreen}>


<View style={{ flex: 1,  height: '100%', borderRadius: 10, padding: 10, flexDirection: 'row' }}>
  <TouchableOpacity onPress={() => navigation.navigate('')}>
    <Image source={Logo} style={{
      width: 45,
      height: 40,
      resizeMode: 'center',
      marginRight: 7
    }} />
  </TouchableOpacity>
  <Searchbar 
    IconName='search-web'
    placeholder='Search job'
    value={value}
    updateSearch={updateSearch}
    />
  <TouchableOpacity onPress={() => navigation.navigate('')}>
    <Icon
      name="bell"
      style={{ fontSize: 40, marginLeft: 5, color: 'black', }} />
  </TouchableOpacity>
</View>

<View style={Universalstyles.jobPost}>
    <View style={Universalstyles.jobContent}>
    <Image source={Logo1} style={{
      width: 100,
      height: 100,
      marginRight: 7,
      borderRadius: 50,
      marginTop: 10
    }}/>
    <View style={Universalstyles.jobContent2}>
    <Text style={{borderBottomWidth: 1, marginBottom: 10}}>Company name : <Text style={{color: 'blue'}}> Be Sagunsa</Text> </Text>
    
    <Text style={{borderBottomWidth: 1, }}>Location : <Text style={{color: 'green'}}> Cagayan de Oro city</Text> </Text>

   
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <View style={Universalstyles.jobContent3}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Job description
      </Text>
      </View>
      </TouchableOpacity>
  
   
    </View>
    
    
    </View>
  </View>
</ScrollView>
    
  );
  
};

export default Home