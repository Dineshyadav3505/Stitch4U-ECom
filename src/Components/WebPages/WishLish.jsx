import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from '../../utils/Axios'
import Navbar from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import { setWishList } from '../../store/WishList'
import Card from '../Reuse_Component/ProductCard'

const WishList = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)
  const accessToken = Cookies.get('accessToken'); 
  const dispatch = useDispatch();
  const WishList = useSelector((state) => state.wishList.product)
  // const id = WishList.map((item) => item.productId._id)
  // console.log(id)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/users/WishListitem', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        dispatch(setWishList(response.data.data))
        setLoading(false)
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching products.');
        setLoading(false)
      }
    };

    fetchProducts();
  }, [dispatch,]);

  if(loading === true){
    return (
    <h1>loading ....</h1>
    )
  }



  return (

    <>
    <Navbar/>
    <div className='w-full bg-[#FAF9F8] pt-16 '>
          <div className="">
          <div className=" px-3 py-10 rounded-md ">
            <h5 className='text-base uppercase text-center text-black font-1 font-semibold'>favourites</h5>
            <div className="flex justify-around flex-wrap">
              {WishList?.length > 0 ? (WishList?.map((item) => (
                 <Card
                  key={item.productId._id}
                  id={item.productId._id}
                  img={item.productId.imageURL[0]}
                  name={item.productId.productName}
                  colour={item.productId.color}
                  price={item.productId.price}
                  discount={item.productId.discount}
                  discountedPrice={item.productId.discountedPrice}
                  discountedPercentage={item.productId.discountedPercentage}
                  heart={""}
                  cart={""}
                  heartadd={"block"}
                  heartminus={"hidden"}
                  accessToken={accessToken}
                  quantityCard={"hidden"}
                  colourCard={"hidden"}

                />
              ))):(
                <div className='flex flex-col items-center mx-auto py-4 '>
                    <h6 className='text-black text-4xl font-semibold uppercase'>Favourites </h6>
                    <h6 className='text-black text-sm mt-10 font-semibold  '>SAVE YOUR FAVOURITE ITEMS </h6>
                    <h6 className='text-black text-sm mt-4 font-medium text-center '>Want to save the items that you love? Just click on the heart symbol beside the item and it will show up here. </h6>
                    <NavLink to="/" className='bg-black text-white mt-10 px-4 py-2 rounded-md'>SHOP NOW</NavLink>
                </div>
              )}
            </div>
          </div>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default WishList



