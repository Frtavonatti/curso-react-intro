import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './todoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoHeader } from './TodoHeader/TodoHeader';

const defaultToDos = [
  {text: 'Programar', completed: false},
  {text: 'Aprender a tatuar', completed: false},
  {text: 'Tocar bateria', completed: false},
  {text: 'Tocar guitarra', completed: false},
]

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(defaultToDos)
  
  //Funcion para contar la cantidad total de todos y todos completados
  const completedTodos = todos.filter((todo) => Boolean(todo.completed)).length
  const totalTodos = todos.length;

  // Funcion para filtrar por contenido (texto) en la barra de busqueda
  const filteredTodos = todos.filter(
    (todo) => todo.text.toLowerCase()
    .includes(searchValue.toLowerCase())
  )

  // Funcion para marcar todos como completados
  // PENDING: modificar completed = false al momento de desmarcar checkbox
  const checkTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
    console.log(newTodos)
  }

  // Funcion para eliminar todos
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <React.Fragment>
      <TodoHeader/>

      <TodoCounter completed={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
          key={todo.text}  
          text={todo.text}  
          status={todo.completed}
          onComplete={() => checkTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}

export default App;
