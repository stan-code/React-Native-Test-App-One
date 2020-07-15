import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([])
  

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
  }

    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId)
      })
    }

  return (
    <View style={{padding: 50}}>
      <GoalInput addGoal={addGoalHandler}/>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>
        <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}/>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
