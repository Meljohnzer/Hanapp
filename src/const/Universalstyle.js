import { Dimensions, StyleSheet } from 'react-native'

export const Universalstyles = StyleSheet.create({

signup: {
    backgroundColor : 'white' , 
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
   
},

signupbg: {
    marginVertical: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',  
    padding: 10,
},
logo:{
       
    flex: 0,
    right: 4.4,
    width: 'auto',
    height: 'auto',
    resizeMode: 'contain',
},
signwith: {
    borderColor: '#e8e8e8',
    borderTopWidth: 1,
    marginVertical: 10,
    fontWeight: '500',
    textAlign: 'center'
    
},

Signwith: {
    display: "flex", 
    flexDirection: "row", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "space-around",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    
},

Ggl: {
    width: 50,
    height: 60,
    resizeMode: 'center'
},
Fb: {
    width: 50,
    height: 60,
    resizeMode: 'center'
},
Apl: {
    width: 45,
    height: 60,
    resizeMode: 'center'
},

txt: {
    color: '#2f2f2f', 
    paddingVertical: 10,  
    textAlign: 'center', 
    fontSize: 30, 
    fontWeight: '500',
},

errotxt: {
    color: 'red', 
    fontSize: 12,
    marginTop: 7, 
    marginHorizontal: 5
},

input:{

},

userstype: {
    padding: 10,
    width: 300,
    textAlign: 'center', 
    fontWeight: '500', 
    fontSize: 20,
    borderWidth: 1, 
    borderRadius: 50,
    marginVertical: 10
},
studscreen:{
    flex: 1
},
searchBar:{
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
},

searchContainer:{
    backgroundColor: 'white',
    height: 45,
    borderColor: '#e8e8e8',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
   
    alignItems: 'center',
    borderRadius: 10

},

jobPost: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute', 
    marginVertical: 70,
},

jobContent: {
    padding: 10,
    borderTopWidth:  1,
    borderBottomWidth:  1, 
    flexDirection: 'row'
},

jobContent2: {
    
    padding: 10,
    borderLeftWidth: 0.5,
    marginLeft: 7,
    flex: 1

},
jobContent3: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#4169e1',
},
setAccount: {
    padding: 10,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderTopWidth: 1,
},

logout:{
    backgroundColor: '#4169e1',
    alignSelf: 'center',
    width: 200,
    height: 'auto',
    alignItems: 'center',
    marginBottom: 0,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 0,
},
})

export default Universalstyles;