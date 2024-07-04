import React, { useEffect, useState } from 'react'
import Navbar from '../HeaderFooter/Header'
import axios from '../../utils/Axios'
import Cookies from 'js-cookie';
import Footer from '../HeaderFooter/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { setUserAddress } from '../../store/userAddressSlice'

const UserAddress = () => {
  const accessToken = Cookies.get('accessToken'); 
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userAddress = useSelector((state) => state.userAddress.userAddress);

  useEffect(() => {
    const fetchUserAddress = async () => {
      try {
        const response = await axios.get(`/users/userAddress`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        dispatch(setUserAddress(response.data.data)); 
        setIsLoading(false);
      } catch (error) {
        console.error(error.response.data.message);
        setIsLoading(false);
      }
    };
    fetchUserAddress();
  }, [accessToken, dispatch]);

  const deleteAddress = async (id) => {
    console.log(id)
    try {
      await axios.delete(`/users/userAddressDelete/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      dispatch(setUserAddress(userAddress.filter((item) => item.id !== id))); 
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const order = () => {
    console.log('order')
  } 

  return (
    <>
      <Navbar />
      <div className="py-16 px-5 flex flex-col justify-center items-center space-y-5">
        <div className="py-2 w-full">
          <h1 className="capitalize font-1 text-base">User Address</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            userAddress.length > 0 ? (
              userAddress.map((item) => (
                <div key={item.id} className="py-2 border rounded-md px-2 mt-2 font-medium font-sans relative">
                  <button className='flex gap-2 border px-2 text-sm justify-center items-center rounded-md absolute right-2' onClick={() => deleteAddress(item._id)}><img className='h-4' src="/img/delete.svg" alt="" /> Delete</button>
                  <p className="text-sm text-black capitalize">{item.name}</p>
                  <p className="text-sm text-black capitalize">{item.addressLine1}</p>
                  <p className="text-sm text-black capitalize">{item.addressLine2}</p>
                  <p className="text-sm text-black capitalize">{item.city}, {item.country}, {item.pincode}</p>
                  <p className="text-sm text-black capitalize">{item.phoneNumber}</p>
                </div>
              ))
            ) : (
              <form action="">
                <p className="text-sm text-black capitalize">No address found</p>
                <button type="submit" className="mt-2 bg-black text-white py-2 px-4 rounded-md">
                  Add New Address
                </button>
              </form>
            )
          )}
        </div>
        <div className=" flex  justify-around w-full">
          <button onClick={order} className=" text-center bg-black text-white px-3 py-1 rounded-md capitalize ">
            Add Address
          </button>
          <button onClick={order} className=" text-center bg-black text-white px-3 py-1 rounded-md capitalize ">
            confirm Order 
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UserAddress