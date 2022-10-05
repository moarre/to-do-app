import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import ToDoActivity from "./components/ToDoActivity";
import ToDoInput from "./components/ToDoInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [listActivity, setListActivity] = useState([]);

  function startAddListHandler() {
    setModalIsVisible(true);
  }

  function endAddListHandler() {
    setModalIsVisible(false);
  }

  function addListHandler(enteredActivity) {
    setListActivity((currentListActivity) => [
      ...currentListActivity,
      { text: enteredActivity, id: Math.random().toString() },
    ]);
    endAddListHandler();
  }

  function deleteListHandler(id) {
    setListActivity((currentListActivity) => {
      return currentListActivity.filter((list) => list.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Button
          title="Add New List"
          color="#5e0acc"
          onPress={startAddListHandler}
        />
        <ToDoInput
          visible={modalIsVisible}
          onAddList={addListHandler}
          onCancel={endAddListHandler}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={listActivity}
            renderItem={(itemData) => {
              return (
                <ToDoActivity
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteListHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    marginTop: 20,
    flex: 8,
  },
});
