import React, { useState } from 'react';
import './App.css';
import TaskCreator from './components/TaskCreator/TaskCreator';
import TaskList from './components/TaskList/TaskList';
import { Task } from './types/task.model';

function App() {
  const [word, sendTask] = useState<Task[]>([]);

  const printTaskParent = (text: string) => {
    const newTask = {
      id: word.length,
      contain: text,
      checked: false,
    };
    sendTask([...word, newTask]);
    console.log(word);
  };
  return (
    <main className="main-container">
      <h1>Todo Input</h1>
      <TaskCreator printTaskChild={printTaskParent} />
      <TaskList recieveTasks={word} />
    </main>
  );
}

export default App;
