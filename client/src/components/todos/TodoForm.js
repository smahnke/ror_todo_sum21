import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: "", complete: false })
  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todo)
    setTodo({ title: "", complete: false })
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="checkbox"
        name="complete"
        defaultChecked={todo.value}
        onChange={(e) => setTodo({ ...todo, complete: e.target.checked })}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default TodoForm;