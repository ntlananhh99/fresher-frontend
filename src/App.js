import axios from "axios";
import React from "react";
import Header from "./components/Header";
import StyledComponent from "./components/StyledComponent";
import TodoComponent from "./components/TodoComponent";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const api = axios.create({
  contentType:'application/json',
  baseURL: "http://localhost:3000/todo" 
});

function App() {
  const [todos, setTodos] = useState([]);;

  useEffect(() => {
     const getalltodo= async () => {
     await api.get("/get")
      .then(response=> setTodos(response.data))
      .catch (err => console.log(err.statusText));
    }
    getalltodo();
  }, []);

  const deleteTodo= async (id) => {
    await api.delete(`${id}/delete/`)
    const newTodos= todos.filter((item)=>{
      return item.id !== id
    })
    setTodos(newTodos)
    console.log("Todo deleted" + id)
  }

  const createNewTodo= async (data) => {
    console.log(data)
    // data= JSON.stringify(data)
    await api.post("/create", data)
      .then(response => setTodos([...todos, response.data]))
      .catch (err => console.log(err.statusText));

  }

  const editTodo = async (todo) => {
    const id = todo.id
    const payload= {
      firstName: todo.firstName,
      lastName: todo.lastName,
      email: todo.email,
      phone: todo.phone,
      city: todo.city,
      country: todo.country
    }
    await api.put(`${id}/update/`, payload)
    .then (response => console(response.Data))
    .catch (err => console.log(err.statusText));
     const newTodos= todos.map((item)=>{
        return item.id === id ? { ...todo } : item;
     })
    setTodos(newTodos);
  };


  return (
  <div>
    
    <div className="px-20">
    <Router >
        <Header/>
          <Routes >
            

            <Route exact path='/todocomponent/*' element={
                  <TodoComponent todos= {todos} deleteEvent={deleteTodo} submitAddForm={createNewTodo} submitEditForm={editTodo} />}>
                  
            </Route>

            <Route exact path='/styledcomponent' element={
                  <StyledComponent />}>
            </Route>
            
            
          </Routes>

     </Router>
    </div>
    

  </div>
);
}

export default App;