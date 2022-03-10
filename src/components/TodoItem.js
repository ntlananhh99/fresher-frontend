import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ todoItem, onDeleteTodo }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {todoItem.id}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {todoItem.firstName} {todoItem.lastName}
      </td>
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        {todoItem.email}
      </td>
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        {todoItem.phone}
      </td>
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        {todoItem.city}
      </td>
      <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
        {todoItem.country}
      </td>
      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <Link
          to={`/updateTodo/${todoItem.id}`}
          className="text-blue-600 dark:text-blue-500 hover:underline "
        >
          Edit
        </Link>
        <button
          className="w-2/4 h-8 hover:text-red-900 hover:underline font-medium ml-2 text-red-700"
          onClick={() => {
            onDeleteTodo(todoItem.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
