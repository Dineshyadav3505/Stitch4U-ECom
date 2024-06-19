import React from 'react'
import Card from '../Reuse Component/ProductCard';
import CategoryCard from '../Reuse Component/CategoryCard';

const Home = () => {
  function checkCookie() {
    if (document.cookie.includes("user_id")) {
        console.log("user_id");
    }
  }


  return (
    <div className="flex flex-col">
      <div className=' bg-white pt-24 py-10 px-3 p-y-2 flex gap-3 overflow-x-auto '>
        <div className="flex gap-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

      <div className=' bg-white py-10 px-3'>
        <div className="flex justify-around flex-wrap">
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
        </div>
      </div>
      

    </div>
  )
}

export default Home