import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SideMenu = props => {

  const data = [
    {img:"/public/img/new.jpeg",                name:"New Arrivals",          women:"/New_Arrivals/women",              men:"/New_Arrivals/men",             kids:"/New_Arrivals/kids",                 sports:"/New_Arrivals/sports"},
    {img:"/public/img/best.jpeg",               name:"Best Selling",          women:"/Best_Selling/women",              men:"/Best_Selling/men",             kids:"/Best_Selling/kids",                 sports:"/Best_Selling/sports"},
    {img:"/public/img/suits.jpeg",              name:"Suits & Blazers",       women:"/Suits_&_Blazers/women",           men:"/Suits_&_Blazers/men",          kids:"/Suits_&_Blaz/kids",                 sports:""},
    {img:"/public/img/shirts.jpeg",             name:"Shirt",                 women:"/Shirt/women",                     men:"/Shirt/men",                    kids:"/Shirt/kids",                        sports:""},
    {img:"/public/img/t-shirts.jpeg",           name:"t-shirt",               women:"/t-shirt/women",                   men:"/t-shirt/men",                  kids:"/t-shirt/kids",                      sports:"/t-shirt/sports"},
    {img:"/public/img/trousers.jpeg",           name:"trousers",              women:"/trousers/women",                  men:"/trousers/men",                 kids:"/trousers/kids",                     sports:""},
    {img:"/public/img/cargoPants.jpeg",         name:"cargo Pants",           women:"/cargo_Pants/women",               men:"/cargo_Pants/men",              kids:"/cargo_Pants/kids",                  sports:""},
    {img:"/public/img/jeans.jpeg",              name:"jeans",                 women:"/jeans/women",                     men:"/jeans/men",                    kids:"/jeans/kids",                        sports:""},
    {img:"/public/img/nightSuitpyjamas.jpeg",   name:"nightSuit & pyjamas",   women:"/nightSuit_&_pyjamas/women",       men:"/nightSuit_&_pyjamas/men",      kids:"/nightSuit_&_pyjamas/kids",          sports:""},
    {img:"/public/img/Shorts.jpeg",             name:"Shorts",                women:"/Shorts/women",                    men:"/Shorts/men",                   kids:"/Shorts/kids",                       sports:""},
    {img:"/public/img/Joggers.jpeg",            name:"Joggers",               women:"/Joggers/women",                   men:"/Joggers/men",                  kids:"/Joggers/kids",                      sports:""},
    {img:"/public/img/innerwear.jpeg",          name:"innerwear",             women:"/innerwear/women",                 men:"/innerwear/men",                kids:"/innerwear/kids",                    sports:""},
    {img:"/public/img/Perfumes.jpeg",           name:"Perfumes",              women:"/Perfumes/women",                  men:"/Perfumes/men",                 kids:"",                                   sports:""},
  ]

  return (
    <div className="menu absolute min-h-screen w-[100%] md:w-[450px] bg-[#FAF9F8] top-0 left-0 px-5 pt-5 ">
      <NavLink to="/" className="flex justify-end"> <img src="/public/img/close.svg" alt="" />
      </NavLink>

      {data.map((item, index) => (
        <div key={index} className="h-16 overflow-hidden hover:h-full">
          <button className="font-1 w-full text-sm text-black h-16 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-bottom scale-110' src={item.img} alt="/" /></span> {item.name}
          </button>

          <NavLink to={item.women} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-cover scale-125' src="/public/img/women.jpeg" alt="/" /></span> Women  
          </NavLink>

          <NavLink to={item.men} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-center' src="/public/img/men.jpeg" alt="/" /></span> Men </NavLink>

          {item.kids.length >   0 ? (<NavLink to={item.kids}   className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400"> <span className="block h-12 w-12 rounded-full overflow-hidden mr-3"><img className=' object-center scale-125' src="/public/img/kids.jpg" alt="/" /></span> kids </NavLink>) : ("")}

          {item.sports.length > 0 ? (<NavLink to={item.sports} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400"> <span className="block h-12 w-12 rounded-full overflow-hidden mr-3"><img className="object-center" src="/public/img/sports.jpeg" alt="/" /></span> Sports </NavLink>) : ("")}

        </div>
      ))}


      
      

    </div>
  )
}

SideMenu.propTypes = {}

export default SideMenu