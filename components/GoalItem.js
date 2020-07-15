import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const GoalItem = props => {
  return(
    <View style={styles.listItem}>
      <Text style={{color: 'white'}}>{props.title}</Text>
    </View>
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