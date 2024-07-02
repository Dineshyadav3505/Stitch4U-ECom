import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';
import axios from '../../utils/Axios'

const CartCard = ({
    id,
    img,
    productName,
    price,
    discount,
    discountedPrice
}
) => {
    const accessToken = Cookies.get('accessToken'); 
    const [count, setCount] = React.useState(1);
    const decrease = () => {
        if(count > 1){
          setCount(count - 1);
        }
      };
      const increase = () => {
        if(count >= 1){
          setCount(count + 1);
        }
      };

      const [selectedSize, setSelectedSize] = useState(null);
      const [isOpen, setIsOpen] = useState(false);

      const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
      
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      const handleSizeSelect = (size) => {
        setSelectedSize(size);
        setIsOpen(false);
      };

    const deltetItem = async () => {
        try {
          const response = await axios.delete(`/users/detetTocart/${id}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
    
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className="h-48 w-full flex p-3 relative ">
        <img onClick={deltetItem} className='h-6 w-6 absolute top-3  right-3' src="/img/delete.svg" alt="" />
        <NavLink to={`"product/${id}"`} className=" h-full ">
          <img className='h-full' src={img[0]} alt="" />
        </NavLink>
        <div className="px-4 py-2 space-y-2 lg:flex gap-14  ">
          <div className=" lg:flex flex-col justify-center space-y-3 ">
            <h6 className='text-blacl text-sm mt-2'>Stitch4U</h6>
            <h6 className='text-blacl text-sm '>{productName}</h6>
            {discount === 0 ? 
            (
              <h6 className='text-blacl text-sm '>₹ {price}</h6>
            ) :(      
              <h3 className=' font-2 text-sm text-red-500 '>{`₹ ${discountedPrice}`} <span className='text-black relative ml-1'> <span className=' absolute h-[2px] w-full top-[45%] bg-black '></span> {`INR ${price}`}</span> </h3>
            )}
          </div>

          <div className="flex justify-center items-center ">
            <h6 className='text-black text-sm'>Quantity :</h6>
            <div className="flex justify-center items-center px-3">
                {count === 1 ? (<i onClick={decrease} className="ri-subtract-line px-1 text-zinc-400"></i>)
                :(<i onClick={decrease} className="ri-subtract-line px-1"></i>)}
                <h6 className='text-black text-sm  flex justify-center items-center w-6'>{count}</h6> 
                <i onClick={increase} className="ri-add-fill px-1 "></i>
            </div>

          </div>
          <div className="flex gap-3 items-center">
            <h6 className='text-black text-sm'>Size : </h6>
            <div className="relative inline-block">
                <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-md flex items-center text-xs"
                    onClick={toggleDropdown}
                >
                    {selectedSize ? selectedSize : 'Select Size'}
                    <svg
                    className={`w-3 h-3 ml-2 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white text-xs rounded-md shadow-lg">
                    <ul className="py-1">
                        {sizes.map((size) => (
                        <li
                            key={size}
                            className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSizeSelect(size)}
                        >
                            {size}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>          
          </div>
        </div>
    </div>
                  
)}

export default CartCard


const orderProcess = () =>{
  console.log(count)

}