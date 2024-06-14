import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SideMenu = props => {

  const data = [
    {img:"/public/img/new.jpeg",                name:"New Arrivals",          women:"/",                    men:"",             kids:"",                 sports:"lkdmnfv"},
    {img:"/public/img/best.jpeg",               name:"Best Selling",          women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/suits.jpeg",              name:"Suits & Blazers",       women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/shirts.jpeg",             name:"Shirt",                 women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/t-shirts.jpeg",           name:"t-shirt",               women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/trousers.jpeg",           name:"trousers",              women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/cargoPants.jpeg",         name:"cargo Pants",           women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/jeans.jpeg",              name:"jeans",                 women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/nightSuitpyjamas.jpeg",   name:"nightSuit & pyjamas",   women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/Shorts.jpeg",             name:"Shorts",                women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/Joggers.jpeg",            name:"Joggers",               women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/innerwear.jpeg",          name:"innerwear",             women:"",                     men:"",             kids:"",                 sports:""},
    {img:"/public/img/Perfumes.jpeg",           name:"Perfumes",              women:"",                     men:"",             kids:"",                 sports:""},
  ]

  return (
    <div className="menu absolute min-h-screen w-[100%] md:w-[450px] lg:w-[650px] bg-[#FAF9F8] top-0 left-0 px-5 pt-5 ">
      <NavLink to="/" className="flex justify-end"> <img src="/public/img/close.svg" alt="" />
      </NavLink>

      {data.map((item, index) => (
        <div key={index} className="h-16 overflow-hidden hover:h-full">
          <button className="font-1 w-full text-sm text-black h-16 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-bottom scale-110' src={item.img} alt="/" /></span> {item.name}
          </button>

          <NavLink to={item.women} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-cover scale-125' src="/public/img/women.jpeg" alt="/" /></span> Women  
          </NavLink>

          <NavLink to={item.men} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-center' src="/public/img/men.jpeg" alt="/" /></span> Men </NavLink>

          <NavLink to={item.kids} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-center scale-125' src="/public/img/kids.jpg" alt="/" /></span> kids </NavLink>

          {item.sports.length > 0 ? (<NavLink to={item.sports} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400">
              <span className="block h-12 w-12 rounded-full overflow-hidden mr-3">
                <img className="object-center" src="/public/img/sports.jpeg" alt="/" />
              </span>
              Sports
            </NavLink>) : ("")}

        </div>
      ))}


      
      

    </div>
  )
}

SideMenu.propTypes = {}

export default SideMenu