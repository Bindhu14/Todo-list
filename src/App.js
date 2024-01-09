import React, { useState, useEffect } from 'react';
import TodoInput from './todoinput';
import TodoList from './todolist';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, newTodo]);
      }
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-10 text-black">Simple Todo App</h1>
        <div id="todo">
          <TodoInput
            addTodo={addTodo}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            editIndex={editIndex}
          />
          <TodoList
            todos={todos}
            editIndex={editIndex}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            setNewTodo={setNewTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
