import React from "react"

import { View, Text, StyleSheet } from "react-native"

const ImageDetail = (props) => {
    return(
        <View>
            <Image source={require('../assets/img')} />
            <Text>{props.title}</Text>
        </View>
    )
}

const 

export default ImageDetail 

