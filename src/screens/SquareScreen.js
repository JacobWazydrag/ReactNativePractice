import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red)

  const setColor = (color, change) => {
    if(color === 'red') {
    if (red + change > 255 || red + change < 0 ) {
        return;

    } else {
        setRed(red + change);
    }

  }
};


  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor('red', COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor('red', -1 * COLOR_INCREMENT);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          setGreen(green + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setGreen(green - COLOR_INCREMENT);
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {
          setBlue(blue + COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setBlue(blue - COLOR_INCREMENT);
        }}
        color="Blue"
      />
      <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});