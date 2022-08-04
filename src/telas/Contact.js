import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import * as Animatable from 'react-native-animatable';


const Contact = () => {
  return (
    <View style={styles.center}>
      <Text>TESTE INPUT</Text>
      <TextInput   
        style={styles.input}
        placeholder= "aaa"
        onChangeText={(text) => this.setState({total: text})  }      
       > 
                
      </TextInput>
    
    
    
    </View>


  );
};



const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input:{
    marginTop: 10,
    width: 250,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a69d9d',
    borderRadius: 4

  }
});

export default Contact;