import React, { useEffect, useState } from 'react';
import Navbar from '../HeaderFooter/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../HeaderFooter/Footer';
import { useParams } from 'react-router-dom';
import axios from '../../utils/Axios';
import ProductSilde from '../Reuse_Component/ProductSilde';
import Cookies from 'js-cookie';


const Product = () => {
  const accessToken = Cookies.get('accessToken'); 
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };
    fetchProduct();
  }, [id]);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const addToWishlist = () => {
    console.log('Added to Wishlist');
  };

  if (loading) return <h1>Loading...</h1>;
  if (!product) return null;

  const addToCart = async () => {
    try {
      const response = await axios.post(`/users/addTocart/${id}`, {
        productSize: selectedSize,
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      setCart("Item added to cart successfully");

      setTimeout(() => {
        navigate('/cart');
      }, 1000);
      

    } catch (error) {
      setCart(error.response.data.message);

      setTimeout(() => {
        navigate('/cart');
      }, 1000);
      

    }
  }


  return (
    <>
      <Navbar />
      <div className="lg:flex w-full ">
        <ProductSilde product={product}/>
        <div className=" lg:mt-20 lg:w-1/2 flex flex-col items-center">
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
          <div className="h-44 mt-10 px-5 space-y-3 relative ">
            <h1 className="capitalize font-1 text-sm text-center">Select size</h1>
            {cart.length > 0 ? (<h6 className='text-center bg-black text-xs py-1 text-white'>{cart}</h6>): null }
            <div className="flex justify-center space-x-2 mt-5 text-xs ">
              <button
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedSize === 'xs'
                    ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => handleSizeChange('xs')}
              >
                XS
              </button>
              <button
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedSize === 's'
                    ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => handleSizeChange('s')}
              >
                S
              </button>
              <button
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedSize === 'm'
                    ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => handleSizeChange('m')}
              >
                M
              </button>
              <button
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedSize === 'l'
                    ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => handleSizeChange('l')}
              >
                L
              </button>
              <button
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedSize === 'xl'
                    ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => handleSizeChange('xl')}
              >
                XL
              </button>
              <button
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${
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
            <div onClick={addToCart}  className="py-2 font-mono px-10 border text-xs font-medium flex gap-3 justify-center items-center text-black hover:bg-zinc-300 "> Add to Cart  </div>
            )}
          <div onClick={addToWishlist} className="py-2 font-mono px-10 border text-xs font-medium flex gap-3 justify-center items-center text-black hover:bg-zinc-300 "> <img className='h-4' src="/img/heart.svg" alt="" /> Add to Wishlist </div>
          </div>

          <div className="px-5 py-3">
            <h1 className='text-base font-1 uppercase'>DESCRIPTION</h1>
            <p className='text-xs px-1'>{product.description}</p>

            <h6 className='text-sm font-1 mt-3 uppercase'> Size & Fit </h6>
            <p className='text-xs px-1'>{product.fit}</p>

            <h6 className='text-sm font-1 mt-3 uppercase'> Wash Care </h6>
            {product.washCare.map((item, index) => (
              <p key={index} className='text-xs px-1'>{item}</p>
            ))}

          </div>
        </div>
      </div>



      <Footer />
    </>
  );
};

export default Product;