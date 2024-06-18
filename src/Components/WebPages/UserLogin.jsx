import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import instance from '../../utils/Axios';
import Cookies from 'js-cookie';


const UserLogin = () => {

    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setFormData({
            email: '',
            password: '',
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError('Email and password are required');
        } else {
            try {
                const response = await instance.post('/users/logIn', {
                    email: formData.email,
                    password: formData.password,
                });

                if (response.data.success) {
                    console.log('User data:', response.data.data.user);
                    // Use the user data and access token as needed
                } else {
                    console.error('Error submitting form data');

                }



                
            } catch (error) {
                console.error('Error submitting form data:', error.response.data.message);
            }
            resetForm();
        }
    };

    return (
        <div className="flex flex-col justify-center items-center py-44">
            <h6 className="text-black text-2xl py-1 font-semibold uppercase">Login</h6>
            <h6 className="text-black text-xs font-medium uppercase">Please enter your information to LogIn</h6>
            <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    className="border w-60 h-8 md:h-10 md:w-96 mt-5 border-black rounded-md text-xs px-4 focus:outline-none"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    className="border w-60 h-8 md:h-10 md:w-96 mt-5 border-black rounded-md text-xs px-4 focus:outline-none"
                    placeholder="Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                />
                {error && (
                    <p className="text-red-500 text-xs mt-2">{error}</p>
                )}
                <button type="submit" className="bg-black mt-10 text-white w-60 h-8 md:h-10 md:w-96 text-xs rounded-md">
                    LogIn
                </button>
                <p className="text-black mt-6 text-xs">or</p>
                <NavLink to="/user" className="bg-black mt-3 text-white w-60 h-8 md:h-10 md:w-96 text-xs flex justify-center items-center rounded-md">
                    Create Account
                </NavLink>
                <NavLink to="/user" className="bg-black mt-3 text-white w-60 h-8 md:h-10 md:w-96 text-xs flex justify-center items-center rounded-md">
                    Signup
                </NavLink>
            </form>
        </div>
    );
};

export default UserLogin;
