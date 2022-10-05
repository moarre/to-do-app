import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

function ToDoActivity(props) {
    return (
        <View style={styles.listItem}>
            <Pressable 
            android_ripple={{ color: '#210664' }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.listText}>{props.text}</Text>
            </Pressable>
        </View >
    )
}

export default ToDoActivity

const styles = StyleSheet.create({
    listItem: {
        margin: 4,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    listText: {
        color: "white",
        padding: 8,
    },
})