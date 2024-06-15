import React from 'react'
import { NavLink } from 'react-router-dom'

const WishLish = () => {
  return (
    <div className='flex flex-col items-center py-44 '>
        <h6 className='text-black text-4xl font-semibold '>Favourites </h6>
        <h6 className='text-black text-sm mt-10 font-semibold  '>SAVE YOUR FAVOURITE ITEMS </h6>
        <h6 className='text-black text-sm mt-4 font-mediam  '>Want to save the items that you love? Just click on the <br /> heart symbol beside the item and it will show up here. </h6>
        <NavLink to="/" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>SHOP NOW</NavLink>
    </div>
  )
}

export default WishLish