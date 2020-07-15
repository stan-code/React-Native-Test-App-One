import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Modal} from 'react-native'


const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.addGoal(enteredGoal)
  }

  return(
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput placeholder="text"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="add"
        onPress={addGoalHandler} />
        <Button title="cancel" onPress={props.cancel}/>
    </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    width: 200,
    height: 30,
    borderColor: 'grey',
    borderWidth: 1
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})