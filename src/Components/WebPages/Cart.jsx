import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';


const Cart = () => {
  const cart = [
    {img:"/img.j.jpeg", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
  ]

  const [count, setCount] = useState(1);
  const increase = () => {
    if(count >= 1){
      const quantity = setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count == 1) {
      console.log("remove form cart")
    }

    if (count > 1) {
      const quantity = setCount(count - 1);
    }
  };

  return (
    <>
    <Navbar/>
    // Cart
    <div className='w-full bg-[#FAF9F8] pt-16 md:flex '>
        {cart.length >= 1 ? (
          <div className="w-full">
            <div className=" px-3 py-10 rounded-md ">

              {/* Shopping Cart main text */}
              <h5 className='text-base uppercase text-center text-black font-1 py-5 font-semibold'>shopping bag</h5>
              <div className=" md:flex md:gap-5 ">

                {/* //// product */}
                <div className="flex gap-3 md:gap-12 md:w-[60%] rounded-md px-5 lg:gap-6 py-3 flex-wrap">
                  {cart.map((item , index) => (
                    <div key={index} className='w-[100%] flex my-2 border-y-2 py-4 overflow-hidden'>

                      {/* product img */}
                      <div className="relative h-64 w-[50%] lg:w-[30%] rounded-md overflow-hidden ">
                        <img className='h-full w-full object-fill' src="/img/j.jpeg" alt="" />
                      </div>


                      {/* ///// product name, colour, size text */}
                      <div className=" px-4 pt-8 ">
                        <h3 className='text-black font-1 text-base'>jet Black Jeans</h3>
                        <h3 className='text-black font-2 text-base pt-4'><span className=' font-bold '> Colour:</span> brown </h3>
                        <h3 className='text-black fint-2 text-base py-'><span className=' font-bold '> Size:</span> xl </h3>


                        {/* //// add or minus quantity buttons */}
                          <div className="flex border-2 mt-10 md:mt-10 justify-between w-20 ">
                            <i onClick={decrease} className='ri-subtract-line h-6 w-6 flex justify-center hover:text-white hover:bg-black'></i>
                            <h3 className='text-black font-2 text-base px-2'>{count}</h3>
                            <i onClick={increase} className='ri-add-line h-6 w-6 flex justify-center hover:text-white hover:bg-black'></i>
                          </div>

                          {/* //// product price */}
                          <h3 className='text-black font-2 text-lg pt-5'><span className='font-bold'>INR </span>100</h3>


                        
                      </div>

                    </div>
                  ))}
                </div>



                {/* Cart Calculator */}
                <div className="md:w-[40%] p-5 mt-5 md:mt-0 ">
                  {/* discount */}
                  <div className="flex justify-between items-center border-b-[1px] py-2">
                    <h6 className='font-2 text-sm text-[#6c6c6c]'>Discounts</h6>
                    <NavLink to="/discount" className='text-black text-xs font-2 underline'>Apply discount</NavLink>
                  </div>

                  {/* order price */}
                  <div className="border-b-2 border-black py-1">
                    {/* order price */}
                    <div className="flex justify-between items-center  py-1">
                      <h6 className='font-2 text-sm text-[#6c6c6c]'>Order Price</h6>
                      <h6 className='font-2 text-xs text-black'><span>Rs. </span>699<span>.00</span></h6>
                    </div>

                    {/* Discount */}
                    <div className="flex justify-between items-center py-1">
                      <h6 className='font-2 text-sm text-[#6c6c6c]'>Discount</h6>
                      <h6 className='font-2 text-xs text-red-500'><span>Rs. -</span>100<span>.00</span></h6>
                    </div>

                    {/* Delivery */}
                    <div className="flex justify-between items-center py-1">
                      <h6 className='font-2 text-sm text-[#6c6c6c]'>Delivery</h6>
                      <h6 className='font-2 text-xs text-black'><span>Rs. </span>100<span>.00</span></h6>
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
                    <p className='text-xs text-black font-2'>Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number</p>

                  </div>

                  
                </div>

              </div>
              
            </div>
          </div>
        ) : 
        (
          // Empty Cart
          <div className='flex flex-col justify-center items-center w-full py-36 '>
              <h6 className='text-black text-4xl font-semibold text-center '>Your shopping bag is empty </h6>
              <h6 className='text-black text-sm mt-10 font-semibold text-center'>Your Shopping Bag is empty! </h6>
              <h6 className='text-black text-sm mt-4 font-mediam text-center'>Sign in to save or access already saved items in your shopping bag.</h6>
              <NavLink to="/login" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>Sign In</NavLink>
          </div>
        )
        }


    </div>
    <Footer/>
    </>
  )
}


export default Cart