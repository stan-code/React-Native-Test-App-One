import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'


const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput placeholder="text"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="add"
        onPress={props.addGoal.bind(this, enteredGoal)} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    width: 200,
    borderColor: 'grey',
    borderWidth: 1
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
})