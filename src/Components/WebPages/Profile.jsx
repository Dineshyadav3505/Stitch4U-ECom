import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../../utils/Axios';
import Cookies from 'js-cookie';

import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Input from '../Reuse_Component/Input';
import Button from '../Reuse_Component/Button';

const Profile = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset} = useForm();
  const [error, setError] = useState('');
  const [postion, setPosition] = useState("hidden");
  const accessToken = Cookies.get('accessToken');

  const handleClick = () => {
    setPosition("block");
  };

  const user = JSON.parse(localStorage.getItem('user'));
  const { fullName, email, phoneNumber } = user || {};

  const update = async (data) => {
    setError('');
    try {
        const response = await axios.patch('/users/update', {
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
          }, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
  
      if (response.status === 200) {
        const updatedUser = response.data.data;
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        setError(response.data.message);
      }
      reset();


    } catch (error) {
      console.error(error.response.data.message);
      setError('An error occurred while updating your profile.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 py-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img className="h-24 bg-zinc-200 rounded-full p-5" src="/img/user.svg" alt="" />
          <h5 className="py-3 text-sm font-1 uppercase">
            {fullName ? `Hello, ${fullName.split(' ')[0]}` : 'Hello !'}
          </h5>
        </div>

          <form onSubmit={handleSubmit(update)}>
            <div className=" px-5 flex w-[100vw] flex-col justify-center items-center py-10 space-y-5 md:w-[100%] md:block rounded-md">
                <div onClick={handleClick} className=" w-[100%] flex justify-end items-end">
                    <img className='' src="/img/edit.svg" alt="/" />
                </div>
                
                <Input
                label="Full Name"
                type="text"
                className="border w-[100%] h-10 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
                placeholder={fullName}
                {...register('fullName', { required: true })}
                />

                <Input
                label="Email"
                type="email"
                className="border w-[100%] h-10 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
                placeholder={email}
                {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                />

                <Input
                label="Phone Number"
                type="tel"
                className="border w-[100%] h-10 block bg-transparent mb-5 md:mb-12 md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
                placeholder={phoneNumber}
                {...register('phoneNumber', { required: true })}
                />

                <Button
                type="submit"
                className={` bg-black text-white ${postion} w-60 h-8 md:h-10 md:w-96 text-xs rounded-md mx-auto`}
                children="Update Profile"
                />
            </div>
          </form>
        </div>

      <Footer />
    </>
  );
};

export default Profile;