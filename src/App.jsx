import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:taskId" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
