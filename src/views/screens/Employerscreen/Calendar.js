import { View, Text, SafeAreaView, Dimensions, ScrollView, RefreshControl} from 'react-native'
import React from 'react'
import Universalstyles from '../../../const/Universalstyle';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}


const Calendar = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
            />
          }
        >
     <View style={[Universalstyles.signup, {height: 'auto'}]}>
    <View style={{height: 'auto', padding: 10}}>
            <View  style= {Universalstyles.txt2}>
            <Text style={{ fontSize: 40, fontWeight: '500',}}>Calendar</Text>
            <Text style={{ fontSize: 12, marginLeft: 5}}>View the date & time of the job being posted</Text>
            </View>

      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Calendar