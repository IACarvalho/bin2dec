import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./Styles";

export default function App() {
  const [output, setOutput] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
   if(text.search(/^[2-9]|[a-zA-Z]|[\-]|[,]|[.]|[\s]+$/g) !== -1){
     setErrorMessage("*Please enter a valid value*")
   }
   else{
     setErrorMessage("")
   }
  }, [text])
  const handleButton = () => {
    if(errorMessage.length === 0){
      setOutput(parseInt(text, 2));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bin2Dec</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.errorMenssage}>{errorMessage}</Text>
        <Text style={styles.label}>{output}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          maxLength={8}
          keyboardType={'number-pad'}
        />
        <TouchableOpacity style={styles.button} onPress={handleButton}>
          <Text>Convert</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
