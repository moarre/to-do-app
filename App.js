import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import ToDoActivity from "./components/ToDoActivity";
import ToDoInput from "./components/ToDoInput";

export default function App() {
  const [listActivity, setListActivity] = useState([]);

  function addListHandler(enteredActivity) {
    setListActivity((currentListActivity) => [
      ...currentListActivity,
      { text: enteredActivity, id: Math.random().toString() },
    ]);
  }

  function deleteListHandler() {
    console.log("Delete");
  }

  return (
    <View style={styles.container}>
      <ToDoInput onAddList={addListHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={listActivity}
          renderItem={(itemData) => {
            return (
              <ToDoActivity
                text={itemData.item.text}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  listContainer: {
    marginTop: 20,
    flex: 8,
  },
});
