import React, { useState } from 'react';

const Task = ({ id, title, completed, deleteTask, toggleComplete, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        updateTask(id, editedTitle);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedTitle(title);
    };

    return (
        <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            {isEditing ? (
                <div>
                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                    <button onClick={handleSave}>Zapisz</button>
                    <button onClick={handleCancel}>Anuluj</button>
                </div>
            ) : (
                <div>
                    <h3>{title}</h3>
                    <p>Status: {completed ? 'Ukończone' : 'Nieukończone'}</p>
                    <button onClick={handleEdit}>Edytuj</button>
                    <button onClick={() => toggleComplete(id)}>Zmień Status</button>
                    <button onClick={() => deleteTask(id)}>Usuń Zadanie</button>
                </div>
            )}
        </div>
    );
};

export default Task;
