import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const data = [
    {
      title: 'Customer Care',
      data: [
        { title: 'Customer Service', link: '/Customer_Service' },
        { title: 'Find a store', link: '/Find_a_store' },
        { title: 'Contact', link: '/Contact' },
        { title: 'Report a scam', link: '/Report_a_scam' },
      ],
    },
    {
      title: 'About Us',
      data: [
        { title: 'Our Story', link: '/Our_Story' },
        { title: 'Careers', link: '/Careers' },
        { title: 'Press', link: '/Press' },
        { title: 'Corporate Information', link: '/Corporate_Information' },
      ],
    },
    {
      title: 'Follow Us',
      data: [
        { title: 'Facebook', link: '/Facebook' },
        { title: 'Twitter', link: '/Twitter' },
        { title: 'Instagram', link: '/Instagram' },
        { title: 'Youtube', link: '/Youtube' },
      ],
    },
    {
      title: 'CORPORATE INFO',
      data: [
        { title: 'Customer Service', link: '/Customer_Service' },
        { title: 'Find a store', link: '/Find_a_store' },
        { title: 'Contact', link: '/Contact' },
        { title: 'Report a scam', link: '/Report_a_scam' },
      ],
    },
  ];

  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const resetForm = () => {
    setEmail('');
    setFormSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    resetForm();
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className='px-5 mb-20 md:mb-5 md:px-10'>
      {data.map((item, index) => (
        <>
        <div key={index} className="px-4 w-full md:hidden">
          <div
            className="flex justify-between items-center text-black hover:text-red-500 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <h6 className="py-2 font-1 text-lg">{item.title}</h6>
            <i className="ri-arrow-down-wide-line"></i>
          </div>
          {openIndex === index && (
            <ul className="list-none">
              {item.data.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <NavLink to={subItem.link} className="text-black text-sm ">
                    {subItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
                
        <div className="hidden md:inline-flex gap-9 items-center">
          <div className="px-4 mr-20">
            <h6 className='py-2 font-1 text-lg '>{item.title}</h6>
            <ul className="list-none">
              {item.data.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <NavLink to={subItem.link} className="text-black text-sm hover:underline">
                    {subItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </>
        


      ))}


      <div className="py-5 pt-10">
        <h5 className='text-black text-sm py-2'>SIGN UP AND SAVE</h5>
        <p  className='text-black text-xs '>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</p>

        <form onSubmit={handleSubmit}>
          <div className="inline-flex justify-between w-2/3 md:w-1/4 border-b-2 mt-7 border-black">
            <input className='w-full text-sm py-2  text-black focus:outline-none' type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email'/>
            <button className='' type="submit">
              <img className='w-full' src="/public/img/mail.svg" alt="" />
            </button>
          </div>
        </form>
      </div>

      <div className="text-xs text-center">
        <p className='py-1'>© 2024 STITCH</p>
        <p className='py-1'>Made in India, for the World 🌍</p>
      </div>
    </div>
  );
};

export default Footer;