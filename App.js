import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './src/views/screens/Loginscreen';
import Signupscreen from './src/views/screens/Signupscreen';
import Forgotscreen from './src/views/screens/Forgotscreen';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './src/views/screens/Studentscreen/Home'
import Home2 from './src/views/screens/Employerscreen/Home';
import Profile from './src/views/screens/Studentscreen/Profile'
import Profile2 from './src/views/screens/Employerscreen/Profile';
import Bookmark from './src/views/screens/Studentscreen/Bookmarks'
import Activity from './src/views/screens/Studentscreen/Activity'
import Settings from './src/views/screens/Studentscreen/Settings'
import Settings2 from './src/views/screens/Employerscreen/Settings';
import Applicant from './src/views/screens/Employerscreen/Applicant';
import CreatePost from './src/views/screens/Employerscreen/Post';
import Notif from './src/views/screens/Studentscreen/Notif';
import Notif2 from './src/views/screens/Employerscreen/Notif';
import LottieView from "lottie-react-native";
import Userinfo from './src/views/screens/Userinfo';
import Educbg from './src/views/screens/Studentscreen/Educbg';
import Guardianbg from './src/views/screens/Studentscreen/Guardianbg';
import Compdetails from './src/views/screens/Employerscreen/Compdetails';
import Description from './src/views/screens/Studentscreen/Description';
import Manage from './src/views/screens/Employerscreen/Manage';
import Cprofile from './src/views/screens/Studentscreen/Cprofile'
import JSprofile from './src/views/screens/Employerscreen/JSprofile';
import Location from './src/views/components/Location';
import Attachfile from './src/views/screens/Studentscreen/Attachfile';
import Editprofile from './src/views/screens/Employerscreen/Editprofile';
import PassSec from './src/views/screens/Employerscreen/PassSec';
import PerAcc from './src/views/screens/Employerscreen/PerAcc';
import Help from './src/views/screens/Employerscreen/Help';
import Support from './src/views/screens/Employerscreen/Support';
import About from './src/views/screens/Employerscreen/About';
import Reportprob from './src/views/screens/Employerscreen/Reportprob';
import Cemail from './src/views/screens/Employerscreen/Cemail';
import Review from './src/views/screens/Employerscreen/Review';
import Interview from './src/views/screens/Employerscreen/Interview';
import Richtext from './src/views/components/Richtext';
import Appstatus from './src/views/screens/Studentscreen/Appstatus';


const Stack = createNativeStackNavigator();

export default function App() {
 
//  axiosRequest.get('/api/check.php')
//  .then((response)=>{
//   console.log(response.data)
//  })
//  .catch(error => console.log(error));
  return (
    
<SafeAreaView style={{flex: 1, paddingTop: 30, backgroundColor: "#eee"}}>
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false}}>



 <Stack.Screen 
      name='Log in'
      component={Loginscreen}
      />

<Stack.Screen
      name='Company details'
      component={Compdetails}
      />
<Stack.Screen
      name='User info'
      component={Userinfo}
      />
<Stack.Screen
      name='Education'
      component={Educbg}
      />
<Stack.Screen
      name='Guardian'
      component={Guardianbg}
      />

<Stack.Screen
      name='Sign up'
      component={Signupscreen}
      />

<Stack.Screen
      name='Studentscreen'
      component={Studentscreen}
      />


<Stack.Screen
      name='Location'
      component={Location}
      />
<Stack.Screen
      name='Employerscreen'
      component={Employerscreen}
      />

<Stack.Screen options={{headerShown: true}}
      name='Job description'
      component={Description}
      />
<Stack.Screen options={{headerShown: true}}
      name='Manage'
      component={Manage}
      />
<Stack.Screen options={{headerShown: true}}
      name='Review'
      component={Review}
      />
<Stack.Screen options={{headerShown: true}}
      name='Interview schedule'
      component={Interview}
      />

<Stack.Screen options={{headerShown: true}}
      name='Application status'
      component={Appstatus}
      />
<Stack.Screen options={{headerShown: true}}
      name='Richtext'
      component={Richtext}
      />
