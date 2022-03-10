import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateTodo = ({ getTodoList }) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
  });
  let params = useParams();

  const navigate = useNavigate();
  const enabled =
    data.firstName.length > 0 &&
    data.lastName.length > 0 &&
    data.email.length > 0 &&
    data.phone.length > 0 &&
    data.city.length > 0 &&
    data.country.length > 0;

  useEffect(() => {
    getTodoById();
  }, []);

  const getTodoById = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/todo/get/${params.id}`,
      );
      setData(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const onSubmitUpdateTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/todo/${params.id}/update`, data);
      getTodoList();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button
        className="
               h-8 font-medium w-1/3 lg:w-1/12 lg:ml-36 mt-1 hover:bg-blue-700 cursor-pointer
              disabled:bg-gray-400 text-white bg-blue-400 rounded-md
              "
        onClick={goBack}
      >
        Go Back {params.id}
      </button>

      <div className="flex flex-col  items-center justify-center  ">
        <p className="text-blue-700 text-3xl my-6 font-bold uppercase ">
          Update Todo
        </p>
        <form className="w-full max-w-lg" onSubmit={onSubmitUpdateTodo}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Your First Name"
                value={data.firstName || ''}
                onChange={changeData}
              />

              <p className="text-red-500 text-xs italic">
                {data.firstName === '' && 'Please fill out this field.'}
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Your Last Name"
                value={data.lastName || ''}
                onChange={changeData}
              />
              <p className="text-red-500 text-xs italic">
                {data.lastName === '' && 'Please fill out this field.'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                placeholder="Email"
                value={data.email || ''}
                onChange={changeData}
              />
              <p className="text-red-500 text-xs italic">
                {data.email === '' && 'Please fill out this field.'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="city"
                type="text"
                placeholder="City"
                value={data.city || ''}
                onChange={changeData}
              />
              <p className="text-red-500 text-xs italic">
                {data.city === '' && 'Please fill out this field.'}
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="country"
                type="text"
                placeholder="Your Country"
                onChange={changeData}
                value={data.country || ''}
              />
              <p className="text-red-500 text-xs italic">
                {data.country === '' && 'Please fill out this field.'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="phone"
                type="text"
                placeholder="Your Phone Number"
                value={data.phone || ''}
                onChange={changeData}
              />
              <p className="text-red-500 text-xs italic">
                {data.phone === '' && 'Please fill out this field.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 my-6">
            <div className="w-full px-3">
              <button
                disabled={!enabled}
                type="submit"
                className="
                    w-full h-12 font-medium tracking-wider uppercase hover:bg-blue-700 cursor-pointer
                    disabled:bg-gray-400 text-white bg-blue-400 rounded-md
                    "
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodo;
