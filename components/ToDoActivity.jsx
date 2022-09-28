import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

function ToDoActivity(props) {
    return (
        <Pressable onPress={props.onDeleteItem}>
            <View style={styles.listItem}>
                <Text style={styles.listText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default ToDoActivity

const styles = StyleSheet.create({
    listItem: {
        margin: 4,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    listText: {
        color: "white",
    },
})