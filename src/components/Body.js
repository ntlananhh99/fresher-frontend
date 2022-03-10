import React from 'react'
import { useState } from 'react'

const Body = () => {
  const [header, setHeader] = useState('Hello');

  const changeState = () => {
    setHeader('First');
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <h1 className="text-3xl font-bold underline">Hello {header}</h1>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50">
            Subscribe
          </button>
          <button onClick={changeState}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Body