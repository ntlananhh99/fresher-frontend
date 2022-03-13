import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateUser, getUser } from '../utils/Api';
const FormUpdate = ({ isShow, userId }) => {
    const [infoGet, setInfoGet] = useState([]);
    useEffect(() => {
        getUser(userId).then((response) => {
            setInfoGet(response.data);
        });
    }, [userId]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    //this.formState({errors: false });
    const onSubmit = async (dataUpdate, e) => {
        let country1;
    countries.map((ctr)=>{
      if(ctr.id == dataUpdate.country){
        country1 = ctr.name;
      }
    });
        const body = {
            firstName: dataUpdate.firstName,
            lastName: dataUpdate.lastName,
            email: dataUpdate.email,
            phone: dataUpdate.phone,
            city: dataUpdate.city,
            country: country1,
        };
        try {
            updateUser(body, userId);
            e.target.reset();
        } catch (error) {
            alert("Có lỗi khi cập nhật user!");
        }
    }

    const countries = [
        {
        id: 1,
        name: 'Vietnam'
      },
      {
        id: 2,
        name: 'Compodia'
      },
      {
        id: 3,
        name: 'Germany'
      },
      {
        id: 4,
        name: 'China'
      },
      {
        id: 5,
        name: 'Japan'
      }
    ];
    
    const cities = [
      {
      id: 1,
      idCountry: 1,
      name: 'Can Tho'
      },
      {
        id: 2,
        idCountry: 1,
        name: 'Ha Noi'
      },
      {
        id: 3,
        idCountry: 1,
        name: 'Ho Chi Minh city'
      },
      {
        id: 4,
        idCountry: 1,
        name: 'Hue'
      },
      {
        id: 5,
        idCountry: 1,
        name: 'Da Nang'
      },
      {
        id: 6,
        idCountry: 4,
        name: 'Bắc Kinh'
      },
      {
        id: 7,
        idCountry: 4,
        name: 'Thượng Hải'
      },
      {
        id: 8,
        idCountry: 4,
        name: 'Trùng Khánh'
      },
    ];
    // create state get country selected
    const [countryId, setCountryId] = useState(1);
    const [cityState, setCityState] = useState(cities);
    const changeCountryId = (id) => {
    setCountryId(id);
    setCityState(cities);
    console.log(countryId);
    console.log(cityState);
    };

    return (

        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="modalUpdateUser" tabIndex={-1} aria-labelledby="modalUpdateUser"
            aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
                            Update User
                        </h5>
                        <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body relative p-4">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-2 w-full font-bold'>UPDATE USER</div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="firstName"
                                        name='firstName'
                                        type="text"
                                        placeholder={infoGet.firstName}

                                        {...register("firstName", { required: true, maxLength: 20 })}
                                    />
                                    {errors.firstName && errors.firstName.type === "required" && <p className="text-red-500 text-xs italic">value required</p>}
                                    {errors.firstName && errors.firstName.type === 'maxLength' && <p className="text-red-500 text-xs italic">no more than 20 characters</p>}
                                    <p className="text-red-500 text-xs italic"></p>
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="lastName"
                                        name='lastName'
                                        type="text"
                                        placeholder={infoGet.lastName}
                                        {...register("lastName", { required: true, maxLength: 20 })}
                                    />
                                    {errors.lastName && errors.lastName.type === "required" && <p className="text-red-500 text-xs italic">value required</p>}
                                    {errors.lastName && errors.lastName.type === 'maxLength' && <p className="text-red-500 text-xs italic">no more than 20 characters</p>}

                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Email
                                    </label>
                                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="email"
                                        name='email'
                                        placeholder={infoGet.email}
                                        {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                    />
                                    {errors.email && errors.email.type === 'required' && <p className="text-red-500 text-xs italic">Value required</p>}
                                    {errors.email && errors.email.type === 'pattern' && <p className="text-red-500 text-xs italic">Invalid email</p>}
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="phone"
                                        name='phone'
                                        type="phone"
                                        placeholder={infoGet.phone}
                                        {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
                                    />
                                    {errors.phone && errors.phone.type === "required" && <p className="text-red-500 text-xs italic">Value required</p>}
                                    {errors.phone && errors.phone.type === 'minLength' && <p className="text-red-500 text-xs italic">PhoneNumber is 10 characters</p>}
                                    {errors.phone && errors.phone.type === 'maxLength' && <p className="text-red-500 text-xs italic">PhoneNumber is 10 characters</p>}

                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="country">
                                        Country
                                    </label>
                                    <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
                                            border border-solid border-gray-300 rounded transition ease-in-out m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="country"
                                        name='country'
                                        type="text"
                                        placeholder={infoGet.country}
                                        onClick={e => changeCountryId(e.target.value)}
                                        {...register("country", { required: true })}
                                    >
                                        {countries.map((country) => (
                                            <option value={country.id}>{country.name}</option>
                                        ))}
                                    </select>
                                    {errors.country && errors.country.type === "required" && <p className="text-red-500 text-xs italic">Value required</p>}
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                                        City
                                    </label>
                                    <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="city"
                                        name='city'
                                        type="text"
                                        placeholder={infoGet.city}
                                        {...register("city", { required: true })}
                                    >
                                        {cityState.map((city) => (
                                            (city.idCountry == countryId) ? 
                                            <option value={city.name}>{city.name}</option> : null
                                        ))} 
                                    </select>
                                    {errors.city && errors.city.type === "required" && <p className="text-red-500 text-xs italic">Value required</p>}

                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                            <button type="button" className="inline-block px-6 py-2 border-2 border-neutral-800 text-neutral-800 font-medium text-xs 
                    leading-tight uppercase rounded hover:bg-neutral-800 hover:text-white focus:outline-none focus:ring-0 transition 
                    duration-150 ease-in-out mr-4" data-bs-dismiss="modal">
                                  Cancel
                                </button>
                                <button
                                    className="inline-block px-6 py-2 border-2 border-yellow-700 text-yellow-700 font-medium 
                        text-xs leading-tight uppercase rounded hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-0 
                        transition duration-150 ease-in-out"
                                    type="submit">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default FormUpdate;