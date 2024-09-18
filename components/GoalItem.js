import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goals}>
      <Pressable
        android_ripple={{ color: "#1a0339" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} //for ios
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goals: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  goalText: {
    //elements do not inherit styles from parent elements in react-native
    color: "white",
    padding: 10,
  },
  pressedItem: {
    //for ios
    opacity: 0.5,
  },
});

export default GoalItem;
