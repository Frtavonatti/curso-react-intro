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
  {text: 'Tocar bateria', completed: false},
  {text: 'Tocar guitarra', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoHeader/>

      <TodoCounter completed={3} total={5} />
      <TodoSearch/>

      <TodoList>
        {defaultToDos.map(todo => (
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
