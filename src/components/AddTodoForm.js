import React from "react";
import { useState, useEffect } from "react";

const AddTodoForm = ({submitAddForm}) =>{
    let initialValues = { firstName: "", lastName: "", email: "", phone: "", city: "", country: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            submitAddForm(formValues);
            setFormValues(initialValues);
        }
      }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
        if (!values.firstName) {
            errors.firstName = "First name is required!";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regexEmail.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required!";
        } else if (!regexPhone.test(values.phone)) {
            errors.phone = "This is not a valid phone number!";
        }
        if (!values.city) {
            errors.city = "City is required!";
        }
        if (!values.country) {
            errors.country = "Country is required!";
        }
        return errors;
      };

    const closeAlert = () =>{
        let alert_del = document.querySelectorAll('.alert-del');
        alert_del.forEach((x) =>
            x.parentElement.classList.add('hidden'))
    }
    return(
    <div className="">
            <div  className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                {Object.keys(formErrors).length === 0 && isSubmit ? (

                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Successful!</strong>
                    <span className="block sm:inline"> New to do is created.</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3 alert-del" onClick={closeAlert}>
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                    </div>

                    ) : (
                    <pre></pre>
                    )}

                    <div  className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={handleSubmit}>
                        <h6  className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Todo Information
                        </h6>
                        <div  className="flex flex-wrap">

                            <div  className="w-full lg:w-6/12 px-4">
                                <div  className="relative w-full mb-3">
                                <label  className="block text-gray-500 text-s mb-2"  >
                                    First Name
                                </label>
                                <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                        value={formValues.firstName} name="firstName" onChange={handleChange}/>
                                </div>
                                <span  className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1">
                                    {formErrors.firstName}
                                </span>
                            </div>


                            <div  className="w-full lg:w-6/12 px-4">
                                <div  className="relative w-full mb-3">
                                <label  className="block text-gray-500 text-s mb-2"  >
                                    Last Name
                                </label>
                                <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                        value={formValues.lastName} name="lastName" onChange={handleChange}/>
                                </div>
                                <span  className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-1.5">
                                    {formErrors.lastName}
                                </span>
                            </div>


                        </div>

                        <hr className="mt-1 border-b-1 border-blueGray-300"/>

                        <h6  className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                        Contact Information
                        </h6>
                        <div  className="flex flex-wrap">
                            <div  className="w-full lg:w-6/12 px-4">
                                <div  className="relative w-full mb-3">
                                <label  className="block text-gray-500 text-s mb-2"  >
                                    Email address
                                </label>
                                <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                            value={formValues.email }name="email" onChange={handleChange}/>
                                </div>
                                <span  className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-1.5">
                                    {formErrors.email}
		                        </span>
                            </div>


                            <div  className="w-full lg:w-6/12 px-4">
                                <div  className="relative w-full mb-3">
                                <label  className="block text-gray-500 text-s mb-2"  >
                                    Phone number
                                </label>
                                <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={formValues.phone} name="phone" onChange={handleChange}/>
                                </div>
                                <span  className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-1.5">
                                    {formErrors.phone}
		                        </span>
                            </div>


                            <div  className="w-full lg:w-6/12 px-4">
                                <div  className="relative w-full mb-3">
                                <label  className="block text-gray-500 text-s mb-2"  >
                                    City
                                </label>
                                <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                        value={formValues.city} name="city" onChange={handleChange}/>
                                </div>
                                <span  className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-1.5">
                                    {formErrors.city}
		                        </span>
                            </div>


                            <div  className="w-full lg:w-4/12 px-4">
                                <div  className="relative w-full mb-3">
                                <label  className="block text-gray-500 text-s mb-2"  >
                                    Country
                                </label>
                                <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        value={formValues.country} name="country" onChange={handleChange}/>
                                </div>
                                <span  className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-0.5 ml-1 mb-1.5">
                                    {formErrors.country}
		                        </span>
                            </div>


                        </div>
                        <div  className="md:flex md:items-center">
                            <div  className="md:w-1/3">
                            <button type="submit" className="shadow bg-blue-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" >
                                Add
                            </button>
                            </div>
                            <div  className="md:w-2/3"></div>
                        </div>
                    </form>



                    </div>
                </div>

            </div>
    </div>
    )
}
export default AddTodoForm;