import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/todo/get`);
      setTodoList(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}/delete`);

      const todoFilter = todoList.filter((todo) => todo.id !== id);
      setTodoList(todoFilter);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} />}
        />
        <Route
          path="/addTodo"
          element={<AddTodo getTodoList={getTodoList} />}
        />
        <Route
          path="/updateTodo/:id"
          element={<UpdateTodo getTodoList={getTodoList} />}
        />
      </Routes>
    </div>
  );
}

export default App;
