import React from 'react'
import Form from './Form'
import CallAPI from './CallAPI'
import styledComponents from 'styled-components';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from './Header';

const Title = styledComponents.h1`
  font-size:2.5em;
  text-align: center;
  color: #483D8B;
  text-transform: uppercase;
  font-weight: bold;
`;
export default function Home() {
    return (
        <BrowserRouter>
            <Header />
            <Title>Reactjs  project</Title>
            <div className='container max-w-max mx-auto'>
                <Routes>
                <Route path="/" element={<CallAPI />} />
                <Route path="/createuser" element={<Form />} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}
