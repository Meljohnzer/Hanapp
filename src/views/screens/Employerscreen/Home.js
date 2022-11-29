import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, SafeAreaView, RefreshControl} from 'react-native'
import Logo from '../../../../assets/bg/Picture3.png'
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
import React from 'react'
import Universalstyles from '../../../const/Universalstyle'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Home = ({navigation}) => {
    const {height} = useWindowDimensions();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);


  return (
    <SafeAreaView>
   <ScrollView style={{}}
        contentContainerStyle={Universalstyles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
    <View style={[Universalstyles.HomeEmp, {backgroundColor: '#F5E44C', paddingVertical: 5, paddingHorizontal: 10, }]}>

    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Icon
      name="navicon"
      style={{ fontSize: 50,  color: 'black', }} />
      </TouchableOpacity>

      <Image source={Logo} style={[Universalstyles.Logo1, {height: height * 0.1, }]} />

      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <Icon2
      name="bell"
      style={{ fontSize: 50,  color: 'black', }} />
      </TouchableOpacity>    
    </View>
   
<View style={Universalstyles.jobPost}>
    <View style={Universalstyles.jobContent}>
    <Image source={Logo1} style={{
      width: 100,
      height: 100,
      marginRight: 7,
      borderRadius: 50,
      marginTop: 10,
      
    }}/>
    <View style={Universalstyles.jobContent2}>

    <Text style={{ marginBottom: 5}}>Looking for: <Text style={{color: 'blue', textTransform: 'capitalize'}}> Front-end developer</Text> </Text>
    
    <Text style={{marginBottom: 5}}>Application : <Text style={{color: 'green', textTransform: 'capitalize'}}> Open</Text> </Text>

    <Text style={{ }}>Number of applicant : <Text style={{color: 'red', textTransform: 'capitalize'}}> 100</Text> </Text>

      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <View style={Universalstyles.jobContent3}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          Manage
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

export default Home