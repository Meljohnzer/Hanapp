import { Dimensions, StyleSheet } from 'react-native'

export const Universalstyles = StyleSheet.create({

signup: {
    flex: 1,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
   
},

signupbg: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
},
scrollView: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1
  },
logo:{
       
    flex: 1,
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

HomeEmp: {
    display: 'flex',
    flexDirection: "row", 

    alignItems: "center", 
    justifyContent: "space-around",
    
},
Logo1: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'contain'
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

txt2: {
    color: '#2f2f2f', 
    paddingBottom: 10,  
    borderBottomWidth: 2,
    borderColor: '#e8e8e8',
    
    
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
studprofile2:{
    flex: 1,
    margin: 10,
    borderColor: '#e8e8e8',
    flexDirection: 'column',
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10

},

studprofile:{
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    margin: 5,
    flex: 1,
    flexDirection: 'column',
    borderRadius: 5
},

searchBar:{
    flex: 1,
   
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
    marginVertical: 0,
    margin: 0,
},

profile1: {
    
    borderColor: '#e8e8e8',
    padding: 10,
    borderWidth: 2,
    flexDirection: 'row',
},

profile2: {
    padding: 10,
    marginLeft: 5,
    flex: 1
},

text: {
    paddingHorizontal: 5, 
    paddingBottom: 5, 
    fontSize: 15,
    opacity:.5,

},
text2: {
    padding: 5, 
    paddingBottom: 5, 
    marginBottom: 10, 
    fontSize: 30, 
    borderBottomWidth: 1, 
    borderColor: '#cbc8ce'
    
},

text3: {
    padding: 5, 
    paddingBottom: 5, 
    marginBottom: 10, 
    fontSize: 30, 
    borderBottomWidth: 1, 
    borderColor: '#cbc8ce',
    textAlign: 'center'
},

Jobimage:{
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 50,
    alignSelf: 'center'
},

jobContent: {
    padding: 5,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth:  2,
    flexDirection: 'row',
    borderRadius: 10
},

jobContent2: {
    paddingHorizontal: 10,
    flex: 1,
    borderColor: '#e8e8e8',
    borderLeftWidth: 1.5,
    marginLeft: 0,
    flexDirection: 'column',
    justifyContent: 'center'

},

jobContent3: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 5,
    marginVertical: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#4169e1',
},

jobstatus: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 5,
    marginVertical: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
},
setAccount: {
    padding: 10,
    paddingTop: 0,
    borderBottomWidth: 1,
    
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