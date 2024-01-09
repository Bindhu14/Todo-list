import React from 'react';

const TodoInput = ({ addTodo, newTodo, setNewTodo, editIndex }) => {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Create a new todo"
        className="bg-slate-200 border px-3 py-2 mb-2"
      />
      <button onClick={addTodo} className="bg-green-600 text-white px-4 py-2 rounded">
        {editIndex !== null ? 'Update Task' : 'Add Tasks'}
      </button>
    </div>
  );
};

export default TodoInput;
