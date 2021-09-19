import React from 'react';
import { Text, StyleSheet, View  } from "react-native"

const ComponentScreen = () => {
    const name = "nada";
    return(
        <View>
            <Text style={styles.textStyle}>Getting Started</Text>
            <Text>My Name {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    }
})

export default ComponentScreen
