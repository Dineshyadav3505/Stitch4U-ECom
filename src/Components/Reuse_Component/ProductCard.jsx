import React, { useState } from 'react'
import { NavLink, } from 'react-router-dom'
import axios from '../../utils/Axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from '../../store/cartSlice';

const Card = ({
  id,
  img,
  name,
  colour,
  price,
  heart,
  cart,
  accessToken,
  quantityCard,
  size,
  add,
  minus,

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
      navigate('/')
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
      navigate('/cart')
    } catch (error) {
      console.error(error.response.data.message);
      if(error.response.data.message === 'Item already in cart'){
        navigate('/cart')
      }
    }
  }

  const removeToCart = async () => {
    try {
      const response = await axios.delete(`/users/detetTocart/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      navigate('/cart')
    } catch (error) {
      console.error(error.response.data.message);
      if(error.response.data.message === 'Item already in cart'){
        navigate('/cart')
      }
    }
  }

  const [count, setCount] = useState(1);
  const increase = () => {
   if(count >= 1){
     const quantity = setCount(count + 1);
   }
  };

  const decrease = () => {
    if (count == 1) {
      removeToCart()
    }

    if (count > 1) {
      const quantity = setCount(count - 1);
    }
  };

  return (
    <div className="h-96 w-[48%] md:w-[42%] lg:w-[17%] flex relative ">
      <div onClick={removeToWishList} className={`absolute top-5 right-2 w-6 h-6 ${heart}`}> <img src="/img/heart.svg" alt="" /> </div>
      <NavLink to={`product/${id}`} key={id} className='h-96 flex my-2 flex-col rounded-md overflow-hidden'>
        <div className="h-64 w-full rounded-md overflow-hidden ">
          <img className='h-full w-full object-fill' src={img} alt="" />
        </div>
        <div className=" px-2 pt-2">
          <h3 className='text-black font-1 text-sm'>{name}</h3>
          <h3 className='text-black font-2 text-sm'>{`INR ${price}`}</h3>
          <h3 className='text-black fint-2 text-xs'>{`Colour : ${colour}`} </h3>
          <h3 className='text-black fint-2 text-xs'>{`size : ${size}`} </h3>
        </div>
          <NavLink onClick={addToCart} className={`bg-black text-sm text-white flex items-center justify-center gap-2 py-2 mt-3 ${cart} `}> 
            <img src="/img/cartw.svg" alt="" />
            Add
          </NavLink>
        
      </NavLink>  
        <div className={`h-7 mt-1 flex absolute w-full -bottom-3 overflow-hidden rounded-b ${quantityCard}`}>
           <div onClick={decrease} className="w-full flex justify-center items-center bg-zinc-300">
            <i className="ri-subtract-line"></i>
           </div>
           <div className="w-full flex justify-center items-center text-xs">
             <h4>{count}</h4>
           </div>
           <div onClick={increase} className="w-full flex justify-center items-center bg-zinc-300">
            <i className="ri-add-fill"></i>
           </div>
        </div>
    </div>
  )
} 

export default Card