
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';
import instance from '../../utils/Axios';



const Navbar = () => {



  const data = [
    {img:"/img/new.jpeg",                name:"New Arrivals",          women:"/New_Arrivals/women",              men:"/New_Arrivals/men",             kids:"/New_Arrivals/kids",                 sports:"/New_Arrivals/sports"},
    {img:"/img/best.jpeg",               name:"Best Selling",          women:"/Best_Selling/women",              men:"/Best_Selling/men",             kids:"/Best_Selling/kids",                 sports:"/Best_Selling/sports"},
    {img:"/img/suits.jpeg",              name:"Suits & Blazers",       women:"/Suits_&_Blazers/women",           men:"/Suits_&_Blazers/men",          kids:"/Suits_&_Blaz/kids",                 sports:""},
    {img:"/img/shirts.jpeg",             name:"Shirt",                 women:"/Shirt/women",                     men:"/Shirt/men",                    kids:"/Shirt/kids",                        sports:""},
    {img:"/img/t-shirts.jpeg",           name:"t-shirt",               women:"/t-shirt/women",                   men:"/t-shirt/men",                  kids:"/t-shirt/kids",                      sports:"/t-shirt/sports"},
    {img:"/img/trousers.jpeg",           name:"trousers",              women:"/trousers/women",                  men:"/trousers/men",                 kids:"/trousers/kids",                     sports:""},
    {img:"/img/cargoPants.jpeg",         name:"cargo Pants",           women:"/cargo_Pants/women",               men:"/cargo_Pants/men",              kids:"/cargo_Pants/kids",                  sports:""},
    {img:"/img/jeans.jpeg",              name:"jeans",                 women:"/jeans/women",                     men:"/jeans/men",                    kids:"/jeans/kids",                        sports:""},
    {img:"/img/nightSuitpyjamas.jpeg",   name:"nightSuit & pyjamas",   women:"/nightSuit_&_pyjamas/women",       men:"/nightSuit_&_pyjamas/men",      kids:"/nightSuit_&_pyjamas/kids",          sports:""},
    {img:"/img/Shorts.jpeg",             name:"Shorts",                women:"/Shorts/women",                    men:"/Shorts/men",                   kids:"/Shorts/kids",                       sports:""},
    {img:"/img/Joggers.jpeg",            name:"Joggers",               women:"/Joggers/women",                   men:"/Joggers/men",                  kids:"/Joggers/kids",                      sports:""},
    {img:"/img/innerwear.jpeg",          name:"innerwear",             women:"/innerwear/women",                 men:"/innerwear/men",                kids:"/innerwear/kids",                    sports:""},
    {img:"/img/Perfumes.jpeg",           name:"Perfumes",              women:"/Perfumes/women",                  men:"/Perfumes/men",                 kids:"",                                   sports:""},
  ]

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const fullName = Cookies.get('fullName');

  const token = Cookies.get('accessToken');

  const logout = async () => {
    try {
      // Log out the user on the server
      const response = await instance.post('/users/logOut')

      // Reset the cookies
      Cookies.remove('accessToken');
  
      // Clear the req.user property
      req.user = null;
  
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  

return (
  <>
    <div className='fixed z-10 w-full h-16 px-4 md:px-8 flex items-center bg-[#FAF9F8] shadow-xl '>
      <NavLink onClick={handleMenuToggle} className=" hover:text-zinc-200">
        <img className='w-6' src="/img/Menu.svg" alt="" />
      </NavLink>  

      <h1 className="text-2xl ml-[30%] md:ml-[43%] lg:ml-[47%]"> STITCH
      <span>4</span>
      U</h1>
      
    </div>

    <div className= {`menu absolute z-20 w-[300px] md:w-[450px] bg-[#FAF9F8] top-0 ${menuOpen ? 'left-0' : '-left-[100%]'} px-5 pt-5 overflow-auto`} >
      <button onClick={handleMenuToggle} className="flex justify-end w-full"> <img src="/img/close.svg" alt="" />
      </button>

        <div className="py-7 text-xl font-1 capitalize">
          {fullName ? `Hello, ${(fullName).split(" ")[0].toUpperCase()}` : 'Hello, User'}
        </div>     
        
        {data.map((item, index) => (
        <div key={index} onClick={ ()=>{handleMenuToggle()}} className="h-16 overflow-hidden hover:h-full">
          <button className="font-1 w-full text-sm text-black h-16 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 rounded-full overflow-hidden mr-3 '><img className=' object-bottom scale-110' src={item.img} alt="/" /></span> {item.name}
          </button>

        </div>
      ))}

      <div className="py-2">
        <NavLink onClick={ ()=>{handleMenuToggle(); logout(); console.log("log out")}} to="/" className="font-1 text-lg text-black py-3 capitalize tracking-wider flex items-center justify-between hover:text-red-400"> Log Out <i className="ri-logout-box-r-line"></i> </NavLink>
      </div>


    </div>

    
  </>
)}

export default Navbar
