import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaUserEdit} from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
export default function Detail(props) {
    const [userList, setUserList] = useState([]);
    const [messageUser, setMessageUser] = useState("Input is required!")
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        country: ""
    })
    function submit(e) {
        e.preventDefault()
        axios.post("http://localhost:3000/todo/create", {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            city: data.city,
            country: data.country
        })
            .then(res => {
                console.log(res.data)
            })
    }

    useEffect(
        () => {
            axios.get("http://localhost:3000/todo/get")
                .then(res => setUserList(res.data))
                .catch(err => console.log(err));
        })

    function handleRemove(id) {
        console.log(id)
        axios.delete(`http://localhost:3000/todo/${id}/delete`)
            .then(res => {
                const myalldata = userList.filter((item) => item.id !== id)
                setUserList(myalldata)
            }).catch(err => console.error(err))
    }
    const refreshPage = () => {
        window.location.reload();
    }

    const handleEdit = (item) => {
        setData({
            id: item.id,
            firstName: item.firstName,
            lastName: item.lastName,
            email: item.email,
            phone: item.phone,
            city: item.city,
            country: item.country,
        });
    }

    const update = () => {
        axios.put(`http://localhost:3000/todo/${data.id}/update`, {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            city: data.city,
            country: data.country,
        })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const display = userList.map(item =>
        <tr key={item.id}>
            <td className='pr-7'>{item.firstName}</td>
            <td className='pr-7'>{item.lastName}</td>
            <td className='pr-7'>{item.email}</td>
            <td className='pr-7'>{item.phone}</td>
            <td className='pr-7'>{item.city}</td>
            <td className='pr-7'>{item.country}</td>
            <td className='pr-7'><button onClick={(e) => handleEdit(item)}><FaUserEdit className="text-orange-500"/></button>
            <button onClick={(e) => handleRemove(item.id)} className='pl-7'><AiOutlineUserDelete className="text-red-500"/></button></td>
        </tr>
    )

    return (
        <div className="container text-xl mt-5 h-screen" style={{ textAlign: "-webkit-center" }}>
            <form className="w-full max-w-lg mb-8" onSubmit={(e) => submit(e)}>
                <input hidden value={data.id} name="id" id="id"></input>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="firstName">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={(e) => handle(e)} value={data.firstName} type="text" name="firstName" id="firstName" placeholder="FirstName" />
                        <p className="text-red-500 text-xs italic"> {data.firstName === "" && messageUser}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="lastName">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handle(e)} value={data.lastName} type="text" name="firstName" id="lastName" placeholder="LastName" />
                        <p className="text-red-500 text-xs italic"> {data.lastName === "" && messageUser}</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handle(e)} value={data.email} type="text" name="email" id="email" placeholder="Email" />
                        <p className="text-red-500 text-xs italic"> {data.email === "" && messageUser}</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="city">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handle(e)} value={data.city} type="text" name="city" id="city" placeholder="City" />
                        <p className="text-red-500 text-xs italic"> {data.city === "" && messageUser}</p>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="city">
                            Country
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handle(e)} value={data.country} type="text" name="country" id="country" placeholder="Country" />
                        <p className="text-red-500 text-xs italic"> {data.country === "" && messageUser}</p>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left" htmlFor="phone">
                            Phone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" onChange={(e) => handle(e)} value={data.phone} type="text" name="phone" id="phone" placeholder="Phone" />
                        <p className="text-red-500 text-xs italic"> {data.phone === "" && messageUser}</p>
                    </div>
                </div>
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
            </form>
            <button className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-3" onClick={update}>Update</button>
            <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={refreshPage}>Refresh</button>
            <table className='table-auto mt-4'>
                <thead>
                    <tr>    
                        <th className='pr-7'>FirstName</th>
                        <th className='pr-7'>LastName</th>
                        <th className='pr-7'>Email</th>
                        <th className='pr-7'>Phone</th>
                        <th className='pr-7'>City</th>
                        <th className='pr-7'>Country</th>
                        <th className='pr-7'></th>
                    </tr>
                </thead>
                <tbody>
                    {display}
                </tbody>
            </table>
        </div>
    );
}

