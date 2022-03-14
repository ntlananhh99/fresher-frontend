import React from "react";
import Todo from "./Todo.js"

const TodoList = ({todos, deleteEvent}) =>{

    return(
        <div className="overflow-hidden shadow-md sm:rounded-lg mt-5 " >
        <table className="table-fixed min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="uppercase py-5">First name</th>
              <th className="uppercase">Last name</th>
              <th className="uppercase">Email</th>
              <th className="uppercase">Phone</th>
              <th className="uppercase">City</th>
              <th className="uppercase">Country</th>
              <th colSpan="2" className="uppercase ">Action</th>
            </tr>
          </thead>
        <tbody>
          {todos.map(todo=>(
                <Todo
                  todo= {todo}
                  key={todo.id}        
                  deleteEvent={deleteEvent} 
                />
              ))   }
        </tbody>
        </table>
        </div>
    )
}
export default TodoList; 