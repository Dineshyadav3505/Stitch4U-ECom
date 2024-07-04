import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from '../../utils/Axios';
import { setProduct } from '../../store/orderSlice';
import { useDispatch } from 'react-redux';
import {deleteProduct} from '../../store/cartSlice';

const CartCard = ({
  id, img, productName, price, discount, discountedPrice, quantity, size
}) => {
  const accessToken = Cookies.get('accessToken');
  const dispatch = useDispatch();

  const deleteItem = async () => {
    try {
      const response = await axios.delete(`/users/detetTocart/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      dispatch(setProduct(response.data.data)); 
      dispatch(deleteProduct(id));

    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="h-48 w-full flex p-3 relative ">
      <img onClick={deleteItem} className='h-6 w-6 absolute top-3  right-3' src="/img/delete.svg" alt="" />
      <NavLink to={`product/${id}`} className=" h-full ">
        <img className='h-full' src={img.imageURL[0]} alt="" />
      </NavLink>
      <div className="px-4 py-2 space-y-2 lg:flex gap-14  ">
        <div className=" lg:flex flex-col justify-center space-y-2 ">
          <h6 className='text-black text-sm mt-2'>Stitch4U</h6>
          <h6 className='text-black text-sm '>{productName}</h6>
          {discount === 0 ? 
            (
              <h6 className='text-black text-sm '>₹ {price}</h6>
            ) : (      
              <h3 className=' font-2 text-sm text-red-500 '>{`₹ ${discountedPrice}`} <span className='text-black relative ml-1'> <span className=' absolute h-[2px] w-full top-[45%] bg-black '></span> {`INR ${price}`}</span> </h3>
            )}
          <h6 className='text-black text-sm'>Quantity :<span className='uppercase'> {quantity}</span></h6>
          <h6 className='text-black text-sm'>Size:<span className='uppercase'> {size}</span></h6>
          
        </div>

      </div>
    </div>
  );
}

export default CartCard;
