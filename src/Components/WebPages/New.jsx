import React, { useEffect, useState } from 'react'
import axios from '../../utils/Axios'
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';

const New = () => {

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('/products');
            console.log(response.data.data)
            // setProducts(response.data.data);
          } catch (error) {
            console.error(error);
            setError('An error occurred while fetching products.');
          }
        };
    
        fetchProducts();
      }, []);

  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center py-44">

        
    </div>

    <Footer/>
    </>
  )
}

export default New