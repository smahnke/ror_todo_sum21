import { useState, useEffect } from 'react';
import axios from "axios";
import TodoList from './component/todos/TodoList';

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
  return(
    <>
      <TodoList todos={todos} />
    </>
  )
}
export default App;
