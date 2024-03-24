import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  return (
    <div className="App">
      
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>

      <CreateTodoButton/>

    </div>
  );
}

function TodoItem () {
  return (
    <li>
        <span> ✅ </span>
        <p> 1 hora de coding </p>
        <span> ❌ </span>
    </li>

  );
}

export default App;
