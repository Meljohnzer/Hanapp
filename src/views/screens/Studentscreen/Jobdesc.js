import { View, Text, TouchableOpacity, Image, useWindowDimensions, RefreshControl, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../../assets/bg/bgimage5.jpg';


//with mysql database using php for backend
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Jobdesc = ({navigation}) => {

  const {height, width} = useWindowDimensions();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
      contentContainerStyle={{
      
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#F5E44C']}
          />
        }
      >
    <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5}}>
   
     <Image source={Logo} style={[{  
     
      width: 'auto',
      height: 'auto',
      resizeMode: 'cover',height: height * 0.20, 
     
    
      }]} 
      />
      <View style={{borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5, flexDirection: 'row',  justifyContent: "flex-end", }}>
          <TouchableOpacity onPress={() => navigation.navigate('Company profile',)}>
            <Text style={{textAlign: 'center', padding: 10, fontSize: 20, marginHorizontal: 65 }}>View company profile</Text>
            </TouchableOpacity>
    </View>
    {/* <View style={{borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5, flexDirection: 'row', }}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
   
     <Icon
     name="arrow-left"
     style={{ fontSize: 40, textAlign: 'center', color: 'black', }} />
    </TouchableOpacity>

     <Text style={{textAlign: 'center', padding: 10, fontSize: 20, marginHorizontal: 40 }}>Company overview</Text>
     
 
    </View> */}

        <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10}}>
      <Text style={{ paddingHorizontal: 5, paddingVertical: 0, fontSize: 30}}>Job title</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='warehouse' style={{fontSize: 20, color: 'black', marginRight: 10}}/> company name: </Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='account' style={{fontSize: 20, color: 'black', marginRight: 10}}/>  Employer name: </Text>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Job location: </Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Hiring start in: </Text>
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Hiring end in: </Text>
      </View>
      <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5}}></Text>
     </View>


 
     
    
    
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10}}>
    <Text style={{paddingBottom: 10, fontSize:20,textAlign:"center",fontWeight:"bold"}}>Job Description</Text>
    <Text style={{paddingBottom: 10, fontSize:10,textAlign:"center",fontWeight:"bold"}}>This is a job description text
    </Text>
    </View>
    <View style={{paddingHorizontal: 20}}>
    <Text style={{paddingBottom: 10}}>{'\u2022'}  </Text>
    <Text style={{paddingBottom: 10}}>{'\u2022'}  </Text>
    <Text style={{paddingBottom: 10}}>{'\u2022'}  </Text>
    </View>
    </View>
    
    <View style={{}}>

    </View>
    <View style={{marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    <TouchableOpacity  onPress={''}>
    <View style={{borderColor: 'orange',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Save</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={''}>
      <View style={{borderColor: '#4169e1',
    alignSelf: 'center',
    width: 150,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,}}>
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Apply</Text>
      </View>
    </TouchableOpacity>
    </View>
    </View> 
    </ScrollView>
    </SafeAreaView>
  )
}

export default Jobdesc