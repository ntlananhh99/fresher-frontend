import React from "react";
import { Routes, Route, Link} from 'react-router-dom';
import AddTodoForm from "./AddTodoForm";
import EditTodoForm from "./EditTodoForm";
import TodoList from "./TodoList";


const TodoComponent = ({todos, deleteEvent, submitAddForm, submitEditForm}) =>{

    return(
        <>
            
            <div id="nav">
            <ul className="flex border-b">
            <li className="-mb-px mr-1">
              <Link to="/todocomponent/todolist" className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold">
                  Todo List
              </Link>
            </li>
            <li className="-mb-px mr-1">
              <Link to="/todocomponent/add" className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold">
                  Add todo
              </Link>
            </li>
          </ul>
            </div>
            <Routes >
              <Route path='todolist' element={<TodoList todos= {todos} deleteEvent={deleteEvent} />}></Route>
              <Route path='add' element={<AddTodoForm submitAddForm={submitAddForm}/>}></Route>
              <Route path='edit' element={<EditTodoForm submitEditForm={submitEditForm}/>}></Route>
            </Routes>

            
        </>
    )
}
export default TodoComponent;