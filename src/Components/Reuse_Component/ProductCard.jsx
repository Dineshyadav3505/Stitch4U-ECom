import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (
    {
        id,
        img,
        name,
        colour,
        price,
        heart,
        heartClick,
        cart,
        cartClick,
    }

) => {
  return (
    <NavLink to={`product/${id}`} key={id} className='h-96 w-[48%] md:w-[25%] lg:w-[12%] flex my-2 flex-col rounded-md overflow-hidden'>
        <div className="relative h-64 w-full rounded-md overflow-hidden ">
        <img className='h-full w-full object-fill' src={img} alt="" />
        <img onClick={()=>{heartClick}} className={`absolute top-2 right-2 w-6 ${heart} `} src="/img/heart.svg" alt="" />
        </div>
        <div className=" px-2 pt-2">
            <h3 className='text-black font-1 text-sm'>{name}</h3>
            <h3 className='text-black font-2 text-sm'>{`INR ${price}`}</h3>
            <h3 className='text-black fint-2 text-xs'>{`Colour : ${colour}`} </h3>
        </div>
        <NavLink onClick={cartClick} className={`bg-black text-sm text-white flex items-center justify-center gap-2 py-2 mt-3 ${cart} `}> 
        <img  src="/img/cartw.svg" alt="" />
        Add
        </NavLink>
    </NavLink>
  )
}

export default Card