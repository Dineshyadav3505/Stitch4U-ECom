import React from 'react'
import Card from '../Reuse_Component/ProductCard';
import CategoryCard from '../Reuse_Component/CategoryCard';
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

const Home = () => {


  return (
    <>
    <Navbar/>
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
    <Footer/>
    </>
  )
}

export default Home