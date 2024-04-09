import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../todoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';


function AppUI ({
    completedTodos, 
    totalTodos,
    filteredTodos,
    deleteTodo,
    searchValue,
    setSearchValue,
    checkTodo,
}) { 
      return (
    <React.Fragment>
      <TodoHeader />

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

      <CreateTodoButton />

    </React.Fragment>
  );
}

export { AppUI }