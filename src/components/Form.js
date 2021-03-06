import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [messagePassword, setMessagePassword] = useState("Please choose a password.")
    const [messageUsername, setMessageUsername] = useState("Please input your username")

    const changeUsername = (event) => {
        console.log(event.target.value);
        setUsername(event.target.value);
    }

    const changePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }

  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={changeUsername}
          />
          <p class="text-red-500 text-xs italic" style={{color: "red"}}>
              {username === "" &&
                messageUsername
              }
            </p>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={changePassword}
          />
          <p class="text-red-500 text-xs italic" style={{color: "red"}}>
          {password === "" &&
                messagePassword
              }
              </p>
        </div>
        <div class="flex items-center justify-between">
            {password !== "" && username !== "" &&
                <button
                    class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    disabled={true} >
                    Sign In
                </button>
            }
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};
export default Form;
