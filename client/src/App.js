import { useState, useEffect } from 'react';
import axios from "axios";
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
const App = ({}) => {
  const [todos, setTodos] = useState([])
  useEffect( () => {
    // grab the todos from the backend
    axios.get("/api/todos")
      .then( res => {
        // set them to the front end
        setTodos(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])
  addTodo = (todo) => {
    // { todo: { title: "adfaf", complete: false }}
    // { incommingTodo: { title: "adfaf", complete: false }}
    // add the item to the back end 
    axios.post("/api/todos", { todo } )
      .then( res => {
        // add the item to the state in the frontend
        setTodos([...todos, res.data])
      })
      .catch( err => {
        console.log(err)
      })
  }
  updateTodo = (id, todo) => {
    // update the todo in the BE
    axios.put(`/api/todos/${id}`, { todo } )
      .then( res => {
        // update the todo in the FE
        const updatedTodos = todos.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTodos(updatedTodos)
      })
      .catch( err => {
        console.log(err)
      })
  }
  deleteTodo = (id) => {
    // delete in the be
    axios.delete(`/api/todos/${id}`)
      .then( res => {
        alert(res.message)
        // delete in the fe
        setTodos(todos.filter( t => t.id !== id))
      })
      .catch( err => {
        console.log(err)
      })
  }
  return(
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}
export default App;
