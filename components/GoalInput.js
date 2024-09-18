import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [textInputValue, setTextInputValue] = useState("");

  function addGoalHandler() {
    props.onAddGoal(textInputValue);
    setTextInputValue("");
  }

  function goalInputHandler(enteredText) {
    setTextInputValue(enteredText);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your Goals"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={textInputValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goals"
              onPress={addGoalHandler}
              color={"#5e0acc"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    color: "#120438",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
export default GoalInput;
