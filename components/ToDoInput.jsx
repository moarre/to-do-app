import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput
                    onChangeText={listInputHandler}
                    style={styles.textInput}
                    placeholder="Your activity..."
                    value={enteredActivity}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addListHandler} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ToDoInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "blue",
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: "100%",
        borderRadius: 6,
        padding: 16,
        marginRight: 6,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})