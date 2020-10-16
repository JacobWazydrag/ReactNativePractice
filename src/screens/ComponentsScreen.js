import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponeentsScreen = () => {
    return(
        <View>
        <Text style={styles.textStyle}>Getting Started with React-Native</Text>
        <Text style={styles.subHeaderStyle}>My name is {name} </Text>
        </View>
    )
    // return <Text style={styles.textStyle}>Getting Started with React-Native</Text>;
    // return <Text style={styles.subHeaderStyle}>My name is {name} </Text>;
};
const name = "Jacob"
const styles = StyleSheet.create({
    textStyle: {
      fontSize: 45,
      backgroundColor: "crimson"
    
    },
    subHeaderStyle: {
        fontSize: 20,
        backgroundColor: "green"
    }
  });

  export default ComponeentsScreen;