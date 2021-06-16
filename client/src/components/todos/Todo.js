const Todo = ({id, title, complete}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{complete ? "Completed" : "Not Completed"}</p>
    </>
  )
}

export default Todo;