import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import axios from '../../utils/Axios'
import { setCart } from '../../store/cartSlice';
import Card from '../Reuse_Component/ProductCard';


const Cart = () => {

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/users/cart',{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }, 
        });
        dispatch(setCart(response.data.data))
        console.log(response.data.data)

      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching products.');
      }
    };

    fetchProducts();
  }, []);

  const accessToken = Cookies.get('accessToken'); 
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.product)

  const total = Cart.map((item)=>{
    return item.productId.price 
  })
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  const totalPrice = sum

  const deltetItem = async () => {
    try {
      console.log(id)
      console.log(accessToken)
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
    <>
    <Navbar/>
    <div className="md:flex">
      <div className='w-[100%] lg:min-w-[80%] bg-[#FAF9F8] pt-16 '>
            <div className="">
            <div className=" px-3 py-10 rounded-md ">
              <h5 className='text-base uppercase text-center font-1 font-semibold'>Shoppng bag</h5>
              <div className="flex gap-3 md:gap-12 lg:gap-16 py-3 md:px-6 flex-wrap">
                {Cart.length > 0 ? (
                  Cart.map((item) => (
                    <div className="h-48 w-full flex p-3 relative ">
                      <img onClick={deltetItem} className='h-6 w-6 absolute top-3  right-3' src="/img/delete.svg" alt="" />
                      <NavLink to={`product/${item.productId._id}`} className="w-[34%] h-full bg-black">
                        <img src={item.productId.imageURL[0]} alt="" />
                      </NavLink>
                      <div className="px-4 py-2 space-y-2">
                        <h6 className='text-blacl text-sm mt-2'>Stitch4U</h6>
                        <h6 className='text-blacl text-sm '>{item.productId.name}</h6>
                        <h6 className='text-blacl text-sm '>₹ {item.productId.price}</h6>
                        <h6 className='text-blacl text-sm '>Size : {item.productId.size}</h6>
                        <h6 className='text-blacl text-sm '>quantity : {item.quantity}</h6>
                        <h6 className='text-blacl text-sm '>${item.productId.price * item.quantity}</h6>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='flex flex-col items-center mx-auto py-4 '>
                    <h6 className='text-black text-4xl font-semibold uppercase'>Shopping Bag</h6>
                    <h6 className='text-black text-sm mt-10 font-semibold uppercase '>Your Shopping Bag is empty! </h6>
                    <h6 className='text-black text-sm mt-4 font-medium text-center '>
                    Want to save the items that you purchase? Just click on the Add symbol beside the item and it will show up here.
                    </h6>
                    <NavLink to="/" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>
                      SHOP NOW
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
            </div>
      </div>
      <div className='w-[100%] lg:w-[20%] py-3 md:pt-28 px-5'>
        <div className="flex justify-between items-center border-b-[1px] py-2">
          <h6 className='font-2 text-sm text-[#6c6c6c]'>Discounts</h6>
          <NavLink to="/discount" className='text-black text-xs font-2 underline'>Apply discount</NavLink>
        </div>

        <div className="border-b-2 border-black py-1">
          {/* order price */}
          <div className="flex justify-between items-center  py-1">
            <h6 className='font-2 text-sm text-[#6c6c6c]'>Order Price</h6>
            <h6 className='font-2 text-xs text-black'><span>{totalPrice}</span>.00<span> Rs</span></h6>
          </div>

          {/* Discount */}
          <div className="flex justify-between items-center py-1">
            <h6 className='font-2 text-sm text-[#6c6c6c]'>Discount</h6>
            <h6 className='font-2 text-xs text-red-500'><span>Rs</span>.00<span> Rs</span></h6>
          </div>

          {/* Delivery */}
          <div className="flex justify-between items-center py-1">
            <h6 className='font-2 text-sm text-[#6c6c6c]'>Delivery</h6>
            <h6 className='font-2 text-xs text-black'><span>100</span>.00<span> Rs</span></h6>
          </div>
        </div>

        <div className="">
          {/* Total */}
          <div className="flex justify-between items-center py-3">
            <h6 className='font-1 text-sm text-[#black]'>Total</h6>
            <h6 className='font-1 text-xs text-black'><span>Rs. </span>599<span>.00</span></h6>
          </div>

          {/* check out button */}
          <NavLink className='mt-3 bg-black text-white py-2 flex justify-center items-center '> Continue to checkout</NavLink>
        </div>

        {/* other */}
        <div className="mt-10">
          <p className='text-xs text-black font-2'>We accept</p>
          <div className="py-2">
            <p className='text-xs text-black font-2'>Cash on Delivery</p>
          </div>
          <p className='text-xs text-black font-2 '>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
          <p className='text-xs text-black font-2 '>15 days free returns. Read more about return and refund policy.</p>
          <p className='text-xs text-black font-2 mb-6'>Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number</p>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  )
}


export default Cart