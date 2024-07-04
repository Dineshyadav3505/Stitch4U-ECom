import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { useSelector, useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import axios from '../../utils/Axios'
import { setCart } from '../../store/cartSlice';
import { setProduct } from '../../store/orderSlice';
import CartCard from '../Reuse_Component/CartCard';

const Cart = () => {
  const accessToken = Cookies.get('accessToken'); 
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart.product)
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/users/cart',{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }, 
        });
        dispatch(setCart(response.data.data))
        dispatch(setProduct(response.data.data))
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [accessToken, dispatch]);

  const total = Cart.map((item)=>{
    return item.productId?.price 
  })
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  const totalPrice = sum

  return (
    <>
      <Navbar/>
      <div className="md:flex">
        <div className='w-[100%] lg:min-w-[60%] bg-[#FAF9F8] pt-16 '>
          <div className="">
            <div className=" px-3 py-10 rounded-md ">
              <h5 className='text-base uppercase text-center font-1 font-semibold'>Shopping bag</h5>
              <div className="flex gap-3 md:gap-12 lg:gap-16 py-3 md:px-6 flex-wrap">
                {Cart.length > 0 ? (
                  Cart.map((item) => (
                    item.productId && (
                      <CartCard
                        key={item._id}
                        id={item.productId._id}     
                        img={item.productId}
                        productName={item.productId.productName}
                        price={item.productId.price}
                        color={item.productId.color}
                        discount={item.productId.discount}
                        discountedPrice={item.productId.discountedPrice}
                        quantity={item.quantity}
                        size={item.productSize}
                      />
                    )
                  ))
                ) : (
                  <div className='flex flex-col items-center mx-auto py-4 '>
                    <h6 className='text-black text-4xl font-semibold uppercase'>Shopping Bag</h6>
                    <h6 className='text-black text-sm mt-10 font-semibold uppercase '>Your Shopping Bag is empty!</h6>
                    <h6 className='text-black text-sm mt-4 font-medium text-center '>
                      Want to save the items that you purchase? Just click on the Add symbol beside the item and it will show up here.
                    </h6>
                    <NavLink to="/" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>
                      SHOP NOW
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the code */}
      </div>
      <Footer/>
    </>
  )
}

export default Cart