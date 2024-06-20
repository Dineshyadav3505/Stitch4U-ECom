import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

const SearchPage = () => {
  
  const treding = [
    {img:"/img.j.jpeg", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
  ]

  const search = [
    {img:"/img.j.jpeg", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
    {img:"", title:"", price:"", fit:"",},
  ]

  return (
    <>
    <Navbar/>

    <div className='w-full min-h-full py-24 bg-[#FAF9F8] top-0 left-0'>
        <div className="w-full h-16 bg-[#FAF9F8] px-3 md:px-8 flex gap-3 items-center">
            <NavLink to="/" className="hover:text-zinc-200 md:hidden"><img src="/img/leftarrow.svg" alt="" /></NavLink>
            <input className=' w-full px-3 py-2 rounded-full text-sm text-[#2B2B2B] border-[1px] bg-transparent focus:outline-[#2B2B2B] border-[#A1A9B4]' type="text" placeholder='Search' />
            <NavLink to="/" className="hover:text-zinc-200 hidden md:block"><img src="/img/close.svg" alt="" /></NavLink>
        </div>

        {search.length >= 1 ? (
          <div className="h-full">
          <div className=" px-3 py-10 rounded-md ">
            <h5 className='text-base font-1 font-semibold uppercase text-center text-black '>Product</h5>
            <div className="flex gap-3 md:gap-12 lg:gap-16 py-3 flex-wrap">
              {search.map((item , index) => (
                <div key={index} className='h-72 w-[48%] md:w-[20%] lg:w-[15%] flex my-2 flex-col hover:bg-[#f5f3f3] rounded-md overflow-hidden'>
                  <div className="h-56 w-full rounded-md overflow-hidden ">
                    <img className='h-full w-full object-cover lg:object-fill object-top' src="/img/j.jpeg" alt="" />
                  </div>
                  <div className=" px-2 pt-2">
                    <h3 className='text-black font-1 text-sm'>jet Black Jeans</h3>
                    <h3 className='text-black fint-2 text-xs'>Fit Pant</h3>
                    <h3 className='text-black font-2 text-sm'>INR 1,699</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        ) : 
        (
          <div className="h-full">
          <div className=" px-3 py-10 rounded-md ">
            <h5 className='text-sm uppercase text-center text-black '>Trending Now</h5>
            <div className="flex gap-3 md:gap-12 lg:gap-16 py-3 flex-wrap">
              {treding.map((item , index) => (
                <div key={index} className='h-72 w-[48%] md:w-[20%] lg:w-[15%] flex my-2 flex-col rounded-md overflow-hidden'>
                  <div className="h-56 w-full rounded-md overflow-hidden ">
                    <img className='' src="/img/j.jpeg" alt="" />
                  </div>
                  <div className=" px-2 pt-2">
                    <h3 className='text-black font-1 text-sm'>jet Black Jeans</h3>
                    <h3 className='text-black fint-2 text-xs'>Fit Pant</h3>
                    <h3 className='text-black font-2 text-sm'>INR 1,699</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        )}

        
    </div>
    <Footer/>
    </>
  )
}

export default SearchPage