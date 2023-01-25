import { View, Text, SafeAreaView, Dimensions, ScrollView, RefreshControl} from 'react-native'
import React from 'react'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Notif = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
React.useEffect(()=>{
 navigation.addListener('focus',async () => {
  
  await navigation.setOptions({
   title: "Notification",
   headerTitleAlign: 'center',
   headerStyle: { backgroundColor: 'white', height: 150 },
   headerTitleStyle: { fontWeight: '100', fontSize: 25 }
  })

}

  )},[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{ 
          justifyContent: 'center',
          height: Dimensions.get('window').height,
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
     <View></View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Notif