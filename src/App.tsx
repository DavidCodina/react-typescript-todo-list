import React    from 'react';
import TodoList from './components/TodoList';
import './App.css';


const App: React.FC = () => {
  return (
    <React.Fragment>
      <h2 className="text-white-3d py-5 text-center">ToDo List</h2>
      <TodoList />
    </React.Fragment>
  );
}


export default App;
