import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddForm = ({ list, setList, open, setOpen, edit, setEdit }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const requireMessage = "Vui lòng nhập trường này!"

    const handleChangeField = (e, setFunc) => {
        const { value } = e.target;
        setFunc(value)
    }

    const handleCancel = (e) => {
        setOpen(false);
        setFirstName("")
        setLastName("")
        setCity("")
        setCountry("")
        setEmail("")
        setPhone("")
        setEdit(null)
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/todo/${edit.id}/update`,
            { firstName, lastName, city, country, email, phone }
        )
            .then(res => {
                const newList = list.map((el, index) => {
                    return el.id === edit.id
                        ? ({ ...el, firstName, lastName, city, country, email, phone })
                        : el
                }
                )
                setList(newList);
                setOpen(false);
            })
            .catch(err => console.log(err.response));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/todo/create',
            { firstName, lastName, city, country, email, phone }
        )
            .then(res => {
                setList([...list, res.data])
                setOpen(false)
            })
            .catch(err => console.log(err.response));
    }


    useEffect(() => {
        if (edit) {
            setFirstName(edit.firstName);
            setLastName(edit.lastName)
            setCity(edit.city)
            setCountry(edit.country)
            setEmail(edit.email)
            setPhone(edit.phone)
        }
    }, [edit])

    return (
        <>
            {
                open &&
                <div className="w-full absolute flex justify-center min-h-screen bg-gray-100">
                    <div style={{ alignSelf: "center" }} className="px-8 py-6 text-left bg-white shadow-lg rounded-md">
                        <h3 className="text-2xl font-bold text-center">Form</h3>
                        <form>
                            <div className="mt-4">
                                <div className='grid grid-cols-2 gap-6'>
                                    <div>
                                        <label className="block" htmlFor="email">First Name</label>
                                        <input
                                            name="firstName"
                                            type="text"
                                            placeholder="Binh"
                                            className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            value={firstName}
                                            onChange={e => handleChangeField(e, setFirstName)}
                                        />
                                        {firstName === "" &&
                                            <p className='text-sm text-red-600'>{requireMessage}</p>
                                        }
                                    </div>
                                    <div>
                                        <label className="block" htmlFor="email">Last Name</label>
                                        <input
                                            name="lastName"
                                            type="text"
                                            placeholder="Thai"
                                            className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            value={lastName}
                                            onChange={e => handleChangeField(e, setLastName)}
                                        />
                                        {lastName === "" &&
                                            <p className='text-sm text-red-600'>{requireMessage}</p>
                                        }
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-6'>
                                    <div className='mt-4'>
                                        <label className="block" htmlFor="email">City</label>
                                        <input
                                            name="city"
                                            type="text"
                                            placeholder="Ho Chi Minh"
                                            className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            value={city}
                                            onChange={e => handleChangeField(e, setCity)}
                                        />
                                        {city === "" &&
                                            <p className='text-sm text-red-600'>{requireMessage}</p>
                                        }
                                    </div>
                                    <div className='mt-4'>
                                        <label className="block" htmlFor="email">Country</label>
                                        <input
                                            name="country"
                                            type="text"
                                            placeholder="Viet Nam"
                                            className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            value={country}
                                            onChange={e => handleChangeField(e, setCountry)}
                                        />
                                        {country === "" &&
                                            <p className='text-sm text-red-600'>{requireMessage}</p>
                                        }
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="number"
                                        placeholder="0987654321"
                                        className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        value={phone}
                                        onChange={e => handleChangeField(e, setPhone)}
                                    />
                                    {phone === "" &&
                                        <p className='text-sm text-red-600'>{requireMessage}</p>
                                    }
                                </div>
                                <div className="mt-4">
                                    <label className="block">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        placeholder="abc@gmail.com"
                                        className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        value={email}
                                        onChange={e => handleChangeField(e, setEmail)}
                                    />
                                    {email === "" &&
                                        <p className='text-sm text-red-600'>{requireMessage}</p>
                                    }
                                </div>
                                <div className="flex items-baseline justify-center">
                                    {
                                        !edit
                                            ?
                                            (email && firstName && lastName && city && country && email && phone)
                                                ?
                                                <button
                                                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-900"
                                                    onClick={handleSubmit}
                                                >
                                                    Add
                                                </button>
                                                :
                                                <button disabled className="px-6 py-2 mt-4 text-white bg-blue-500  rounded-full opacity-50 cursor-not-allowed">
                                                    Add
                                                </button>
                                            :
                                            (email && firstName && lastName && city && country && email && phone)
                                                ?
                                                <button
                                                    className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-full hover:bg-blue-900"
                                                    onClick={handleEdit}
                                                >
                                                    Save
                                                </button>
                                                :
                                                <button disabled className="px-6 py-2 mt-4 text-white bg-blue-500  rounded-full opacity-50 cursor-not-allowed">
                                                    Save
                                                </button>
                                    }
                                    <button onClick={handleCancel} className="px-6 py-2 mt-4 ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded-full" >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </>
    );
};

export default AddForm;