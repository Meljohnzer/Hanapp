import * as React from 'react';
import { View, useWindowDimensions, Dimensions, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Logo from '../../../../assets/bg/bgimage5.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Universalstyles from '../../../const/Universalstyle';
import Logo1 from '../../../../assets/bg/bgimage5.jpg';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import axios from 'axios'

const FirstRoute = ({arr}) => (
    <ScrollView style={{}}>
   { arr.map((label,index)=>(<View key={index}>
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon4 name='person' style={{fontSize: 30, color: 'black', }}/> {label.lookingfor}</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style={Universalstyles.text}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
     {label.compname && <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'black',}}/>{label.compname}</Text>}
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', }}/>{label.lastname}, {label.firstname} {label.midname}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'red', }}/>  {label.street} {label.city} {label.province} {label.zipcode}</Text>
      {/* <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Hiring start in: </Text>
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end in: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{ paddingHorizontal: 5,  fontSize: 15, opacity:.5}}> {label.startdate} {'/ '}11:59PM </Text>
      <Text style={{ paddingHorizontal: 70,  fontSize: 15, opacity:.5}}>{label.enddate}{'/ '}11:59PM </Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
     <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500'}}>Job Description</Text>
    </View>
    <View style={{padding: 5, }}>
    <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}>
      {label.jobdesc} 
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
      <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Save</Text>
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
      <Text style={{color: 'black', fontWeight: 'light', fontSize: 18}}>Apply</Text>
      </View>
    </TouchableOpacity>
    </View>
    </View>))}
   </ScrollView>
 );


const SecondRoute = ({arr}) => (
 
<ScrollView style={{}}>
  {arr.map((label,index)=>(<View key={index}>
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      {/* <Text style={{ paddingHorizontal: 5, paddingVertical: 0, fontSize: 30}}><Icon name='star' style={{fontSize: 30, color: 'gold',}}/> Back-end developer</Text> */}
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style={Universalstyles.text}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
      {label.compname && <Text style={Universalstyles.text2}><Icon name='warehouse' style={{fontSize: 25, color: 'black',}}/> {label.compname} </Text>}
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', }}/>  {label.lastname}, {label.firstname} {label.midname}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'red', }}/> {label.stret} {label.city} {label.province} {label.zipcode}</Text>
      {/* <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}
      <Text style={Universalstyles.text}><Icon name='medal-outline' style={{fontSize: 20, color: 'gold', }}/>  Since {label.establishdate} </Text>
      
     </View>

    
     {label.compname && <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:40, textAlign: 'center', fontWeight: '500'}}>Company Description</Text>
    </View>
    <View style={{padding: 5, }}>
    <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}>
      {label.compdesc}
    </Text>
    </View>
    </View>}
    </View>))}

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




export default function Description({navigation,route}) {
 const [gets,setGet] = React.useState({
      post : []
     })
     
     const { itemId } = route.params
     
var Data ={
      postID : itemId
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      };
     
 
React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
 await axios.post('http://localhost:8080/api/manage.php', JSON.stringify(Data), headers)  
      .then((response) => {

setGet (prevState => ({...prevState, post: response.data}))

      })
}

  )},[])
    
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute arr={gets.post} />;
          case 'second':
            return <SecondRoute arr={gets.post} />;
          default:
            return null;
        }
      };
  const layout = useWindowDimensions();
  const {height, width} = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Job overview' },
    { key: 'second', title: 'Employer overview' },
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