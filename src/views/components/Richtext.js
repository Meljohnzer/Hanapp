import { useRef, useState } from "react";
import React from 'react'
import {Universalstyles} from '../../const/Universalstyle';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";


const Richtext = ({
    label,
    iconName, 
    value,
    error,
    placeholder, 
    editable,
    onChange,
    onBlur,
    showSoftInputOnFocus,
    onFocus=()=>{},
    ...props
}) => {
  const richText = useRef();
  const [isFocused, setisFocused] = React.useState(false);
//   const [descHTML, setDescHTML] = useState("");
//   const [showDescError, setShowDescError] = useState(false);

//   const richTextHandle = (descriptionText) => {
//     if (descriptionText) {
//       setShowDescError(false);
//       setDescHTML(descriptionText);
//     } else {
//       setShowDescError(true);
//       setDescHTML("");
//     }
//   };

//   const submitContentHandle = () => {
//     const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
//     const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

//     if (replaceWhiteSpace.length <= 0) {
//       setShowDescError(true);
//     } else {
//       // send data to your server!
//     }
//   };

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={{ flex: 1 }}>
      <View style={{marginBottom: 15, }}>
        
        <View style={[styles.richTextContainer, {borderColor: error ? 'red': isFocused ? 'black': '#e8e8e8', borderWidth: 1.5 }]}>
          
          <RichEditor
            ref={richText}
            onChange={onChange}
            placeholder={placeholder}
            androidHardwareAccelerationDisabled={true}
            initialHeight={250}
            initialContentHTML = {value}
            showSoftInputOnFocus = {showSoftInputOnFocus}
            value = {value}
        onFocus={() => {
            onFocus();
            setisFocused(true);
        }}
            onBlur={() => {
                setisFocused(false);
            }}
            
        style={{color: '#2c2c2c', flex: 1, }} {...props}/>
        
          <RichToolbar
            editor={richText}
            selectedIconTint="#873c1e"
            iconTint="#312921"
            style={styles.richTextToolbarStyle}
          />
        </View>
        { error && (
        <Text style={[Universalstyles.errotxt]}>{error}</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
export default Richtext

const styles = StyleSheet.create({

  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
    
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#ccaf9b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "#c6c3b3",
    borderColor: "#c6c3b3",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },


});
