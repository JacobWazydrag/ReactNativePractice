import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
     <Image source={props.image} />
      <Text style={StyleSheet.imageStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    fontSize: 20,
  },
});
export default ImageDetail;
