import React, { useState, useEffect } from 'react';
import { NavLink,  useNavigate } from 'react-router-dom';
import instance from '../../utils/Axios';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse?.(localStorage.getItem('user'));
  const fullName = user?.fullName;
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [catergoryOpen, setCatergoryOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [colourOpen, setColourOpen] = useState(false);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  const filterMenuToggle = () => {
    setFilterOpen(!filterOpen);
  };
  const catergoryToggle = () =>{
    setCatergoryOpen(!catergoryOpen)
  };
  const sizeToggle = () =>{
    setSizeOpen(!sizeOpen);
  };
  const priceToggle = () =>{
    setPriceOpen(!priceOpen);
  };
  const colourToggle = () =>{
    setColourOpen(!colourOpen);
  };
  
  const cookie = document.cookie;
  const cookieObj = cookie.split(';').reduce((acc, curr) => {
    const [key, value] = curr.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});
  const accessToken = cookieObj.accessToken;

  const logout = async () => {
    try {
      if (accessToken) {
        const response = await instance.post('/users/logOut', null, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        localStorage.removeItem('user');
        document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        localStorage.removeItem('accessToken');
        navigate('/')
      } else {
        console.error('Error logging out: No access token found');
      }
    } catch (error) {
      console.error('Error logging out:', error.response.data.message);
    }
  };

  const data = [
    { img: "/img/new.jpeg", name: "New Arrivals", women: "/New_Arrivals/women", men: "/New_Arrivals/men", kids: "/New_Arrivals/kids", sports: "/New_Arrivals/sports" },
    { img: "/img/best.jpeg", name: "Best Selling", women: "/Best_Selling/women", men: "/Best_Selling/men", kids: "/Best_Selling/kids", sports: "/Best_Selling/sports" },
    { img: "/img/suits.jpeg", name: "Suits & Blazers", women: "/Suits_&_Blazers/women", men: "/Suits_&_Blazers/men", kids: "/Suits_&_Blaz/kids", sports: "" },
    { img: "/img/shirts.jpeg", name: "Shirt", women: "/Shirt/women", men: "/Shirt/men", kids: "/Shirt/kids", sports: "" },
    { img: "/img/t-shirts.jpeg", name: "t-shirt", women: "/t-shirt/women", men: "/t-shirt/men", kids: "/t-shirt/kids", sports: "/t-shirt/sports" },
    { img: "/img/trousers.jpeg", name: "trousers", women: "/trousers/women", men: "/trousers/men", kids: "/trousers/kids", sports: "" },
    { img: "/img/cargoPants.jpeg", name: "cargo Pants", women: "/cargo_Pants/women", men: "/cargo_Pants/men", kids: "/cargo_Pants/kids", sports: "" },
    { img: "/img/jeans.jpeg", name: "jeans", women: "/jeans/women", men: "/jeans/men", kids: "/jeans/kids", sports: "" },
    { img: "/img/nightSuitpyjamas.jpeg", name: "nightSuit & pyjamas", women: "/nightSuit_&_pyjamas/women", men: "/nightSuit_&_pyjamas/men", kids: "/nightSuit_&_pyjamas/kids", sports: "" },
    { img: "/img/Shorts.jpeg", name: "Shorts", women: "/Shorts/women", men: "/Shorts/men", kids: "/Shorts/kids", sports: "" },
    { img: "/img/Joggers.jpeg", name: "Joggers", women: "/Joggers/women", men: "/Joggers/men", kids: "/Joggers/kids", sports: "" },
    { img: "/img/innerwear.jpeg", name: "innerwear", women: "/innerwear/women", men: "/innerwear/men", kids: "/innerwear/kids", sports: "" },
    { img: "/img/Perfumes.jpeg", name: "Perfumes", women: "/Perfumes/women", men: "/Perfumes/men", kids: "", sports: "" },
  ];

  return (
    <>
      <div className="fixed z-10 w-full h-16 px-4 md:px-8 flex justify-between items-center bg-[#FAF9F8] shadow-xl">
        <NavLink onClick={handleMenuToggle} className="hover:text-zinc-200">
          <img className="w-6" src="/img/Menu.svg" alt="" />
        </NavLink>

        <h1 className="text-2xl"> STITCH
          <span>4</span>
          U</h1>

        <div className="flex justify-between items-center md:gap-5">

          {accessToken ? 
          <NavLink to="/profile"> 
            <img className="w-6 hidden md:block" src="/img/user.svg" alt="" />
          </NavLink> 
          :
          <NavLink to="/logIn" > 
            <img className="w-6 hidden md:block" src="/img/userlogin.svg" alt="" />
          </NavLink> }

          <NavLink to="/search">
            <img className="w-6" src="/img/Search.svg" alt="" />
          </NavLink>

          {accessToken ? 
          <NavLink to="/wishlist">
            <img className="w-6 hidden md:block" src="/img/heart.svg" alt="" />
          </NavLink>
          :
          <NavLink to="/login">
            <img className="w-6 hidden md:block" src="/img/heart.svg" alt="" />
          </NavLink>
          }

          {accessToken ?
          <NavLink to="/cart">
            <img className="w-6 hidden md:block" src="/img/cart.svg" alt="" />
          </NavLink>
          :
          <NavLink to="/login">
            <img className="w-6 hidden md:block" src="/img/cart.svg" alt="" />
          </NavLink>}

        </div>
      </div>

      {filterOpen === true ? (
        <div  className="fixed z-10 bottom-28 w-full bg-white border-t-[1px] border-black md:hidden">
          <div onClick={catergoryToggle} className="w-full py-3 px-5 bg-black flex justify-between items-center gap-2">
            <h4 className="text-base capitalize">catergory</h4>
            <img src="/img/downarrow.svg" alt="" />
          </div>
          {catergoryToggle === true ?
            <div className="h-44 overflow-auto">
              <div className="">img</div>
              <div className="">imc</div>
              <div className="">imc</div>
            </div>: null
          }

          <div onClick={sizeToggle} className="w-full py-3 px-5 flex justify-between items-center gap-2">
            <h4 className="text-base capitalize">size</h4>
            <img src="/img/downarrow.svg" alt="" />
          </div>
         
          <div onClick={priceToggle} className="w-full py-3 px-5 flex justify-between items-center gap-2">
            <h4 className="text-base capitalize">price</h4>
            <img src="/img/downarrow.svg" alt="" />
          </div>

          <div onClick={colourToggle} className="w-full py-3 mb-4 px-5 flex justify-between items-center gap-2">
            <h4 className="text-base capitalize"> colour</h4>
            <img src="/img/downarrow.svg" alt="" />
          </div>

        </div>
      )
      : null}

      {location.pathname === '/search' ?
        <div onClick={filterMenuToggle} className="fixed z-10 bottom-16 w-full md:hidden bg-white border-t-[1px] border-black">
          <div className="w-full py-4 px-5 flex justify-center items-center gap-2">
            <img src="/img/filter.svg" alt="" />
            <h4 className="text-base capitalize">filter</h4>
          </div>
        </div>
       : 
        null
      }

      <div className="fixed z-10 bottom-0 w-full h-16 px-6 flex justify-between items-center bg-[#FAF9F8] drop-shadow-[0_-35px_35px_rgba(0,0,0,0.3)] md:hidden">
                       <NavLink to="/">          <img className="w-6 mx-auto" src="/img/home.svg"  alt="" /><span className='text-xs text-block uppercase'>Home      </span> </NavLink>
                       <NavLink to="/new">       <img className="w-6 mx-auto" src="/img/new.svg"   alt="" /><span className='text-xs text-block uppercase'>New       </span> </NavLink>
                       <NavLink to="/wishlist">  <img className="w-6 mx-auto" src="/img/heart.svg" alt="" /><span className='text-xs text-block uppercase'>WishList  </span> </NavLink>
                       <NavLink to="/cart">      <img className="w-6 mx-auto" src="/img/cart.svg"  alt="" /><span className='text-xs text-block uppercase'>BAG       </span> </NavLink>
        {accessToken ? <NavLink to="/profile">   <img className="w-6 mx-auto" src="/img/user.svg"  alt="" /><span className='text-xs text-block uppercase'>Profile   </span> </NavLink> :<NavLink to="/logIn"> <img className="w-6 mx-auto" src="/img/user.svg" alt="" /><span className='text-xs text-block uppercase'>Login</span></NavLink> }
      </div>

      <div
        className={`menu absolute z-20 w-[300px] md:w-[450px] bg-[#FAF9F8] top-0 p-6 ${menuOpen ? 'left-0' : '-left-[100%]'}`}
        onClick={handleMenuToggle}
      >
        <button className="flex justify-end w-full">
          <img src="/img/close.svg" alt="" />
        </button>

        <div className="py-7 text-xl font-1 capitalize">
          {fullName ? `Hello, ${(fullName).split(" ")[0] }` : 'Hello, User'}
        </div>

        {data.map((item, index) => (
          <div key={index} className="h-16 overflow-hidden hover:h-full">
            <button className="font-1 w-full text-sm text-black h-16 capitalize tracking-wider flex items-center hover:text-red-400">
              <span className="block h-12 w-12 rounded-full overflow-hidden mr-3">
                <img className="object-bottom scale-110" src={item.img} alt="/" />
              </span>
              {item.name}
            </button>

            <NavLink onClick={handleMenuToggle} to={item.women} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400">
              <span className="block h-12 w-12 rounded-full overflow-hidden mr-3">
                <img className="object-cover scale-125" src="/img/women.jpeg" alt="/" />
              </span>
              Women
            </NavLink>

            <NavLink onClick={handleMenuToggle} to={item.men} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400">
              <span className="block h-12 w-12 rounded-full overflow-hidden mr-3">
                <img className="object-center" src="/img/men.jpeg" alt="/" />
              </span>
              Men
            </NavLink>

            {item.kids.length > 0 ? (
              <NavLink onClick={handleMenuToggle} to={item.kids} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400">
                <span className="block h-12 w-12 rounded-full overflow-hidden mr-3">
                  <img className="object-center scale-125" src="/img/kids.jpg" alt="/" />
                </span>
                kids
              </NavLink>
            ) : (
              ""
            )}

            {item.sports.length > 0 ? (
              <NavLink onClick={handleMenuToggle} to={item.sports} className="font-1 text-sm text-black h-16 px-10 capitalize tracking-wider flex items-center hover:text-red-400">
                <span className="block h-12 w-12 rounded-full overflow-hidden mr-3">
                  <img className="object-center" src="/img/sports.jpeg" alt="/" />
                </span>
                Sports
              </NavLink>
            ) : (
              ""
            )}
          </div>
        ))}
        {accessToken ? <div className="py-2">
            <NavLink onClick={() => { handleMenuToggle(); logout();}} to="/" className="font-1 text-lg text-black py-3 capitalize tracking-wider flex items-center justify-between hover:text-red-400">
              Log Out <i className="ri-logout-box-r-line"></i>
            </NavLink>
          </div>
        :
        null
            }
      </div>
    </>
  );
};

export default Navbar;