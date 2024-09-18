import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalsIsVisible] = useState(false);
  const [listOfGoals, setListOfGoals] = useState([]);

  function startAddGoalHandler() {
    setModalsIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalsIsVisible(false);
  }

  const addGoalHandler = (textInputValue) => {
    setListOfGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: textInputValue, id: Math.random().toString() },
    ]); // best way to update lists when new items rely on previous list state
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setListOfGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
          {/* flatlist is more optimal than scrollview because it only renders the visible items on the screen */}
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
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 7,
  },
});
