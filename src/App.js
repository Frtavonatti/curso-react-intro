import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './todoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoHeader } from './TodoHeader/TodoHeader';

const defaultToDos = [
  {text: 'Programar', completed: true},
  {text: 'Aprender a tatuar', completed: false},
  {text: 'Tocar bateria', completed: true},
  {text: 'Tocar guitarra', completed: false},
]

// CHALLENGE: desarrollar funcionalidad para mostrar elementos que se buscan en la lista de To-do´s

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(defaultToDos)
  
  const completedTodos = todos.filter((todo) => Boolean(todo.completed)).length
  const totalTodos = todos.length;
  
  // console.log(searchValue)

  const filteredTodos = defaultToDos.filter((todo) => todo.text.toLowerCase()
  .includes(searchValue.toLowerCase()))
  console.log(filteredTodos)

  return (
    <React.Fragment>
      <TodoHeader/>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
          key={todo.text}  
          text={todo.text}  
          status={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
