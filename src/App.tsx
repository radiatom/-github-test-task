import React from 'react';
import ToDoList from './components/ToDoList';
import InProgressList from './components/InProgressList';
import DoneList from './components/DoneList';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <ToDoList />
      <InProgressList />
      <DoneList />
    </div>
  );
}

export default App;
