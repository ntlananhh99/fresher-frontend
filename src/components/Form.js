import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUser } from '../utils/Api';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  //this.formState({errors: false });
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
  const onSubmit = async (data,e) => {
    let country1;
    countries.map((ctr)=>{
      if(ctr.id == data.country){
        country1 = ctr.name;
      }
    });
    /* ---new code---*/
    // Khai báo object cần truyền vào API tạo user
    // API cần những thuộc tính nào phải khai báo và truyền đúng giá trị
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      country: country1,
    };
    // gọi tới hàm lấy api đã được tạo sẵn ở folder utils
    createUser(body);
    console.log(body);
    e.target.reset();
    /* ---end new code---*/
  }

  return (
    <div className="w-full max-w-md flex mx-auto mb-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-2 w-full font-bold'>INFORMATION USER</div>
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
              placeholder="firstName"

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
              placeholder='lastName'
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
              placeholder="email"
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
              placeholder='phone'
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
              placeholder="city"
              {...register("city", { required: true })}
            >
              {cityState.map((city) => (
                (city.idCountry == countryId) ? 
                  <option value={city.name}>{city.name}</option> : null
              )   
              )}
            </select>
            {errors.city && errors.city.type === "required" && <p className="text-red-500 text-xs italic">Value required</p>}

          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-yellow-600 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
