import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddForm from './AddForm';
import DataTable from './DataTable';

const TodoForm = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            await axios.get("http://localhost:4000/todo/get")
                .then(res => setList(res.data))
                .catch(err => console.log(err.statusText));
        }
        fetchAPI();
    }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <AddForm list={list} setList={setList} />
            <DataTable list={list} setList={setList} />
        </div>
    );
};

export default TodoForm;