<Stack.Screen options={{headerShown: true}}
      name='Settings'
      component={Settings2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Company profile'
      component={Cprofile}
      />
<Stack.Screen options={{headerShown: true}}
      name='Password and security'
      component={PassSec}
      />
<Stack.Screen options={{headerShown: true}}
      name='Personal & account information'
      component={PerAcc}
      />
<Stack.Screen options={{headerShown: true}}
      name='Help'
      component={Help}
      />
<Stack.Screen options={{headerShown: true}}
      name='Support inbox'
      component={Support}
      />
<Stack.Screen options={{headerShown: true}}
      name='About us'
      component={About}
      />
<Stack.Screen options={{headerShown: true}}
      name='Report a problem'
      component={Reportprob}
      />
<Stack.Screen options={{headerShown: true}}
      name='Applicant profile'
      component={JSprofile}
      />
<Stack.Screen options={{headerShown: true}}
      name='Edit profile'
      component={Editprofile}
      />
<Stack.Screen 
      name='Profile2'
      component={Profile2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Change email address'
      component={Cemail}
      />
<Stack.Screen options={{headerShown: true}}
      name='Notifications'
      component={Notif}
      />
<Stack.Screen options={{headerShown: true}}
      name='Notification'
      component={Notif2}
      />
<Stack.Screen options={{headerShown: true}}
      name='Apply'
      component={Attachfile}
      />
  <Stack.Screen 
      name='Forgotscreen'
      component={Forgotscreen}
      />
 
 


    </Stack.Navigator>
   </NavigationContainer>
   </SafeAreaView>
  );
};


const Tabs = createBottomTabNavigator();

function Studentscreen () {
 
  return (

      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#F5E44C',
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#F5E44C',
          },

          tabBarIcon: ({ focused, color, size }) => {
            let filePath;
            switch (route.name) {
              case "Home":
                  filePath = require("./assets/Lottie/Home.json");
                  break;
              case "Profile":
                filePath = require("./assets/Lottie/Profile.json");
                break;
              case "Bookmarks":
                filePath = require("./assets/Lottie/Bookmarks.json");
                break;
              case "Activity log":
                filePath = require("./assets/Lottie/Activitylog.json");
                break;
              case "Settings":
                filePath = require("./assets/Lottie/Settings.json");
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
            }
            return <LottieView source={filePath} autoPlay={focused} />;
          },
        })}
      >
        <Tabs.Screen 
        name="Home" 
        component={Home} />
       
        <Tabs.Screen 
        name="Bookmarks" 
        component={Bookmark} />
        
        <Tabs.Screen 
        name="Profile" 
        component={Profile} />

        <Tabs.Screen 
        name="Activity log" 
        component={Activity} />
      
        <Tabs.Screen 
        name="Settings" 
        component={Settings} />

      </Tabs.Navigator>
     );
    };

    const Tabs2 = createBottomTabNavigator();

    function Employerscreen () {

      return (
        <Tabs2.Navigator
        
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#F5E44C',
          },
          
          headerShown: false,
          
          tabBarStyle: {
            backgroundColor: '#F5E44C',
          },

          tabBarIcon: ({ focused, color, size }) => {
            let filePath;
            switch (route.name) {
              
              case "Home":
                  filePath = require("./assets/Lottie/Home.json");
                  break;
              case "Applicant":
                  filePath = require("./assets/Lottie/Applicant.json");
                  break;
              case "Create post":
                  filePath = require("./assets/Lottie/Add.json");
                  break;
              case "Profile":
                filePath = require("./assets/Lottie/Profile.json");
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
            }
            return <LottieView source={filePath} autoPlay={focused} />;
          },
        })}
      >
        <Tabs2.Screen 
        name="Home" 
        component={Home2} />
       
       <Tabs2.Screen 
        name="Applicant" 
        component={Applicant} />

        <Tabs2.Screen 
        name="Create post" 
        component={CreatePost} />
        
        <Tabs.Screen 
        name="Profile" 
        component={Profile2} />


      </Tabs2.Navigator>
     );
    };
