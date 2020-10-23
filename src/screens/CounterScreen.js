import React, { useReducer } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        default:
        return state    
    }
}
const CounterScreen = () => {
const [state, dispatch] = useReducer(reducer, { count: 0 })

        return (
            <View>
            <Button title="increase" onPress={() => dispatch({ type: 'increment', payload:  COUNTER_INCREMENT})} />
            <Button title="decrease" onPress={() => dispatch({ type: 'decrement', payload: COUNTER_INCREMENT })} />
                <Text> Current Count:  {state.count}</Text>
            </View>
        )
    }

    const styles = StyleSheet.create({
        counterStyle: {
            fontSize: 20
        }
    })

    export default CounterScreen
