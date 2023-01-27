import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'


//with mysql database using php for backend
const About = () => {
  return (
    <SafeAreaView>
    <ScrollView
         contentContainerStyle={{
           justifyContent: 'center',
          // height: Dimensions.get('window').height,
           width: Dimensions.get('window').width,
         }}
        
       >
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>Accessibility at Hanapp</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>We help students to get a jobs. 18+ years old students.{'\n\n'}
          
          <Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> is committed to providing an accessible experience for all users to our website. 
          We are constantly evaluating our accessibility offerings, educating our employees about the importance 
          of accessibility, and improving the accessibility of our experiences. Hanapp is dedicated to assisting 
          all 18+ years old students in finding work, and accessibility is a critical component of our mission.
</Text>
    </View>
    </View>


    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>Privacy Center</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>
          
          <Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> values the trust 
          that our users and customers place in us by granting us access to their Personal Data. This Privacy Statement 
          explains how we work to keep that trust and protect that information. {'\n\n'}

          Our Privacy Policy covers how we collect, use, and disclose the Personal and 
          Non-Personal Data we collect from and about you when you access or use our online 
          and/or mobile websites, applications, services, and software, interactions with us 
          over the phone or in person, or that we obtain from publicly available sources or third-party 
          sources, as permitted by applicable law and in accordance with this Privacy Policy.

</Text>
    </View>
    </View>

    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>Prioritizing your trust</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>
          
       We value the trust you place in us, whether we're assisting you in finding jobs or great candidates. 
       To keep your trust, we make significant investments in data security. Our privacy values guide these efforts: {'\n\n'}

       We treat all users fairly by providing a complete set of global privacy rights. Any user can make the following request:{'\n\n\t'}

          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Access to their personal data{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Deletion of their personal data{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> A portable version of their personal data{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Restriction of or objection to certain processing of their personal data{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'5.)'}</Text> We adhere to a policy of privacy by design, which informs how we build and operate our services.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'6.)'}</Text> We’re transparent about what personal data we collect and how it’s processed.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'7.)'}</Text> We ensure the personal data we gather will primarily be used for the purposes of helping our job seekers find jobs, our employers find great candidates and improving the services we provide to you. {'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'8.)'}</Text> We limit our collection and storage of personal data to what’s adequate, relevant and necessary.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'9.)'}</Text> We keep your personal data accurate and up to date, where appropriate.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'10.)'}</Text> We process your personal data using appropriate security and confidentiality.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'11.)'}</Text> We demonstrate accountability and responsibility under applicable privacy laws.{'\n\t'}



</Text>
    </View>
    </View>


    </ScrollView>
    </SafeAreaView>
  )
}

export default About