import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryCardSmall = () => {

  const data= [
    {img:"/img/shirt.png",name:"Shirt",link:'/product/shirt'},
    {img:"/img/t-shirt.png",name:" t-shirts",link:'/product/t-shirt'},
    {img:"/img/trousers.png",name:"trousers",link:'/product/trousers'},
    {img:"/img/jeans.png",name:"jeans",link:'/product/jeans'},
    {img:"/img/suits & blazers.png",name:"suits & blazers",link:'/product/suits & blazers'},
    {img:"/img/jackets.png",name:"jackets",link:'/product/jackets'},
    {img:"/img/cargo.png",name:"cargos",link:'/product/cargo'},
    {img:"/img/shorts.png",name:"shorts",link:'/product/shorts'},
    {img:"/img/hoodies.png",name:"hoodies",link:'/product/hoodies'},
    {img:"/img/sweaters.png",name:"sweaters",link:'/product/sweaters'},
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
                        <div className='absolute bottom-0 mx-auto h-full w-full overflow-hidden px-3 md:py-9'>
                          <img className='' src={item.img} alt="" />
                        </div> 
                        
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