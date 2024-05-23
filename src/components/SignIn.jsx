import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import logo from '../assets/logo.png';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        // Check if registration data exists in local storage
        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (registeredEmail && registeredPassword) {
            // Pre-fill login form with registration data
            setEmail(registeredEmail);
            setPassword(registeredPassword);
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email and password match the data stored in local storage
        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (email === registeredEmail && password === registeredPassword) {
            // Redirect to Dashboard if login is successful
            window.location.href = 'https://cryptocoinstrackers.netlify.app/';
        } else {
            // Display error message and prevent navigation
            setErrorMessage('User not found, please try again.');
        }
    };

    return (
        <div className='text-white h-[100vh] flex justify-center items-center bg-primary'>

                  <Link to="/"> {/* Add Link component to make the logo clickable */}
                    <img src={logo} alt="hoobank" className="absolute top-0 left-0 w-[60px] h-[60px] cursor-pointer" /> {/* Add cursor-pointer class */}
                    <h1 className="absolute top-3.5 left-16 transform -translate-y-1/ text-white font-poppins text-gradient text-2xl anta-regular">RYTO TRACKERS</h1>
                  </Link>

                <div className="absolute z-[3] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full blue__gradient" />
                <div className="absolute z-[3] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full blue__gradient" />

                <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
                    <h1 className="text-4xl text-white font-bold  text-center mb-6">Login</h1>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="relative my-4">
                            <input
                                type="email"
                                autoComplete="off"
                                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-yellow-600 peer no-autofill-bg"
                                placeholder="Your Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                           <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[10px] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                            <BiUser className='absolute top-4 right-4 text-slate-400' />
                        </div>
                        <div className="relative my-4">
                            <input
                                type="password"
                                autoComplete="off"
                                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-yellow-600 peer"
                                placeholder="Your Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                           <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-[10px] -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                            <AiOutlineUnlock className='absolute top-4 right-4 text-slate-400' />
                        </div>
                        {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <Link to='' className="text-gradient">Forgot Password?</Link>
                        </div>
                        <button className="button-theme-2 relative w-full mb-4 text-[18px] mt-6 rounded-full py-2 overflow-hidden font-semibold text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-80 button-gradient" type="submit">Login</button>
                        <div>
                            <span className="m-4">New Here? <Link className="text-gradient" to='/Register'>Create an Account</Link></span>
                        </div>
                    </form>
                </div>

            </div>
    );
};

export default SignIn;
