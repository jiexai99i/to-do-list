import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { ToDo } from './src/ToDo';
import { Navbar } from './src/Navbar';
import { useState } from 'react';
import { Todolist } from './src/Todolist';
import { FlatList } from 'react-native';


export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
   /* const newTodo = {
      id: Date.now.toString(),
      title: title
    }
    setTodos((prevTodos) =>  {
      return [
        ...prevTodos,
        newTodo
      ]
    })*/
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  return (
    <View>
      <Navbar title='To Do'/>
      <View style = {styles.container}>
        <ToDo onSubmit = {addTodo}/>
        <FlatList 
        style = {styles.flat}
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem = {({item })=>
          <Todolist todo={item}/>
        }>
          
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  flat: {
    
  }
});
