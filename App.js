import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './src/views/screens/Loginscreen';
import Signupscreen from './src/views/screens/Signupscreen';
import Homescreen from './src/views/screens/Homescreen';
import Forgotscreen from './src/views/screens/Forgotscreen';
import { SafeAreaView } from 'react-native';
import Userstypescreen from './src/views/screens/Userstypescreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/views/screens/Studentscreen/Home";
import Profile from './src/views/screens/Studentscreen/Profile'
import Bookmark from './src/views/screens/Studentscreen/Bookmarks'
import Activity from './src/views/screens/Studentscreen/Activity'
import Settings from './src/views/screens/Studentscreen/Settings'
import LottieView from "lottie-react-native";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 30, backgroundColor: "#eee"}}>
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false}}>


 <Stack.Screen
      name='Studentscreen'
      component={Studentscreen}
      />
 
 <Stack.Screen options={{headerShown: false}}
      name='Users type'
      component={Userstypescreen}
      />
  <Stack.Screen
      name='Sign up'
      component={Signupscreen}
      />
  <Stack.Screen 
      name='Log in'
      component={Loginscreen}
      />
    <Stack.Screen
      name='Settings'
      component={Settings}
      />
  <Stack.Screen 
      name='Forgotscreen'
      component={Forgotscreen}
      />
   <Stack.Screen 
      name='Homescreen'
      component={Homescreen}
      />

    </Stack.Navigator>
   </NavigationContainer>
   </SafeAreaView>
  );
};

const Tabs = createBottomTabNavigator();

function Studentscreen () {
 
  return (

   
    <NavigationContainer independent={true}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#F5E44C',
          },
          
          tabBarStyle: {
            backgroundColor: '#F5E44C',
          },

          tabBarIcon: ({ focused, color, size }) => {
            let filePath;
            switch (route.name) {
              case "Home":
                  filePath = require("../mobprog-midterm/assets/Lottie/Home.json");
                  break;
              case "Profile":
                filePath = require("../mobprog-midterm/assets/Lottie/Profile.json");
                break;
              case "Bookmarks":
                filePath = require("../mobprog-midterm/assets/Lottie/Bookmarks.json");
                break;
              case "Activity":
                filePath = require("../mobprog-midterm/assets/Lottie/Activitylog.json");
                break;
              case "Settings":
                filePath = require("../mobprog-midterm/assets/Lottie/Settings.json");
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
        name="Activity" 
        component={Activity} />
      
        <Tabs.Screen 
        name="Settings" 
        component={Settings} />

      </Tabs.Navigator>
    </NavigationContainer>
     );
    };

