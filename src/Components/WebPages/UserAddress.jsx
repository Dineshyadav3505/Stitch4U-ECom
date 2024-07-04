import React, { useEffect, useState } from 'react'
import Navbar from '../HeaderFooter/Header'
import axios from '../../utils/Axios'
import Cookies from 'js-cookie';
import Footer from '../HeaderFooter/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { setUserAddress } from '../../store/userAddressSlice'
import Input from '../Reuse_Component/Input';

const UserAddress = () => {
  const accessToken = Cookies.get('accessToken'); 
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userAddress = useSelector((state) => state.userAddress.userAddress);
  const [newAddress, setNewAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    pincode: '',
    phoneNumber: ''
  });

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

  const addAddress = () => { 
    setNewAddress(!newAddress)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      pincode: '',
      phoneNumber: ''
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/userAddress', formData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      if (response.data.success) {
        dispatch(setUserAddress([...userAddress, response.data.data])); 
        resetForm();
        setNewAddress(false);
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="py-16 px-5 flex flex-col justify-center items-center space-y-5 relative">
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
          <button onClick={addAddress} className=" text-center bg-black text-white px-3 py-1 rounded-md capitalize ">
            Add Address
          </button>
          <button onClick={order} className=" text-center bg-black text-white px-3 py-1 rounded-md capitalize ">
            confirm Order 
          </button>
        </div>
      </div>

      {newAddress === true ? (
        <div className=' absolute top-16 h-full w-full bg-white px-5 py-3'>
          <form onSubmit={handleSubmit}>
            <h1 className='font-sans capitalize font-semibold'>New Address</h1>
            <Input
            label='Name'
            labelclass="text-xs"
            type="text"
            placeholder="Name"
            name="name"
            className="w-full border-[1px] text-sm rounded-md px-2 py-1"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value })}
            />
            <Input
            label='Address Line 1'
            labelclass="text-xs"
            type="text"
            placeholder="house No- "
            name="addressLine1"
            className="w-full border-[1px] text-sm rounded-md px-2 py-1"
            value={formData.addressLine1}
            onChange={(e) => setFormData({...formData, addressLine1: e.target.value })}
            />
            <Input
            label='Address Line 2'
            labelclass="text-xs"
            type="text"
            placeholder="Area"
            name="addressLine2"
            className="w-full border-[1px] text-sm rounded-md px-2 py-1"
            value={formData.addressLine2}
            onChange={(e) => setFormData({...formData, addressLine2: e.target.value })}
            />
            <Input
            label='City'
            labelclass="text-xs"
            type="text"
            placeholder="City"
            name="city"
            className="w-full border-[1px] text-sm rounded-md px-2 py-1"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value })}
            />
            <Input
            label='Pincode'
            labelclass="text-xs"
            type="text"
            placeholder="Pincode"
            name="pincode"
            className="w-full border-[1px] text-sm rounded-md px-2 py-1"
            value={formData.pincode}
            onChange={(e) => setFormData({...formData, pincode: e.target.value })}
            />
            <Input
            label='Phone Number'
            labelclass="text-xs"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            className="w-full border-[1px] text-sm rounded-md px-2 py-1"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value })}
            />
            <button type="submit" className="mt-2 bg-black text-white py-2 px-4 rounded-md">
              Save Address
            </button>
          </form>
        </div>
      ) : null }
      <Footer />
    </>
  )
}

export default UserAddress