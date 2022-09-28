import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

function ToDoInput(props) {
    const [enteredActivity, setEnteredActivity] = useState("");

    function listInputHandler(enteredText) {
        setEnteredActivity(enteredText);
      }

    function addListHandler() {
        props.onAddList(enteredActivity)
        setEnteredActivity('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={listInputHandler}
                style={styles.textInput}
                placeholder="Your activity..."
                value={enteredActivity}
            />
            <Button title="Add" onPress={addListHandler} />
        </View>
    )
}

export default ToDoInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "blue",
      },
      textInput: {
        borderWidth: 1,
        borderColor: "red",
        width: "80%",
        padding: 6,
        marginRight: 6,
      },
})