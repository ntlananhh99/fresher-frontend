import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormUpdate from './FormUpdate';
const baseURL = "http://localhost:3000/todo/get";
export default function CallAPI() {
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [userId, setUserId] = useState('');
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    });

    if (!post) return null;
    //   ---------------------------------------------
    const onHandDel = async (id) => {
        axios.delete(`http://localhost:3000/todo/${id}/delete/`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onUpdate = (id) => {
        setIsShowUpdate(true);
        setUserId(id);
    }
    return (
        <div>
            <table class="table-fixed mx-auto" style={{ "width": "950px" }}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {post.map(item => (
                        <tr key={item.id}>
                            <td className='text-center'>{item.id}</td>
                            <td className='text-center'>{item.firstName} {item.lastName}</td>
                            <td className='text-center'>{item.email}</td>
                            <td className='text-center'>{item.phone}</td>
                            <td className='text-center'>{item.city}</td>
                            <td className='text-center'>{item.country}</td>
                            <td className='text-center'>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                 onClick={id => onUpdate(item.id)}
                                >
                                    Update
                                </button>
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                    onClick={() => onHandDel(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <FormUpdate isShow={isShowUpdate} userId={userId}/>

        </div>
    )
}
