
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos, editIndex, deleteTodo, editTodo, setNewTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500 mt-4">No tasks found</p>
      ) : (
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-disc ml-4 flex items-center border rounded p-2 mb-2 bg-slate-200"
            >
              {editIndex === index ? (
                <input
                  type="text"
                  value={todo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  className="bg-slate-300 border border-gray-400 px-3 py-2 mr-2"
                />
              ) : (
                <span className="flex-grow">{todo}</span>
              )}
              <button
                onClick={() => editTodo(index)}
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded btn"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded btn"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
