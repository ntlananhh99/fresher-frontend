import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
const FormUpdate = ({isShow, userId}) => {
    const baseURL = `http://localhost:3000/todo/get/${userId}`;
    const [infoGet, setInfoGet] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setInfoGet(response.data);
        });
    }, [userId]);
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    //this.formState({errors: false });
    const onSubmit = async (dataUpdate) => {
        const url = `http://localhost:3000/todo/${userId}/update`;
        axios.put(url, {
            firstName: dataUpdate.firstName,
            lastName: dataUpdate.lastName,
            email: dataUpdate.email,
            phone: dataUpdate.phone,
            city: dataUpdate.city,
            country: dataUpdate.country,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={`w-full max-w-md flex mx-auto mb-8 ${!isShow ? 'hidden' : ''}`}>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <h2>Id : {userId}</h2>
                <div className="flex flex-wrap -mx-3 mb-0">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="firstName"
                            name='firstName'
                            type="text"
                            placeholder={infoGet.firstName}

                            {...register("firstName", {maxLength: 20 })}
                        />
                        {errors.firstName && errors.firstName.type === 'maxLength' && <p className="text-red-500 text-xs italic">no more than 20 characters</p>}
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="lastName"
                            name='lastName'
                            type="text"
                            placeholder={infoGet.lastName}
                            {...register("lastName", { maxLength: 20 })}
                        />
                        {errors.lastName && errors.lastName.type === 'maxLength' && <p className="text-red-500 text-xs italic">no more than 20 characters</p>}

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            name='email'
                            type="text"
                            placeholder={infoGet.email}
                            {...register("email", {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                        />
                        {errors.email && errors.email.type === 'pattern' && <p className="text-red-500 text-xs italic">Invalid email</p>}

                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="phone"
                            name='phone'
                            type="number"
                            placeholder={infoGet.phone}
                            {...register("phone", {minLength: 10, maxLength: 10 })}
                        />
                        {errors.phone && errors.phone.type === 'minLength' && <p className="text-red-500 text-xs italic">PhoneNumber is 10 characters</p>}
                        {errors.phone && errors.phone.type === 'maxLength' && <p className="text-red-500 text-xs italic">PhoneNumber is 10 characters</p>}

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-0">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="city"
                            name='city'
                            type="text"
                            placeholder={infoGet.city}
                            {...register("city")}
                        />

                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
             border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="country"
                            name='country'
                            type="text"
                            placeholder={infoGet.country}
                            {...register("country")}

                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormUpdate;