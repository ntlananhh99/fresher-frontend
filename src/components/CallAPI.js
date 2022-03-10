import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormUpdate from './FormUpdate';
const domain = "http://localhost:3000/todo"
export default function CallAPI() {
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [userId, setUserId] = useState(0);
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(domain + "/get").then((response) => {
            setPost(response.data);
        })
        .catch(err=>{
            console.log(err);
        });
    });

    //   ---------------------------------------------
    const onHandDel = async (id) => {
        axios.delete(domain + `/${id}/delete/`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onUpdate = (id) => {
        setUserId(id);
        if(id === userId){
            setIsShowUpdate(!isShowUpdate);
        }else setIsShowUpdate(true);
    }
    if (!post) return null;
    return (
        <div>
            <table class="table-fixed mx-auto w-full">
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
                    {post.map((item, key )=> (
                        <tr key={item.id}>
                            <td className='text-center'>{key+1}</td>
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
