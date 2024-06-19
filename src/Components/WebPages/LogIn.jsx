import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Reuse Component/Button'
import Input from '../Reuse Component/Input'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form' 
import axios from '../../utils/Axios'

const LogIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [passwordError, setPasswordError] = useState("")
    const [error, setError] = useState("")

    const login = async (data) => {
        setError('')
        try {
            const session = await axios.post("/users/logIn" ,{
                email: data.email,
                password:  data.password
            })
            if(session){
                const accesToken = console.log(session.data.data.accessToken)
                const user = console.log(session.data.data.user)
                navigate('/')
            }
            else(error.session.data.data.message)
            
        } catch (error) {

            if(error.response.data.message === "Incorrect password"){
                setPasswordError(error.response.data.message)
            }
            if(error.response.data.message === "Incorrect email"){
                setError(error.response.data.message)
            }
        }
    }


  return (
    <div className="flex flex-col justify-center items-center py-44">
        <h6 className="text-black text-2xl py-1 font-semibold uppercase">Login</h6>

        <form onSubmit={handleSubmit(login)} className='mt-10' >
            <div className="space-y-5">
        
            <Input
                label={error}
                labelclass="text-xs text-red-600 capitalize"
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
                label={passwordError}
                labelclass="text-xs text-red-600"
                type='password'
                className='border w-60 h-8 block bg-transparent md:h-10 md:w-96  border-black rounded-md text-xs px-4 focus:outline-none'
                placeholder="Password"
                {...register('password',{required: true})}
            />


            <Button
                type="submit"
                className="bg-black mt-10 text-white w-60 h-8 md:h-10 md:w-96 text-xs rounded-md"
                children="LogIn"
            />
                
            </div>
        </form>
        
    </div>
  )
}

export default LogIn