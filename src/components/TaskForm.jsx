import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, completed: false });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
            <TextField 
                label="Nowe zadanie" 
                variant="outlined" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                style={{ marginRight: '10px' }}
            />
            <Button variant="contained" color="primary" type="submit">
                Dodaj Zadanie
            </Button>
        </form>
    );
};

export default TaskForm;
