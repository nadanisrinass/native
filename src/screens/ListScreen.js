import React from "react"
import { Text, StyleSheet, View, FlatList } from "react-native"

const ListScreen = () => {
    const friends = [
        { name: "friend #1", key: "1" },
        { name: "friend #2", key: "2" },
        { name: "friend #3", key: "3" },
        { name: "friend #4", key: "4" },
        { name: "friend #5", key: "5" },
        { name: "friend #6", key: "6" },
        { name: "friend #7", key: "7" },
    ]
    return(
       <FlatList 
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={friends => friends.name}
        data={friends} 
        renderItem={({item}) => {
            return <Text>{item.name}</Text>
       }} />
    )
}

const styles = StyleSheet.create({})

export default ListScreen



