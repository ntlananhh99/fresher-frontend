import axios from 'axios';
import React, { useState } from 'react';

const DataTable = ({ list, setList, setOpen, setEdit }) => {

    const handleDelete = async (e, id) => {
        await axios.delete(`http://localhost:3000/todo/${id}/delete`)
            .then(res => setList(list.filter(el => el.id !== id)))
            .catch(err => console.log(err.response));
    }

    const handleOpenEdit = async (e, el) => {
        setEdit(el);
        setOpen(true);
    }

    return (
        <div className="flex justify-center min-h-screen bg-gray-100">
            <div style={{ alignSelf: "center" }} className="px-8 py-6 text-left mx-5 bg-white shadow-lg rounded-md">
                <button onClick={() => setOpen(true)} className="px-6 py-2 mb-4 text-white bg-blue-600  rounded-full hover:bg-blue-900">Add</button>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className='px-2'>Full Name</th>
                            <th className='px-2'>Email</th>
                            <th className='px-2'>Phone Number</th>
                            <th className='px-2'>Address</th>
                            <th className='px-2 text-center'>Edit</th>
                            <th className='px-2 text-center'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            list.length > 0 && list.map(el =>
                                <tr key={el.id}>
                                    <td className='px-2'>{el.firstName + " " + el.lastName}</td>
                                    <td className='px-2'>{el.email}</td>
                                    <td className='px-2'>{el.phone}</td>
                                    <td className='px-2'>{el.city + ", " + el.country}</td>
                                    <td className='px-2'>
                                        <button
                                            className="px-4 text-white bg-blue-600  rounded-full hover:bg-blue-900"
                                            onClick={e => handleOpenEdit(e, el)}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td className='px-2'>
                                        <button
                                            className="px-4 text-white bg-blue-600  rounded-full hover:bg-blue-900"
                                            onClick={e => handleDelete(e, el.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;