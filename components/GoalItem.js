import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback} from 'react-native'

const GoalItem = props => {
  return(
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem}>
      <Text style={{color: 'white'}}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: 'black',
    margin: 5
  }
})