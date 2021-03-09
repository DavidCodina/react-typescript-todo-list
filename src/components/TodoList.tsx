import React, { useState } from 'react';
import { Todo }            from '../interfaces';
import Todos               from './Todos';


const TodoList: React.FC = () => {
  const [todo,  setTodo]  = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }


  const addTodo = () => {
    if (todo.trim() !== ''){
      setTodos(currentTodos => [ { todo: todo, completed: false }, ...currentTodos ]);
      setTodo('');
    }
  };


  const removeTodo = (index:number):void => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  const updateTodo = (index:number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea     = e.target;
    const newTodos     = [...todos];
    const todoCopy     = { ...todos[index] };
    todoCopy.todo      = textarea.value;
    newTodos[index]    = todoCopy;
    setTodos(newTodos);
  };


  const toggleCompleted = (index:number) => {
    const newTodos     = [...todos];
    const todoCopy     = { ...todos[index] };
    todoCopy.completed = !todoCopy.completed;
    newTodos[index]    = todoCopy;
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
      <div className="input-group mx-auto mb-5" style={{maxWidth: 500}}>
        <input
          className="form-control"
          type="text"
          autoComplete="off"
          value={todo}
          onChange={handleChange}
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={addTodo}
        >Add Todo</button>
      </div>

      <Todos
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
        updateTodo={updateTodo}
        />
    </React.Fragment>
  );
}


export default TodoList;
