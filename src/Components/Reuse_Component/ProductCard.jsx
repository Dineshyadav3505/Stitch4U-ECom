import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../../utils/Axios'
import { useNavigate } from 'react-router-dom'

const Card = ({
  id,
  img,
  name,
  colour,
  price,
  heart,
  heartClick,
  cart,
  cartClick,
  accessToken
}) => {
  const navigate = useNavigate();

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

  return (
    <div className="h-96 w-[48%] md:w-[25%] lg:w-[12%] flex relative">
      <div onClick={removeToWishList} className={`absolute top-5 right-2 w-6 h-6 ${heart}`}> <img src="/img/heart.svg" alt="" /> </div>
      <NavLink to={`product/${id}`} key={id} className='h-96 flex my-2 flex-col rounded-md overflow-hidden'>
        <div className="h-64 w-full rounded-md overflow-hidden ">
          <img className='h-full w-full object-fill' src={img} alt="" />
        </div>
        <div className=" px-2 pt-2">
          <h3 className='text-black font-1 text-sm'>{name}</h3>
          <h3 className='text-black font-2 text-sm'>{`INR ${price}`}</h3>
          <h3 className='text-black fint-2 text-xs'>{`Colour : ${colour}`} </h3>
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