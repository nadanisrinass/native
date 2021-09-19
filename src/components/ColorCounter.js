import React, { useReducer } from "react";
import {Button, StyleSheet, Text, View} from "react-native"

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return(
       <View>
           <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
           <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
           <Text>Color : {color}</Text>
       </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})