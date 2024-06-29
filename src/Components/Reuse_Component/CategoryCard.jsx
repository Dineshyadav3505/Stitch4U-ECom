import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryCard = () => {

    const data= [
        {img:"/img/crochet.webp",name:"Crochet Shirt",link:'chach'},
        {img:"/img/polo.webp",name:" polos",link:'chachi'},
        {img:"/img/tshirt.jpeg",name:" t-shirts",link:'nana'},
        {img:"/img/linen.jpeg",name:" Breezy Linen",link:'nani'},
    ]

  return (

    <div className=" py-4">
    <h1 className='font-1 uppercase text-center text-xl font-bold'> Trending NOW 💫 </h1>
    <div className="px-5 py-3 flex flex-wrap justify-center lg:justify-evenly gap-4 ">
        {data.map((item , index) => (
            <NavLink key={index} to={`/product/${item.link}`} className=' relative my-3 h-52 w-[47%] md:h-64 md:w-[23%] lg:w-[15%] rounded-lg overflow-hidden '>
                <div className="w-full h-full overflow-hidden">
                    <img className='w-full h-full object-fill' src={item.img} alt="" />
                    <h3 className= 'absolute bottom-3 left-3 text-[#ffffff] font-bol font-2 tracking-wide  text-sm lg:text-base uppercase '>{item.name}</h3>
                </div>
           </NavLink> 
        ))}        
    </div>
    </div>
)}

export default CategoryCard