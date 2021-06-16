import Todo from './Todo';

const TodoList = ({ todos }) => (
  <>
    { todos.map(t => 
        <Todo
          {...t}
        />
      )}
  </>
)

export default TodoList