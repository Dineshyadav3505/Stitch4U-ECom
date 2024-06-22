import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Reuse_Component/Button'
import Input from '../Reuse_Component/Input'
import {useDispatch} from'react-redux'
import {useForm} from'react-hook-form'
import axios from '../../utils/Axios'
import Navbar from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'


const Singup = () => {
    const [error, setError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [emailError, setEmailError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const signup = async (data) => {
        setError('')
        try {
            const session = await axios.post("/users/register",{
                fullName: data.fullName,
                email: data.email,
                phoneNumber: data.phoneNumber,
                password:  data.password,
            })
            console.log(session.data.data)
            const accessToken = session.data.data.accessToken;
            const user = session.data.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/')
            
        } catch (error) {

            const backendError = (error.response.data.message)
            const back = console.log(error.response.data.message)

            if(error.response.data.message === "Phone number already exists"){
                setPhoneError(error.response.data.message)
            }

            if(error.response.data.message === "Phone number must be 10 digits"){
                setPhoneError(error.response.data.message)
            }

            if(error.response.data.message === "Password must be between 8 and 16 characters"){
                setPasswordError(error.response.data.message)
            }

            if(error.response.data.message === "Email already exists"){
                setEmailError(error.response.data.message)
            }



         
        }
    }


  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center py-44">
        <h6 className="text-black text-2xl py-1 font-semibold uppercase">Create Account</h6>

        <form onSubmit={handleSubmit(signup)} className='mt-10'>
            <div className=" space-y-1">
                <Input
                    label={error || "Full Name"}
                    labelclass={`text-xs capitalize ${error.length > 0 ? "text-black" : "text-red"}`}
                    type="text"
                    className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
                    placeholder="FullName"
                    {...register('fullName',{required: true})}
                />
                <Input
                    label={emailError || "Email"}
                    labelclass={`text-xs capitalize ${emailError.length > 0 ? "text-red-500" : "text-black"}`}
                    type="email"
                    className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
                    placeholder="Email"
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPattern: (value) =>
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Invalid email address"
                        }
                    })}
                />
                <Input
                    label={phoneError || "Phone Number"}
                    labelclass={`text-xs capitalize ${phoneError.length > 0 ? "text-red-500" : "text-black"}`}
                    type="text"
                    className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
                    placeholder="Phone Number"
                    {...register('phoneNumber',{required: true})}
                />
                <Input
                    label={passwordError || "password"}
                    labelclass={`text-xs md:xs capitalize ${passwordError.length > 0 ? "text-red-500" : "text-black"}`}
                    type='password'
                    className='border w-60 h-8 mb-5 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
                    placeholder="Password"
                    {...register('password', {
                        required: true,
                    })}
                />

                <Button
                    type="submit"
                    className="bg-black text-white w-60 h-8 md:h-10 md:w-96 text-xs rounded-md"
                    children="Create Account"
                />

            </div>
            

        </form>
        

    </div>
    <Footer/>
    </>
  )
}

export default Singup