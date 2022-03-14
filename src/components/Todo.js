import React from "react";
import { Link} from 'react-router-dom';


const Todo = ({todo, deleteEvent}) =>{

    return(
        <>
            <tr className="bg-white border-b ">
                <td className="py-4 px-6 whitespace-nowrap">{todo.firstName}</td>
                 <td className="py-4 px-6 whitespace-nowrap">{todo.lastName}</td>
                 <td className="py-4 px-6 whitespace-nowrap">{todo.email}</td>
                 <td className="py-4 px-6 whitespace-nowrap">{todo.phone}</td>
                 <td className="py-4 px-6 whitespace-nowrap">{todo.city}</td>
                 <td className="py-4 px-6 whitespace-nowrap">{todo.country}</td>
                 <td className="py-2 px-4 whitespace-nowrap">
                        <Link to={`/todocomponent/edit`} state={todo}>
                            <button><i className="fa-solid fa-pen-to-square text-blue-600"></i></button>
                        </Link>
                 </td>
                 <td className="py-2 px-4 whitespace-nowrap">  
                    <button onClick={() =>{deleteEvent(todo.id)}}>
                        <i className="fa-solid fa-trash-can text-red-600"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}
export default Todo;