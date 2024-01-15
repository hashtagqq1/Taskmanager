import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const updateTask = (taskId, newTitle) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, title: newTitle } : task
        ));
    };

    return (
        <div>
            <TaskForm addTask={addTask} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {tasks.map(task => (
                    <Task 
                        key={task.id} 
                        {...task} 
                        deleteTask={deleteTask} 
                        toggleComplete={toggleComplete}
                        updateTask={updateTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;
