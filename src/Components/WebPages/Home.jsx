import React from 'react'
import Card from '../Reuse Component/ProductCard';

const Home = () => {
  function checkCookie() {
    if (document.cookie.includes("user_id")) {
        console.log("user_id");
    }
  }


  return (
    <div className='h-[1000px] bg-white py-24 px-4 flex gap-3 overflow-x-auto'>
      <div className="flex gap-4">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </div>
    </div>
  )
}

export default Home