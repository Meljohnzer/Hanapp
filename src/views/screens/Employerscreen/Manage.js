import * as React from 'react';
import { View, useWindowDimensions, Dimensions, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Logo from '../../../../assets/bg/bgimage5.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Universalstyles from '../../../const/Universalstyle';
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';


const FirstRoute = ({navigation}) => (
    <ScrollView style={{}}>
   
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon name='briefcase-outline' style={{fontSize: 25, color: 'black',}}/> Back-end developer</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style=style={Universalstyles.text}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
      <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Be sagunsa INC.</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Richard Gomez</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Zone 5 Imbatug, Baungon, Bukidnon</Text>
      {/* <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}
      <Text style={Universalstyles.text}><Icon2 name='exclamationcircleo' style={{fontSize: 20, color: 'orange', marginRight: 10}}/>  {''}<Text style={{color: 'green', }}>Open</Text> </Text>

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Hiring start in:</Text> 
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end in: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{ paddingHorizontal: 7,  fontSize: 15, opacity:.5}}>01-05-23{' / '}11:59PM </Text>
      <Text style={{ paddingHorizontal: 63,  fontSize: 15, opacity:.5}}>01-30-23{' / '}11:59PM </Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500'}}>Job Description</Text>
    </View>
    <View style={{padding: 5, }}>
    <Text style={{paddingBottom: 10, margin: 3, fontSize: 10, alignSelf: 'center', fontWeight: '500'}}>
      This is the content 
    </Text>
    </View>
    </View>
    <View style={{marginTop: 15, marginBottom: 50, alignItems: 'center', flexDirection:'row', justifyContent: 'space-around'}}>
    <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
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
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Edit</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
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
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Done</Text>
      </View>
    </TouchableOpacity>
    </View>
    
   </ScrollView>
 );


const SecondRoute = ({navigation}) => (
 
<ScrollView style={{}}>
<View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 0, margin: 0}}>
    
    <View style={{paddingVertical: 10}}>
    <View style={{backgroundColor: 'white',
    borderColor: '#e8e8e8',
    padding: 5,
    borderWidth:  2,
    flexDirection: 'row',
    borderRadius: 5}}>
    <Image source={Logo1} style={{
      width: 70,
      height: 70,
      marginRight: 7,
      borderRadius: 35,
      alignSelf: 'center'
      
    }}/>
    <View style={{padding: 10,
    flex: 1,
    borderColor: '#e8e8e8',
    borderLeftWidth: 1.5,
    marginLeft: 0,
    flexDirection: 'column',
    justifyContent: 'center'}}>
    <Text style={{ marginBottom: 0, fontSize: 15}}>Rickne Arohn Pacana<Text style={{color: 'blue', textTransform: 'capitalize'}}> </Text> </Text>
    <Text style={{ opacity: .5, fontSize: 12}}>Zone 1 Imbatug, Baungon, Bukidnon <Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>
    <Text style={{ opacity: .5}}>04-22-22 <Text style={{color: 'green', textTransform: 'capitalize'}}></Text> </Text>
        </View>
      
      <View style={{ flex: 1, flexDirection: 'row',  alignSelf: 'center' , }}>
      
      
      <View style={{alignItems: 'center', flexDirection: 'row', marginLeft: 15, }}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Icon2 name='closecircle' style={{fontSize: 25, color: 'red', marginRight: 10}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Icon2 name='checkcircle' style={{fontSize: 25, color: 'green', marginHorizontal: 10}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Icon3 name='dots-three-vertical' style={{fontSize: 25, color: 'black',}}/>
      </TouchableOpacity>
      </View>
      </View>
      
  
   
    </View>
    </View>
    </View>
    
  
  
  </ScrollView>
);


  const renderTabBar = props => (
    <TabBar
        {...props}
        activeColor={'black'}
        inactiveColor={'black'}
        style={{marginTop:0,backgroundColor:'white', textTransform: 'lowercase'}}
        indicatorStyle={{ backgroundColor: 'blue' }}
        getLabelText={({ route }) => route.title}
    />
);




export default function Manage({navigation}) {
    
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute navigation={navigation} />;
          case 'second':
            return <SecondRoute navigation={navigation} />;
          default:
            return null;
        }
      };
  const layout = useWindowDimensions();
  const {height, width} = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Posted hiring' },
    { key: 'second', title: 'Applicants' },
  ]
  );

  return (
    <SafeAreaView style={{flex: 1}}>
        
    <Image source={Logo} style={[{  
     
     width: 'auto',
     height: 'auto',
     resizeMode: 'cover',height: height * 0.20, 
    
   
     }]} 
     />
    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={{ width: Dimensions.get('window').width }}
    />
</SafeAreaView>
  );
}