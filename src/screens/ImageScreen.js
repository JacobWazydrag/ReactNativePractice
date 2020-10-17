import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";
import React from 'react'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} />
            <ImageDetail title="Beach" image={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Mountian" image={require('../../assets/mountain.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        fontSize: 20
    }
})
export default ImageScreen
