import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const UserLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',

      });
    
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
        console.log('Form data:', formData);
    
        try {
          const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formData.email,
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
      };
      
      return (
        <div className='flex flex-col justify-center items-center py-44'>
            <h6 className='text-black text-2xl py-1 font-semibold uppercase'>Login</h6>
            <h6 className='text-black text-xs font-mediam  '>Please enter your information to LogIn</h6>
            <form className="flex flex-col justify-center items-center placeholder:" onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            className="border w-60 h-8 md:h-10 md:w-96 mt-5 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          
          <input
            type="password"
            name="password"
            className="border w-60 h-8 md:h-10 md:w-96 mt-5 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit" className="bg-black text-white mt-10 px-7 py-3 text-xs rounded-md">
            LogIn
          </button>
    
          <p className='text-black mt-6 text-xs'>or</p>
          <div className="flex w-60 md:w-96 mt-2 px-16 justify-between underline items-center">
            <NavLink to="/user" className="text-blue-500 text-xs "> Create Account</NavLink>
            <NavLink to="/user" className="text-blue-500 text-xs "> Signup</NavLink>
          </div>
        </form>
        </div>
  )
}

export default UserLogin