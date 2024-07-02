import React, { useEffect, useState } from 'react';
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { useParams } from 'react-router-dom';
import axios from '../../utils/Axios';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    let interval;
    if (product && product.imageURL) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % product.imageURL.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [product]);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const addToWishlist = () => {
    console.log('Added to Wishlist');
  };

  if (loading) return <h1>Loading...</h1>;
  if (!product) return null;

  return (
    <>
      <Navbar />
      <div className="pt-16 h-44 w-full">
        <div className="w-full h-screen relative">
          {product.imageURL.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="h-full md:w-full object-cover"
              />
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {product.imageURL.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-96 mt-40 w-full bg-gray-600"></div>
      <div className="pt-10 px-5">
        <div className="flex flex-col justify-between items-center text-center text-black">
          <div>
            <h1 className="text-2xl font-1">{product.productName}</h1>
          </div>
          <div>
            <h1 className="text-base">INR {product.price}</h1>
            <p className="text-xs">(incl. of all taxes)</p>
          </div>
        </div>
      </div>
      <div className="h-44 mt-10 px-5 space-y-3 ">
        <h1 className="capitalize font-1 text-sm text-center">Select size</h1>
        <div className="flex justify-center space-x-2 mt-5">
          <button
            className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${
              selectedSize === 'xs'
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => handleSizeChange('xs')}
          >
            XS
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${
              selectedSize === 's'
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => handleSizeChange('s')}
          >
            S
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${
              selectedSize === 'm'
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => handleSizeChange('m')}
          >
            M
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${
              selectedSize === 'l'
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => handleSizeChange('l')}
          >
            L
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${
              selectedSize === 'xl'
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => handleSizeChange('xl')}
          >
            XL
          </button>
          <button
            className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${
              selectedSize === 'xxl'
                ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
            onClick={() => handleSizeChange('xxl')}
          >
            XXL
          </button>
        </div>
        {selectedSize === null ?
        (
        <div className="py-2 font-mono px-10 border font-medium flex gap-3 text-xs justify-center items-center text-black "> Select the Size</div>
        ):(
        <div onClick={addToWishlist} className="py-2 font-mono px-10 border text-xs font-medium flex gap-3 justify-center items-center text-black hover:bg-zinc-300"> Add to Cart </div>
        )}
      <div onClick={addToWishlist} className="py-2 font-mono px-10 border text-xs font-medium flex gap-3 justify-center items-center text-black hover:bg-zinc-300"> <img className='h-4' src="/img/heart.svg" alt="" /> Add to Wishlist </div>
      </div>



      <Footer />
    </>
  );
};

export default Product;