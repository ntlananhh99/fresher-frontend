import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = ({ list, setList }) => {

    return (
        <div className="px-8 py-6 mt-4 text-left mx-5 bg-white shadow-lg rounded-md">
            <table class="table-auto">
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
                                <td className='px-2'><button className="px-6 text-white bg-blue-600  rounded-full hover:bg-blue-900">Edit</button></td>
                                <td className='px-2'><button className="px-6 text-white bg-blue-600  rounded-full hover:bg-blue-900">Delete</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default DataTable;