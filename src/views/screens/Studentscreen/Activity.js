import { SafeAreaView, ScrollView, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React from 'react'
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/profile2.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Universalstyles from '../../../const/Universalstyle';
import { axiosRequest } from '../../components/api';
import moment from 'moment'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Activity = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{ 
          justifyContent: 'center',
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
        
    <View style={[{}]}>
    <View style={{padding: 10, }}>
            <View  style= {Universalstyles.txt2}>
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Activity log</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>Monitor your submitted job hiring application</Text>
            </View>
             </View>
      </View>
      <View style={[Universalstyles.jobPost, {}]}>
  
    <View style={Universalstyles.jobContent}>
      
    <Image source={Logo1} style={Universalstyles.Jobimage}/>
   
    <View style={Universalstyles.jobContent2}>
    
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon2 name='person' style={{fontSize: 23, color: 'black',}}/>  Back-end developer</Text>
    <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'black',}}/> Be Sagunsa Inc.</Text>
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Imbatug, Baungon, Bukidnon, 8707</Text>
    <Text style={{opacity: .5 }}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'black', }}/> Remote</Text>   
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> 5 hours ago</Text>

    
      <TouchableOpacity onPress={()=> navigation.navigate('Application status')}>
      <View style={[Universalstyles.jobstatus, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
         Pending
      </Text>
      </View>
      </TouchableOpacity>
    </View>
    </View>
    
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Activity