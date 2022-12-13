import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, ScrollView, Text, View, Dimensions, useWindowDimensions, TouchableOpacity, Keyboard, Alert,Image, RefreshControl} from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../../assets/bg/Picture2.png';
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Searchbar from '../../components/Searchbar';
import Universalstyles from "../../../const/Universalstyle";
  
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({navigation}) => {

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  const {width} = useWindowDimensions();
  const [value,setValue] = useState();
  function updateSearch(value){
  }

  return (
<SafeAreaView>
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
<View style={{padding: 10, flexDirection: 'row', backgroundColor: '#F5E44C' }}>

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

  <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
    <Icon
      name="bell"
      style={{ fontSize: 40, marginLeft: 5, color: 'black', }} />
  </TouchableOpacity>
</View>

<View style={Universalstyles.jobPost}>
  
    <View style={Universalstyles.jobContent}>
      
    <Image source={Logo1} style={Universalstyles.Jobimage}/>
   
    <View style={Universalstyles.jobContent2}>
    <View style={{flex: 1,  flexDirection: 'row' ,alignSelf: 'flex-end', left: 5, bottom: 5}}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Icon name='dots-horizontal' style={{fontSize: 30, color: 'black', }}/>
      </TouchableOpacity>
    </View>
    <Text style={{fontSize: 20, borderBottomWidth: 1, marginBottom: 5, borderColor: '#cbc8ce'}}><Icon name='briefcase-outline' style={{fontSize: 23, color: 'black',}}/> Back-end developer</Text>
    <Text style={{opacity: .5}}><Icon name='warehouse' style={{fontSize: 20, color: 'black',}}/> Be sagunsa INC.</Text>
    <Text style={{opacity: .5 }}><Icon name='map-marker' style={{fontSize: 20, color: 'red', }}/> Zone 4 Imbatug, Baungon, Bukidnon</Text>
    <Text style={{opacity: .5 }}><Icon name='clock-outline' style={{fontSize: 20, color: 'black', }}/> 2 hours ago</Text>
    
    
      <TouchableOpacity onPress={() => navigation.navigate('Job description')}>
      <View style={[Universalstyles.jobContent3, {}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          Job description
      </Text>
      </View>
      </TouchableOpacity>
    </View>
    </View>
    
    </View>
    
 
  </ScrollView>
  
  </SafeAreaView>
  );
  
};

export default Home