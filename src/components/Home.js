import React from 'react'
import Form from './Form'
import CallAPI from './CallAPI'
export default function Home() {
    return (
        <div className='max-w-4xl bg-blue-500 mx-auto'>
            <ul className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                role="tablist">
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-home"
                        className=" nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent 
                    px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                        id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                        aria-selected="true">Home</a>
                </li>
                <li className="nav-item flex-grow text-center" role="presentation">
                    <a href="#tabs-profile" className="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent
                    px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                        id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                        aria-controls="tabs-profile" aria-selected="false">Profile</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                    <Form />
                </div>
                <div className="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                    <CallAPI />
                </div>
            </div>
        </div>
    )
}
