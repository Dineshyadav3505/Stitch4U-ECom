import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../../utils/Axios'
import Navbar from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux'

const WishLish = () => {

  const favourites = [
    {img:"/img.j.jpeg", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
  ]
  const [error, setError] = useState('');
  const accessToken = Cookies.get('accessToken'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/users/WishListitem',{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        
        });
        // useDispatch(response.data.data);
        // setProducts(response.data.data);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching products.');
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <Navbar/>
    <div className='w-full bg-[#FAF9F8] pt-16 '>

        {favourites.length >= 1 ? (
          <div className="">
          <div className=" px-3 py-10 rounded-md ">
            <h5 className='text-base uppercase text-center text-black font-1 font-semibold'>favourites</h5>
            <div className="flex gap-3 md:gap-12 lg:gap-16 py-3 flex-wrap">
              {favourites.map((item , index) => (
                <div key={index} className='h-96 w-[48%] md:w-[20%] lg:w-[15%] flex my-2 flex-col rounded-md overflow-hidden'>
                  <div className="relative h-64 w-full rounded-md overflow-hidden ">
                    <img className='h-full w-full object-fill' src="/img/j.jpeg" alt="" />
                    <img onClick={()=>{console.log("first")}} className='absolute top-2 right-2 w-6' src="/img/heart.svg" alt="" />
                  </div>
                  <div className=" px-2 pt-2">
                    <h3 className='text-black font-1 text-sm'>jet Black Jeans</h3>
                    <h3 className='text-black font-2 text-sm'>INR 1,699</h3>
                    <h3 className='text-black fint-2 text-xs'>Colour : Black </h3>
                  </div>

                  <NavLink onClick={()=>{ console.log("add to cart")}} to="/cart" className=" bg-black text-sm text-white flex items-center justify-center gap-2 py-2 mt-3 "> 
                  <img  src="/img/cartw.svg" alt="" />
                    Add
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          </div>
        ) : 
        (
          <div className='flex flex-col items-center py-44 '>
              <h6 className='text-black text-4xl font-semibold '>Favourites </h6>
              <h6 className='text-black text-sm mt-10 font-semibold  '>SAVE YOUR FAVOURITE ITEMS </h6>
              <h6 className='text-black text-sm mt-4 font-mediam  '>Want to save the items that you love? Just click on the <br /> heart symbol beside the item and it will show up here. </h6>
              <NavLink to="/" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>SHOP NOW</NavLink>
          </div>
       )
        }

    </div>
    <Footer/>
    </>
  )
}

export default WishLish