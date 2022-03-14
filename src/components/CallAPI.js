import React, { useState, useEffect } from 'react';
import FormUpdate from './FormUpdate';
import { getAllUser } from '../utils/Api';
import DeletePopup from './DeletePopup';
import styled from "styled-components";

export default function CallAPI() {
  const [userId, setUserId] = useState(0);
  const [post, setPost] = useState([]);
  useEffect(() => {
    getAllUser()
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onUpdate = (id) => {
    setUserId(id);
  };
  if (!post) return null;
  const Button = styled.button`
    color: ${props => props.typebutton==="edit" ? "#D2691E" : "#8B0000"};
    border: 2px solid ${props => props.typebutton==="edit" ? "#D2691E" : "#8B0000"};
    background-color: white;
    font-size: ${(props) => (props.size === "small" ? "14px" : "16px")};
    margin-right:  ${props => props.typebutton==="edit" ? "4px" : ""};
    line-height: 1rem;
    padding: 8px 24px;
    border-radius: 4px;
    font-weight: 500;
    transition: width 0.5s ease-in-out;
    // &:hover {
    //   background-color: ${props => props.typebutton==="edit" ? "#D2691E" : "#8B0000"};
    //   color: white;
    // }
`;
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800">
                  <tr>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                      STT
                    </th>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                      Name
                    </th>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                      Email
                    </th>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                      Phone
                    </th>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                      City
                    </th>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                      Country
                    </th>
                    <th scope="col"
                      className="text-sm font-medium text-white px-6 py-4">
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {post.map((item, key) => (
                    <tr className="bg-white border-b" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {key + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.firstName} {item.lastName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.phone}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.city}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.country}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Button type="button" typebutton="edit" size="small"
                        data-bs-toggle="modal" data-bs-target="#modalUpdateUser"
                        onClick={(id) => onUpdate(item.id)}
                        >Edit</Button>
                        <button type="button" class="inline-block px-6 py-2 border-2 border-yellow-700 text-yellow-700 font-medium 
                    text-xs leading-tight uppercase rounded hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-0 
                    transition duration-150 ease-in-out mr-4" data-bs-toggle="modal" data-bs-target="#modalUpdateUser"
                          onClick={(id) => onUpdate(item.id)}>Edit</button>
                        <button type="button" class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs 
                    leading-tight uppercase rounded hover:bg-red-700 hover:text-white focus:outline-none focus:ring-0 transition 
                    duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#modalDeleteUser"
                        >Delete</button>
                        <DeletePopup id={item.id} dataTarget="modalDeleteUser" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <FormUpdate userId={userId} />
    </div>
  );
}
