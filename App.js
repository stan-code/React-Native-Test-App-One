import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([])

  const [isAddMode, setIsAddMode] = useState(false)
  

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== goalId)
      })
    }

    const cancelGoalAddHandler = () => {
      setIsAddMode(false)
    }

  return (
    <View style={{padding: 50}}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoal={addGoalHandler} cancel={cancelGoalAddHandler}/>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>
        <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}/>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
