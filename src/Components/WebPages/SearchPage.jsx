import React from 'react'
import { NavLink } from 'react-router-dom'

const SearchPage = () => {
  return (
    <div className='absolute w-full min-h-screen bg-[#FAF9F8] top-0 left-0'>
        <div className="w-full h-16 bg-[#FAF9F8] shadow-xl px-3 md:px-8 flex gap-3 items-center">
            <NavLink to="/" className="hover:text-zinc-200 md:hidden"><img src="/public/img/leftarrow.svg" alt="" /></NavLink>
            <input className=' w-full px-3 py-2 rounded-full text-sm text-[#2B2B2B] border-[1px] bg-transparent focus:outline-[#2B2B2B] border-[#A1A9B4]' type="text" placeholder='Search' />
            <NavLink to="/" className="hover:text-zinc-200 hidden md:block"><img src="/public/img/close.svg" alt="" /></NavLink>
        </div>
    </div>
  )
}

export default SearchPage