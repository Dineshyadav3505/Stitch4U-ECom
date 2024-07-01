import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryCardSmall = () => {

  const data= [
    {img:"/img/crochet.webp",name:"Shirt",link:'/product/shirt'},
    {img:"/img/tshirt.jpeg",name:" t-shirts",link:'/product/t-shirt'},
    {img:"/img/polo.webp",name:"trousers",link:'/product/trousers'},
    {img:"/img/linen.jpeg",name:"jeans",link:'/product/jeans'},
    {img:"/img/linen.jpeg",name:"suits & blazers",link:'/product/suits & blazers'},
    {img:"/img/linen.jpeg",name:"jackets",link:'/product/jackets'},
    {img:"/img/linen.jpeg",name:"cargos",link:'/product/cargo'},
    {img:"/img/linen.jpeg",name:"shorts",link:'/product/shorts'},
    {img:"/img/linen.jpeg",name:"hoodies",link:'/product/hoodies'},
    {img:"/img/linen.jpeg",name:"sweaters",link:'/product/sweaters'},
  ]
  
  return (
    <>
    <div className="overflow-x-scroll px-5">
        <div className="h-44 md:h-56 flex gap-3 w-full mt-5">
            {data.map((item , index) => (
                <NavLink key={index} to={item.link} className="h-full min-w-28 inline-block select-none  ">
                    <div className="h-[73%] relative">
                        <div className="h-[40%] w-full rounded "></div>
                        <div className="h-[60%] w-full rounded bg-slate-300 relative"></div>
                        <img className='absolute -bottom-3 select-none h-full' src="/img/jj.png" alt="" />
                        
                    </div>
                    <h5 className='text-sx text-center capitalize font-1'>{item.name}</h5>
                </NavLink>
            ))}
        </div>
    </div>
    </>
  )
}

export default CategoryCardSmall