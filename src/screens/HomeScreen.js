import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
  <Text style={styles.text}>Hi there From Home Screen</Text>
  <Button onPress={() => navigation.navigate('Components')} title="Go To Component Demo" />
  <Button onPress={()  => navigation.navigate('List')} title="Go to List Demo"/>
  <Button onPress={()  => navigation.navigate('Image')} title="Go to Image Demo"/>

  </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: "crimson"
  }
});

export default HomeScreen;
