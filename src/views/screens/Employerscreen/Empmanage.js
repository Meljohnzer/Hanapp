import { View, Text, TouchableOpacity, Image, useWindowDimensions, Dimensions, RefreshControl, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../../assets/bg/bgimage5.jpg';
import Universalstyles from '../../../const/Universalstyle';
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
import Icon2 from 'react-native-vector-icons/Feather';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
//with mysql database using php for backend
const Empmanage = ({navigation}) => {

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
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
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
          {/* <View style={{borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5, flexDirection: 'row',  justifyContent: "flex-end", }}>
     
     <Text style={{textAlign: 'center', padding: 10, fontSize: 20, marginHorizontal: 65 }}>Job overview</Text>
     <TouchableOpacity onPress={() => navigation.navigate('')}>
   <Icon
     name="arrow-right"
     style={{ fontSize: 40, textAlign: 'center', color: 'black', }} />
 </TouchableOpacity>
    </View> */}
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
    
    
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10}}>
    <Text style={{paddingBottom: 5, fontSize:20,textAlign:"center",fontWeight:"bold"}}>Applicant for this job</Text>
    </View>
    
    <View style={{padding: 10}}>
    <View style={{backgroundColor: 'white',
    borderColor: '#e8e8e8',
    padding: 10,
    borderWidth:  2,
    flexDirection: 'row',
    borderRadius: 10}}>
    <Image source={Logo1} style={{
      width: 100,
      height: 100,
      marginRight: 7,
      borderRadius: 50,
      marginTop: 10,
      
    }}/>
    <View style={{padding: 10,
    borderColor: '#e8e8e8',
    borderLeftWidth: 1.5,
    marginLeft: 5,}}>
    <Text style={{ marginBottom: 5}}>Applicant name<Text style={{color: 'blue', textTransform: 'capitalize'}}> </Text> </Text>
    
    <Text style={{ opacity: .5}}>Location : <Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>

      <View style={{marginHorizontal: 5}}>
      <TouchableOpacity onPress={() => navigation.navigate('Applicant profile')}>
      <View style={[Universalstyles.jobContent3, {paddingHorizontal: 20}]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18,}}>
          View profile
      </Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 10, paddingHorizontal: 0, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Icon2 name='x' style={{fontSize: 30, color: 'red',}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Icon2 name='check' style={{fontSize: 30, color: 'green',}}/>
      </TouchableOpacity>
      </View>
      
  
   
    </View>
    </View>
    </View>
    
    </View>

   
    </View> 
    </ScrollView>
    </SafeAreaView>
  )
}

export default Empmanage