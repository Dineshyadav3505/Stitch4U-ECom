import React, { useEffect, useState } from 'react'
import Card from '../Reuse_Component/ProductCard';
import CategoryCardSmall from '../Reuse_Component/CategoryCardSmall';
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import axios from '../../utils/Axios';
import { useSelector, useDispatch } from'react-redux'
import {setBestSellerProducts, setSwiperImg, setNewArrivedProducts} from '../../store/homeSlice'
import Swiper from '../Reuse_Component/Swiper';
import HomeCartArival from '../Reuse_Component/HomeCartArival';
import HomeCartBest from '../Reuse_Component/HomeCartBest';
import CategoryCard from '../Reuse_Component/CategoryCard';



const Home = () => {
  const dispatch = useDispatch()
  const [loding, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/best/');
        dispatch(setBestSellerProducts(response.data.data))
        // console.log(response.data.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/new/');
        dispatch(setNewArrivedProducts(response.data.data))
        // console.log(response.data.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/img/');
        dispatch(setSwiperImg(response.data.data))
        // console.log(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  if(loding === true){
    return <h1>Loading...</h1>
  }
  

  return (
    <>
    <Navbar/>
    <div className="flex flex-col pt-16">
      <Swiper/>
      <CategoryCardSmall/>
      <HomeCartArival/>
      <CategoryCard/>
      <HomeCartBest/>
    </div>
    <Footer/>          
    </>
  )
}

export default Home