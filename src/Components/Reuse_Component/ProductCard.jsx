import React, { useState } from 'react'
import { NavLink, } from 'react-router-dom'
import axios from '../../utils/Axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../../store/cartSlice';
// import {onAddToWishList} from '../WebPages/New'

const Card = ({
  id,
  img,
  name,
  colour,
  price,
  heartadd,
  heartminus,
  cart,
  accessToken,
  colourCard,
  newitem="hidden",

}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const removeToWishList = async () => {
    try {
      const response = await axios.delete(`/users/addToWishList/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      onAddToWishList();
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  const addToWishList = async () => {
    try {
      const response = await axios.post(`/users/addToWishList/${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },

      });
    } catch (error) {
      console.error(error.response.data.message);
    }
  }

  const addToCart = async () => {
    try {
      const response = await axios.post(`/users/addTocart/${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      dispatch(removeProduct({id}));

    } catch (error) {
      console.error(error.response.data.message);
      if(error.response.data.message === 'Item already in cart'){
      }
    }
  }

  return (
    <div className={`h-96 w-[44vw]  md:w-[30vw] lg:w-52 flex relative`}>
      <div className={`absolute top-5 left-0 ${newitem}`}> <p className=' text-xs px-2 bg-black text-red-600'>new </p> </div>
      <div onClick={removeToWishList} className={`absolute top-5 right-2 md:right-5 lg:right-3 w-6 h-6 ${heartadd}`}> <img src="/img/heart.svg" alt="" /> </div>
      <div onClick={addToWishList} className={`absolute top-5 right-2 md:right-5 lg:right-3 w-6 h-6 ${heartminus}`}> <img src="/img/heart.svg" alt="" /> </div>
      <NavLink to={`product/${id}`} key={id} className={`h-96 flex my-2 flex-col rounded-md overflow-hidden`}>
        <div className="min-h-64 w-full rounded-md overflow-hidden ">
          <img className='w-full h-full object-fill' src={img} alt="" />
        </div>
        <div className=" px-2 pt-2">
          <h3 className='text-black font-1 text-sm flex flex-wrap overflow-hidden '>{name}</h3>
          <h3 className='text-black font-2 text-sm '>{`INR ${price}`}</h3>
          <h3 className={`text-black fint-2 text-xs ${colourCard} `}>{`Colour : ${colour}`} </h3>
        </div>
          <NavLink onClick={addToCart} className={`bg-black text-sm text-white flex items-center justify-center gap-2 py-2 mt-3 ${cart} `}> 
            <img src="/img/cartw.svg" alt="" />
            Add
          </NavLink>
        
      </NavLink>  
    </div>
  )
} 

export default Card