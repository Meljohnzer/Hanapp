import React, {useState} from 'react';
import { View, useWindowDimensions, Dimensions, RefreshControl, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Universalstyles from '../../../const/Universalstyle';
import * as ImagePicker from 'expo-image-picker';
import Logo1 from '../../../../assets/bg/profile.png';
import Logo from './../../../../assets/bg/bgimage5.jpg'
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Fontisto';
import OptionsMenu from "react-native-option-menu";
import { axiosRequest } from '../../components/api';


const myIcon = (<Icon3 name='dots-three-vertical' size={30} color="black " />)

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Appstatus({navigation,}) {
 
  
  const {height, width} = useWindowDimensions();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
 
  
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView style={{}}
        contentContainerStyle={{
          
          width: Dimensions.get('window').width,
         
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#F5E44C']}
          />
        }
      >
   
    <Image 
     source= {Logo}
      style={[{  
       width: 'auto',
       height: 100,
       resizeMode: 'cover', height: height * 0.20, 
       }]} 
       /> 
    
    <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon4 name='person' style={{fontSize: 25, color: 'grey',}}/>  Back-end developer</Text>
     <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Be Sagunsa Inc.</Text>
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Uchiha, Itachi</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Imbatug, Baungon, Bukidnon, 8707</Text>
    <Text style={Universalstyles.text}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'blue', }}/> Remote</Text> 
    <Text style={Universalstyles.text}><Icon name='currency-php' style={{fontSize: 20, color: 'blue', }}/> 10,000 Per Day</Text>

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'green', marginRight: 10}}/> Hiring start in:</Text> 
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end on: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{paddingHorizontal: 25, fontSize: 15, opacity:.5}}>2023-01-01</Text>
      <Text style={{paddingHorizontal: 100,fontSize: 15, opacity:.5}}>2023-01-30</Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
   
   
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
   <Text style={Universalstyles.text3}><Text style={{fontSize: 20, fontWeight: '500'}}>Applicant Information</Text></Text>
    

    <Text style={Universalstyles.text}><Icon name='account-outline' style={{fontSize: 20, color: 'blue',}}/> Pacana, Rickne Arohn A.</Text>
    <Text style={Universalstyles.text}><Icon name='email-outline' style={{fontSize: 20, color: 'blue',}}/> student@gmail.com</Text>
    <Text style={Universalstyles.text}><Icon name='phone-outline' style={{fontSize: 20, color: 'blue',}}/> 09122544786</Text>
    <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'blue',}}/> Imbatug, Baungon, Bukidnon, 8707</Text>
    
    </View>
    <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
   <Text style={Universalstyles.text3}><Text style={{fontSize: 20, fontWeight: '500'}}>Interview Information</Text></Text>
    
   <View style={[Universalstyles.jobstatus, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
         Pending
      </Text>
      </View>
      
    {/* <Text style={Universalstyles.text}><Icon name='web' style={{fontSize: 20, color: 'blue',}}/> Online</Text>
    <Text style={Universalstyles.text}><Icon name='link' style={{fontSize: 20, color: 'blue',}}/> https://meet.google.com</Text>
    <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'green', marginRight: 10}}/> 2023-02-01</Text> 
    <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'green', marginRight: 10}}/> 2023-02-05</Text> 
        */}
        
    {/* <Text style={Universalstyles.text}><Icon name='handshake-outline' style={{fontSize: 20, color: 'blue',}}/> Face to face</Text>
    <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'blue',}}/> Imbatug, Baungon, Bukidnon, 8707</Text>
    <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'green', marginRight: 10}}/> 2023-02-01</Text> 
    <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'green', marginRight: 10}}/> 2023-02-05</Text> 
      */}
    
    </View>
    
   </ScrollView>

</SafeAreaView>
  );
}
