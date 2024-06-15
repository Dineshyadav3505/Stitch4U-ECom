import React from 'react'
import { NavLink } from 'react-router-dom'


const Cart = () => {
  const cart = [
    {img:"/img.j.jpeg", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
  ]

  return (
    <div className='w-full bg-[#FAF9F8] pt-16 md:flex '>
        {cart.length >= 1 ? (
          <div className="md:w-[60%]">
          <div className=" px-3 py-10 rounded-md ">
            <h5 className='text-base uppercase text-center text-black font-1 font-semibold'>shopping bag</h5>
            <div className="flex gap-3 md:gap-12 lg:gap-16 py-3 flex-wrap">
              {cart.map((item , index) => (
                <div key={index} className='h-96 w-[48%] md:w-[26%] lg:w-[20%] flex my-2 flex-col rounded-md overflow-hidden'>
                  <div className="relative h-64 w-full rounded-md overflow-hidden ">
                    <img className='h-full w-full object-fill' src="/img/j.jpeg" alt="" />
                  </div>
                  <div className=" px-2 pt-2">
                    <h3 className='text-black font-1 text-sm'>jet Black Jeans</h3>
                    <h3 className='text-black font-2 text-sm'>INR 1,699</h3>
                    <h3 className='text-black fint-2 text-xs'>Colour : Black </h3>
                  </div>

                </div>
              ))}
            </div>
          </div>
          </div>
        ) : 
        (
          <div className='flex flex-col items-center py-36 '>
              <h6 className='text-black text-4xl font-semibold '>Your shopping bag is empty </h6>
              <h6 className='text-black text-sm mt-10 font-semibold  '>Your Shopping Bag is empty! </h6>
              <h6 className='text-black text-sm mt-4 font-mediam  '>Sign in to save or access already saved items in your shopping bag.</h6>
              <NavLink to="/login" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>Sign In</NavLink>
          </div>
        )
        }
      <div className="min-h-screen md:w-[40%] bg-black">

      </div>

    </div>
  )
}


export default Cart