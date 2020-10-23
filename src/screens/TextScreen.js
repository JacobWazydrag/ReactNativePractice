import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [text, setText] = useState('')
    return (
        <View>
        <Text>Enter Text:</Text>
            <TextInput
            autoCorrect={ false }
            autoCapitalize="none" 
            style={styles.input}
            value={text}
            onChangeText={(newValue) => {
                setText(newValue)
            }}
            />
            <Text>Your New Text: {text}</Text>
        </View>
    )
}

export default TextScreen

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
