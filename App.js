import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [textInputValue, setTextInputValue] = useState('')
  const[listOfGoals, setListOfGoals] = useState([])

  function goalInputHandler (enteredText){
    setTextInputValue(enteredText)
  }

  const addGoalHandler = ()=>{
    setListOfGoals(currentCourseGoals  => [...currentCourseGoals, textInputValue])
    setTextInputValue('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Your Goals' 
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={textInputValue}
        />
        <Button title='Add Goals' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {
          listOfGoals.map((goal, key)=><Text style={styles.goals} key={key}>{goal}</Text>)
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  }, 
  inputContainer:{
    flex:1,
    flexDirection:  'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth:1,
    borderBottomColor: '#cccccc'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer:{
    flex: 7
  },
  goals:{
    padding:10,
    margin:8,
    backgroundColor:'#5e0acc',
    borderRadius:6,
    color:'white'
  }
});
