import React from 'react';
import Links from './components/Links';
import ToDoList from './components/ToDoList';
import InProgressList from './components/InProgressList';
import DoneList from './components/DoneList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <Links />
      <ToDoList />
      <InProgressList />
      <DoneList />
    </div>
  );
}

export default App;
