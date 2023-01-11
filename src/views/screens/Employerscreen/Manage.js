import React, {useState} from 'react';
import { View, useWindowDimensions, Dimensions, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert, TouchableOpacity} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Universalstyles from '../../../const/Universalstyle';
import * as ImagePicker from 'expo-image-picker';
import Logo1 from '../../../../assets/bg/profile.png';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Fontisto';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { axiosRequest } from '../../components/api';



const checkIconAlert = () => Alert.alert(
  "",
  "Are you sure you want to accept new applicant?",
  [
    {
      text: "Yes",
      onPress: () => console.log("Yes Pressed"),
      style: "yes"
    },
    { 
      text: "No", onPress: () => console.log("No Pressed") 
    }
  ]
);

const closeIconAlert = () => Alert.alert(
  "", 
  "Are you sure you want to reject the applicant?",
  [
    {
      text: "Yes",
      onPress: () => console.log("Yes Pressed"),
      style: "yes"
    },
    { 
      text: "No", onPress: () => console.log("No Pressed")
    }
  ]
);

const ViewProfileMenu = ({ text,navigation }) => (
  <MenuOption
     onPress={() => navigation.navigate('Applicant profile')}
    customStyles={{
      optionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    
    }}
  >
    <Text>{text}</Text>
  </MenuOption>
);
const ReportMenu = ({ text, value }) => (
  <MenuOption
    onSelect={() => alert(`You clicked ${value}`)}
    customStyles={{
      optionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    }}
  >
    <Text>{text}</Text>
  </MenuOption>
);

const Divider = () => <View style={styles.divider} />;


const FirstRoute = ({navigation,arr}) => 


    <ScrollView style={{}}>
   {arr.map((label,index)=>(<View key = {index}>
   <View style={{borderWidth: 2, borderColor: '#e8e8e8', margin: 5, borderRadius: 10, padding: 5}}>
      <Text style={Universalstyles.text2}><Icon4 name='person' style={{fontSize: 25, color: 'black',}}/>  {label.lookingfor}</Text>
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 30}}>Company name:</Text>
      <Text style=style={Universalstyles.text}><Icon name='email' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Company email address: </Text> */}
     { label.compname && <Text style={Universalstyles.text}><Icon name='warehouse' style={{fontSize: 20, color: 'black', marginRight: 10}}/> {label.compname}</Text>}
      {/* <Text style={{ paddingHorizontal: 5, paddingBottom: 5, fontSize: 15,opacity:.5,}}><Icon name='map-marker' style={{fontSize: 20, color: 'black', }}/> Workplace address </Text> */}
      <Text style={Universalstyles.text}><Icon name='account' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> {label.lastname}, {label.firstname} {label.midname}</Text>
      <Text style={Universalstyles.text}><Icon name='map-marker' style={{fontSize: 20, color: 'red', marginRight: 10}}/> {label.street}, {label.city}, {label.province}, {label.zipcode}</Text>
      {/* <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Year company started: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Employees hired: </Text>
      <Text style={Universalstyles.text}><Icon name='account-group' style={{fontSize: 20, color: 'black', marginRight: 10}}/> Number of customers serve: </Text> */}
    <Text style={Universalstyles.text}><Icon name='briefcase-outline' style={{fontSize: 20, color: 'black', }}/> {label.jobtype}</Text> 

      
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={Universalstyles.text}><Icon name='calendar-month' style={{fontSize: 20, color: 'blue', marginRight: 10}}/> Hiring start in:</Text> 
      <Text style={{ paddingHorizontal: 80, paddingBottom: 5, fontSize: 15,opacity:.5}}><Icon name='calendar-month' style={{fontSize: 20, color: 'red', marginRight: 10}}/> Hiring end on: </Text>
      </View>
      <View style={{ alignItems: 'center', flexDirection:'row', justifyContent: 'flex-start'}}>
      <Text style={{paddingHorizontal: 25, fontSize: 15, opacity:.5}}>{label.startdate} </Text>
      <Text style={{paddingHorizontal: 100,fontSize: 15, opacity:.5}}>{label.enddate}</Text>
      </View>
      <Text style={Universalstyles.text}></Text>
     </View>

    
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500'}}>Job Description</Text>
    </View>
    <View style={{padding: 5, }}>
    <Text style={{paddingBottom: 10, margin: 3, fontSize: 20, alignSelf: 'center', fontWeight: '500'}}> {label.jobdesc}
    </Text>
    </View>
    </View>
    </View>))}
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
      
      
      <View style={{alignItems: 'center', flexDirection: 'row',justifyContent:"flex-end", width:"100%" }}>
      <TouchableOpacity onPress={closeIconAlert}>
      <Icon2 name='closecircle' style={{fontSize: 25, color: 'red', marginHorizontal: 10}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={checkIconAlert}>
      <Icon2 name='checkcircle' style={{fontSize: 25, color: 'green', marginHorizontal: 10}}/>
      </TouchableOpacity>
      
      <MenuProvider style={styles.container}>
                <Menu>
                  <MenuTrigger
                    customStyles={{
                      triggerWrapper: {
                        top: 0,
                      },
                    }}
                  >
                    <Icon3 name='dots-three-vertical' style={{fontSize: 25, color: 'black', marginHorizontal: 5 }}/>
                  </MenuTrigger>
                  <MenuOptions
                    customStyles={{
                       optionsContainer: {
                        borderRadius: 10,
                        
                      },
                    }}
                  >
                    <ViewProfileMenu
                      text="View profile"
                      value="View Profile"
                      
                    />
                    <Divider />
                    <ReportMenu
                      text="Report"
                      value="Report"
                    />
                  </MenuOptions>
                </Menu>
              </MenuProvider>
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

const PlaceholderImage = require('../../../../assets/bg/bgimage5.jpg');


export default function Manage({navigation,route, }) {
 

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

 const [gets,setGet] = React.useState({
      post : []
     })
     
     const { itemId,title } = route.params
     
var Data ={
      postID : itemId
      };

      var headers = {
        'Access-Control-Allow-Origin': 'true',
        'Content-Type': 'application/json',
      };
     
 
React.useEffect(()=>{
 
navigation.setOptions({
   title: title,
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: '#eede28', height: 150 },
   headerTitleStyle: { fontWeight: '100', fontSize: 30 }
  })
 
 navigation.addListener('focus',async () => {
  
 await axiosRequest.post('/api/manage.php', JSON.stringify(Data), headers)  
      .then((response) => {
       
setGet (prevState => ({...prevState, post: response.data}))

      })
}

  )},[])
  //console.log(gets.post)

    
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
            return <FirstRoute navigation={navigation} arr = {gets.post}/>;
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
     
      
     <Image 
   source= {{uri: selectedImage}}
    style={[{  
     width: 'auto',
     height: 100,
     resizeMode: 'cover', height: height * 0.20, 
     }]} 
     /> 
     
     <View style={{padding: 5, position: 'absolute', flex: 1}}>
     <TouchableOpacity onPress={pickImageAsync}>
     <View style={{backgroundColor: 'grey', width: 50, height: 50,  borderRadius: 25, padding: 6}}>
     <Icon3 name='edit' style={{
      fontSize: 35, 
      color: 'gold', 
      margin: 1
      
      }}/>
     </View>
     </TouchableOpacity>
     </View>
     
     {gets.post.map((label,index)=>(
     
<TabView key= {index}
    navigationState={{ index, routes }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={{ width: Dimensions.get('window').width }}
    />
     
     ))
    }
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 0,
    marginHorizontal: 0,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#7F8487",
  },
 });