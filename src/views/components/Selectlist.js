import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Universalstyles} from '../../const/Universalstyle';
import { SelectList } from 'react-native-dropdown-select-list'

const Selectlist = ({
    label,
    iconName, 
    error,  
    keyboardType,
    onFocus=()=>{},
    ...props
}) => {
    const edustages = [
        {key:'HI', value:'High school',},
        {key:'SH', value:'Senior high school'},
        {key:'CL', value:'College'},
      ];
    
      const gradelvl = {
        	'HI':[
                {key:'1', value:'Grade 7',},
                {key:'2', value:'Grade 8',},
                {key:'3', value:'Grade 9',},
                {key:'4', value:'Grade 10',},
            ],
            'SH':[
                {key:'1', value:'Grade 11',},
                {key:'2', value:'Grade 12',},
                
            ],
            'CL':[
                {key:'1', value:'1st Year',},
                {key:'2', value:'2nd Year',},
                {key:'3', value:'3rd Year',},
                {key:'4', value:'4th Year',},
            ]


      };
    const [isFocused, setisFocused] = React.useState(false);
    const [category, setCategory] = React.useState();
    const [subcategory, setSubCategory] = React.useState();
  
    return (
        <View style={{marginVertical: 0, bottom: 7}}>
         
        
        <SelectList 
        
        boxStyles={{marginBottom: 7, borderColor: error ? 'red': isFocused ? 'black': '#e8e8e8', borderWidth: 1.5}}
        inputStyles={{iconName: 'school',color: 'grey', }}
        dropdownStyles={{marginBottom: 7, marginTop: 0, borderColor: '#e8e8e8', padding: 5, width: 'auto'}}
        dropdownItemStyles={{bottom: 0, }}
        dropdownTextStyles={{color: 'black',borderBottomWidth: 1, borderBottomColor: '#e8e8e8', }}
        setSelected = {setCategory}
        data={edustages}
        placeholder={'Hiring start date'}
        autoCorrect={false}

        onFocus={() => {
            onFocus();
            setisFocused(true);
        }}
        onBlur={() => {
            setisFocused(false);
        }}
        style={{color: '#2c2c2c', flex: 1}} {...props}
        />
        <SelectList 
        
        boxStyles={{marginBottom: 7, borderColor: error ? 'red': isFocused ? 'black': '#e8e8e8', borderWidth: 1.5}}
        inputStyles={{iconName: 'school',color: 'grey', }}
        dropdownStyles={{marginBottom: 7, marginTop: 0, borderColor: '#e8e8e8', padding: 5, width: 'auto'}}
        dropdownItemStyles={{bottom: 0, }}
        dropdownTextStyles={{color: 'black',borderBottomWidth: 1, borderBottomColor: '#e8e8e8', }}
        setSelected = {setSubCategory}
        data={gradelvl[category]}
        placeholder={'Hiring end date'}
        autoCorrect={false}

        onFocus={() => {
            onFocus();
            setisFocused(true);
        }}
        onBlur={() => {
            setisFocused(false);
        }}
        style={{color: '#2c2c2c', flex: 1}} {...props}
        />
        

    
        { error && (
        <Text style={{
            color: 'red', 
            fontSize: 12,
            marginTop: 0,
            marginHorizontal: 5,
            marginBottom: 7
        
        }}>{error}</Text>
        
        )}
       </View>
 
  );
};



export default Selectlist