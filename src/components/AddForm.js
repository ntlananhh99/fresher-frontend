import axios from 'axios';
import React, { useState } from 'react';

const AddForm = ({ list, setList }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [firstNameMessage, setFirstNameMessage] = useState("");
    const [lastNameMessage, setLastNameMessage] = useState("");
    const [cityMessage, setCityMessage] = useState("");
    const [countryMessage, setCountryMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [phoneMessage, setPhoneMessage] = useState("");

    const handleChangeField = (e, setFunc, setMessage) => {
        e.target.value === ""
            ? setMessage("Vui lòng nhập trường này!")
            : setMessage("")
        setFunc(e.target.value);
    }

    const submitForm = async () => {
        await axios.post('http://localhost:4000/todo/create',
            { firstName, lastName, city, country, email, phone }
        ).then(res => setList([...list, res.data]))
            .catch(err => console.log(err.statusText));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    }

    return (
        <div className="px-8 py-6 mt-4 text-left mx-5 bg-white shadow-lg rounded-md">
            <h3 className="text-2xl font-bold text-center">Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <label className="block" htmlFor="email">First Name</label>
                            <input
                                type="text"
                                placeholder="Binh"
                                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={firstName}
                                onChange={e => handleChangeField(e, setFirstName, setFirstNameMessage)}
                            />
                            {firstNameMessage &&
                                <p className='text-sm text-red-600'>{firstNameMessage}</p>
                            }
                        </div>
                        <div>
                            <label className="block" htmlFor="email">Last Name</label>
                            <input
                                type="text"
                                placeholder="Thai"
                                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={lastName}
                                onChange={e => handleChangeField(e, setLastName, setLastNameMessage)}
                            />
                            {lastNameMessage &&
                                <p className='text-sm text-red-600'>{lastNameMessage}</p>
                            }
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='mt-4'>
                            <label className="block" htmlFor="email">City</label>
                            <input
                                type="text"
                                placeholder="Ho Chi Minh"
                                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={city}
                                onChange={e => handleChangeField(e, setCity, setCityMessage)}
                            />
                            {cityMessage &&
                                <p className='text-sm text-red-600'>{cityMessage}</p>
                            }
                        </div>
                        <div className='mt-4'>
                            <label className="block" htmlFor="email">Country</label>
                            <input
                                type="text"
                                placeholder="Viet Nam"
                                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={country}
                                onChange={e => handleChangeField(e, setCountry, setCountryMessage)}
                            />
                            {countryMessage &&
                                <p className='text-sm text-red-600'>{countryMessage}</p>
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block">Phone Number</label>
                        <input
                            type="number"
                            placeholder="0987654321"
                            className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={phone}
                            onChange={e => handleChangeField(e, setPhone, setPhoneMessage)}
                        />
                        {phoneMessage &&
                            <p className='text-sm text-red-600'>{phoneMessage}</p>
                        }
                    </div>
                    <div className="mt-4">
                        <label className="block">Email</label>
                        <input
                            type="text"
                            placeholder="abc@gmail.com"
                            className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:ring-blue-600"
                            value={email}
                            onChange={e => handleChangeField(e, setEmail, setFirstNameMessage)}
                        />
                        {emailMessage &&
                            <p className='text-sm text-red-600'>{emailMessage}</p>
                        }
                    </div>
                    <div className="flex items-baseline justify-center">
                        {(email)
                            ?
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600  rounded-full hover:bg-blue-900" >
                                Add
                            </button>
                            :
                            <button disabled className="px-6 py-2 mt-4 text-white bg-blue-500  rounded-full opacity-50 cursor-not-allowed">
                                Add
                            </button>
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddForm;