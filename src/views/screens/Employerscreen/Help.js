import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'


//with mysql database using php for backend

const Help = () => {
  return (
    <SafeAreaView>
    <ScrollView
         contentContainerStyle={{
           justifyContent: 'center',
          // height: Dimensions.get('window').height,
           width: Dimensions.get('window').width,
         }}
        
       >
    <View>
    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>Account Settings</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>Your <Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> account settings are always up for
          adjustment. Change your Hanapp settings, update your resume and contact information, and select a legacy contact for your account.
          {'\n\n'}
          Learn how to adjust things on your Hanapp account.
          {'\n\n'}
          <Text style={{color: 'blue', fontSize: 25}}>{'<>'}</Text> <Text style={{fontWeight: 'bold'}}>Adjust Your Account Settings </Text>{'\n\n\t'}
          <Text style={{color: 'red', fontSize: 20}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> To find your settings:</Text> {'\n\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Navigate to the Home page.{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> On the home page's bottom, to the right, select <Text style={{fontWeight: '600'}}>Settings.</Text>{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Tap the setting you'd like to adjust. {'\n\n\t'}

          <Text style={{color: 'red', fontSize: 20}}>{'<>'}</Text><Text style={{fontWeight: '600'}}>  Settings include things like:</Text> {'\n\n\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> <Text style={{fontWeight: '600', textDecorationLine: 'underline'}}>Personal and Account info:</Text> Edit the basics like your name, mobile number, email, etc.{'\n\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> <Text style={{fontWeight: '600', textDecorationLine: 'underline'}}>Password and Security:</Text> Change your password, and turn on alerts and approvals to keep your account secure.{'\n\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> <Text style={{fontWeight: '600', textDecorationLine: 'underline'}}>Help and Support:</Text> Ask for assistance, ask for clarifications and policy of the application, and report a problem.{'\n\t\t\t\t'}

</Text>
    </View>
    </View>



    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>Login and Password</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
      <Text style={{fontSize: 18}}>
      <Text style={{ fontSize: 18}}> If you know your current password, you can change it.</Text> {'\n\n\t'}
      <Text style={{color: 'red', fontSize: 20}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> When you create a new password, keep in mind:</Text> {'\n\n\t\t\t'}
          
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Your password needs to be at least 8 characters.{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> The password should be simple to remember for you but difficult for others to guess.{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Your account password should be distinct from the passwords you use to access other accounts, such as your email or bank.{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Your password should not contain your email address, phone number, or birthday.{'\n\n\n'}

      <Text style={{ fontSize: 18, fontWeight: '500'}}> If you're having trouble changing your password, find out how to get login and password help and support.
</Text> {'\n\n\t'}
<Text style={{color: 'blue', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> Log into your Hanapp Account</Text> {'\n\n\t\t\t\t'}
<Text style={{color: 'red', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> To log into your Hanapp account from the Hanapp app:
</Text> {'\n\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Open the Hanapp app.{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Enter your email: {'\n\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{''}</Text> <Text style={{fontWeight: '600'}}>Email:</Text> You can log in with an email that's registered on your Hanapp account.{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Enter your password and tap <Text style={{fontWeight: '600'}}>Log in.</Text>
{'\n\n\n'}
<Text style={{ fontSize: 18, fontWeight: '500'}}> If you forget your password or need to reset your password for any reason, you can do so at any time.

</Text> {'\n\n\t'}
<Text style={{color: 'red', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> Step-by-step instructions for resetting your password:
</Text> {'\n\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Navigate to the login page. {'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Click <Text style={{fontWeight: '500'}}>Forgot your password?</Text> at the top of the login button. {'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Enter your email address. {'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Click <Text style={{fontWeight: '500'}}>Submit.</Text> {'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'5.)'}</Text> If the email address you enter is associated with Hanapp account, you'll receive an email with a password reset link.
 {'\n\n\t'}
 <Text style={{ fontSize: 18, fontWeight: '500'}}> Check your spam or junk folder if you don't see the email in your inbox.
</Text> {'\n\n\t'}
<Text style={{color: 'blue', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> Fix a Login Problem</Text> {'\n\n\t\t'}
<Text style={{color: 'red', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> Recover Your Hanapp Account if You Can't Log In.
</Text> {'\n\t\t\t'}
<Text style={{ fontSize: 18, }}> If you're having trouble logging into your Hanapp account from your Hanaap app:
</Text> {'\n\n\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Ensure that you are using the latest version of the Hanapp app, or uninstall it and then reinstall it.{'\n\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Use a mobile browser to try logging in (example: Safari, Chrome). {'\n\n\t\t'}
<Text style={{color: 'red', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> Basic Mobile App Troubleshooting</Text> {'\n\t\t\t'}         
<Text style={{ fontSize: 18, }}> If you're experiencing a technical issue on the Hanapp Mobile App, there are a few things you can do yourself that may resolve the issue. 
</Text> {'\n\n\t\t\t\t'}
<Text style={{color: 'green', fontSize: 20}}>{'>'}</Text> For all devices:  {'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Make sure the app is up-to-date {'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Make sure your device's operating system is up-to-date  {'\n\n\t\t\t\t'}
          
<Text style={{color: 'green', fontSize: 20}}>{'>'}</Text> For Android Devices:   {'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Open the Settings application on your device.{'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Head over to Apps Menu.{'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Choose Installed Applications.{'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Find the Application you want to Clear the App Data from.{'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'5.)'}</Text> Select it, Move to the Storage Tab.{'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'6.)'}</Text> Hit Clear Storage/ Clear App Data   {'\n\n\t\t\t\t'}
<Text style={{color: 'green', fontSize: 20}}>{'>'}</Text> For IOS devices:  {'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Uninstall the appx{'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Restart your device {'\n\t\t\t\t\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Reinstall the app.   {'\n\n'}
          <Text style={{ fontSize: 18, }}> This effectively updates the app and clears the app data. Please remember to log back in after completing these steps.
</Text> {'\n\n\t\t\t\t'}
      </Text>
      </View>
      </View>


      <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>Privacy and Security</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>
          <Text style={{color: 'blue', fontSize: 25}}>{'<>'}</Text> <Text style={{fontWeight: 'bold'}}>Hanapp’s Privacy and Policy </Text>{'\n\n\t'}
         <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Hanapp values the trust that our jobseekers, employers, and companies put in us by allowing us access to their personal data. This privacy statement explains how we work to uphold that trust and protect your information.{'\n\n\t'}
         <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Our privacy policy explains how we gather, use, and disclose the Personal and Non-Personal Data we learn about you when you use our online and/or mobile websites, applications, services, and software, communicate with us by phone or in person, or, as allowed by applicable law and in accordance with this privacy policy, learn it from publicly accessible or other sources.{'\n\t'}
         
         </Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>
          <Text style={{color: 'blue', fontSize: 25}}>{'<>'}</Text> <Text style={{fontWeight: 'bold'}}>Who is Responsible for your information</Text>{'\n\n\t'}
         <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Your application materials submitted through Hanapp may be processed by Hanapp for specific purposes. The Employer to which you are applying will have control over these data. Until the controller instructs us to delete the data, we as the processor keep it.{'\n\n\t'}
         <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Hanapp is a controller of all other information that you provide in the course of your use of our Sites.
{'\n\n\t'}
<Text style={{color: 'red', fontSize: 25}}>{'<>'}</Text><Text style={{fontWeight: '600'}}> Sharing data between sites allows us to:
</Text> {'\n\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> assist in connecting job seekers with more employers and job listings{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Enhance and personalize our users' services{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Boost user security for us{'\n\t\t\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> The exchange of data is beneficial to both employers and job seekers.{'\n\t'}  
</Text>
    </View>
    </View>


    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to create a job post</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}><Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text>  makes it simple to post a jobs and you will find it interesting while inputting job info.

          {'\n\n'}
          To create job post on <Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text>:
          {'\n\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Navigate and tap create post in the navigation bar.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> fill up the following:
{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Job information.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Job location.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'5.)'}</Text> Hiring Start and End{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'6.)'}</Text> When Finished click post{'\n\t'}
          
</Text>
    </View>
    </View>

    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to edit Job post</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}><Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> will assist you on managing your posted job.{'\n\n'}
          To edit your posted jobs:{'\n\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Go to home and click Manage{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Click edit{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Modify the information{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> When Finished click done{'\n\t'}

          
</Text>
    </View>
    </View>


    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to view applicants and its profile</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}> <Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> will help you manage your applicants.{'\n\n'}
       To view the applicants :{'\n\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Go to home and click Manage{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Tap appplicants{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Tap vertical three dots{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Tap Profile{'\n\t'}
         
         
          
</Text>
    </View>
    </View>



    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to manage applicants request</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>You can manage the applicants request.{'\n\n'}
       
To manage your applicants request:
{'\n\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Go to home and click Manage{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Tap appplicants{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Tap "X icon" to reject the applicant request{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Tap "Check icon" to approve the applicant request{'\n\t'}
          
          
</Text>
    </View>
    </View>



    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to manage approved applicants</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}><Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> allows you to explore applicants request you can set an interview schedule for the approve applicants{'\n\n'}
       
To set an interview schedule:
{'\n\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Navigate and tap applicants in the navigation bar.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Tap the set schedule beside applicant profile{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Choose interview type{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Set Interview starting and end date and time{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'5.)'}</Text> Tap Done{'\n\t'}
          
</Text>
    </View>
    </View>


    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to report applicants</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>If you come across an applicants request on <Text style={{fontWeight: 'bold'}}>Han</Text><Text style={{color: 'blue', fontWeight: 'bold'}}>app</Text> that you believe is inappropriate, fake, or incorrect, you can report it and provide feedback so that it can be removed. 
{'\n\n'}
To successfully report a suspicious applicants:
{'\n\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Navigate to the homepage{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Tap manage.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Tap applicants {'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'4.)'}</Text> Tap vertical three dots.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'5.)'}</Text> Tap report {'\n\n'}

These reports are taken seriously by us. Our teams will review, correct, and/or remove the applicants in your job hiring post. Please take the time to look over our efforts.


</Text>
    </View>
    </View>


    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to view notification</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>You can view notifications about yourself, your job hiring activity, and your connections on the Notifications page. 
{'\n\n'}
To view your notifications,Tap the Notifications icon at the top of the Hanapp homepage.
{'\n\n'}
Notifications appear at the upper-right of your Hanapp homepage. The number displayed on the icon is intended to notify you to any notifications since your last visit.


</Text>
    </View>
    </View>


    <View style={{height: 'auto', borderWidth: 2, borderColor: '#e8e8e8', borderRadius: 10, margin: 5}}>
   
   <View style={{padding: 10, margin: 10, borderBottomWidth: 1, borderColor: '#cbc8ce'}}>
    <Text style={{fontSize:20, textAlign: 'center', fontWeight: '500', color: 'blue'}}>How to log out</Text>
    </View>
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
       <Text style={{ fontSize: 18,}}>To sign out:{'\n\n\t'}

          <Text style={{color: 'orange', fontSize: 20}}>{'1.)'}</Text> Navigate to the homepage{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'2.)'}</Text> Tap the Settings icon at the upper-left of the page.{'\n\t'}
          <Text style={{color: 'orange', fontSize: 20}}>{'3.)'}</Text> Scroll down and tap Logout.{'\n\t'}

</Text>
    </View>
    </View>




    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Help