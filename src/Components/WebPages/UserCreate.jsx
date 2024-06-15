import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const UserCreate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    countryCode: '+91',
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
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      countryCode: '+91',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.password
    ) {
      setError('Full name, Email, phone number, and password are required');
    } else {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
          }),
        });

        if (response.ok) {
          console.log('Form data submitted successfully');
        } else {
          console.error('Error submitting form data');
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
      resetForm();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-44">
      <h6 className="text-black text-2xl py-1 font-semibold uppercase">Create Account</h6>
      <h6 className="text-black text-xs font-mediam  ">Please enter your information to Create Account</h6>
      <form className="flex flex-col justify-center items-center placeholder:" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          required
          className="border w-60 h-8 md:h-10 md:w-96 mt-5 border-black rounded-md text-xs px-4 focus:outline-none"
          placeholder="FullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          required
          className="border w-60 h-8 md:h-10 md:w-96 mt-5 border-black rounded-md text-xs px-4 focus:outline-none"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="mt-5 flex">
          <select
            name="countryCode"
            required
            value={formData.countryCode}
            className="w-16 h-8 md:h-10 md:w-24 border text-sm px-1 md:px-2 border-black rounded-l-md focus:outline-none border-r-0"
            onChange={handleInputChange}
          >
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            name="phoneNumber"
            required
            className="border w-44 h-8 md:h-10 md:w-72 border-black rounded-r-md text-xs px-4 focus:outline-none"
            placeholder="Your mobile number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
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
          Create Account
        </button>

        <p className="text-black mt-6 text-xs">or</p>
        <NavLink to="/logIn" className="bg-black mt-3 text-white w-60 h-8 md:h-10 md:w-96 text-xs flex justify-center items-center rounded-md">
          Login
        </NavLink>
        <NavLink to="/logIn" className="bg-black mt-3 text-white w-60 h-8 md:h-10 md:w-96 text-xs flex justify-center items-center rounded-md">
          Signup
        </NavLink>
      </form>
    </div>
  );
};

export default UserCreate;