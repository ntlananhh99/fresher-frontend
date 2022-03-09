import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddForm from './AddForm';
import DataTable from './DataTable';

const TodoForm = () => {
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            await axios.get("http://localhost:3000/todo/get")
                .then(res => setList(res.data))
                .catch(err => console.log(err.statusText));
        }
        fetchAPI();
    }, [])

    return (
        <>
            <AddForm
                list={list}
                setList={setList}
                open={open}
                setOpen={setOpen}
                edit={edit}
                setEdit={setEdit}
            />
            <DataTable
                setOpen={setOpen}
                list={list}
                setList={setList}
                setEdit={setEdit}
            />
        </>
    );
};

export default TodoForm;