import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../utils/Axios';
import Navbar from '../HeaderFooter/SellerHeader';
import Footer from '../HeaderFooter/Footer';
import Input from '../Reuse_Component/Input';
import Button from '../Reuse_Component/Button';
import Cookies from 'js-cookie';

const CreateProduct = () => {
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [detailsError, setDetailsError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [discountError, setDiscountError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [colorError, setColorError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [sizeError, setSizeError] = useState('');
  const [fabricError, setFabricError] = useState('');
  const [imageError, setImageError] = useState('');
  const { register, handleSubmit } = useForm();
  const accessToken = Cookies.get('accessToken');
  console.log(accessToken)

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('details', data.details);
      formData.append('price', data.price);
      formData.append('discount', data.discount);
      formData.append('type', data.type);
      formData.append('color', data.color);
      formData.append('quantity', data.quantity);
      formData.append('size', data.size);
      formData.append('fabric', data.fabric);

      for (let i = 0; i < data.imageURL.length; i++) {
        formData.append('imageURL', data.imageURL[i]);
      }

      const response = await axios.post('/products/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': accessToken
        },
      });

      console.log('Product created:', response.data);
      // Handle successful product creation
    } catch (error) {
      console.error('Error creating product:', error.response.data.message);
      // Handle error
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-44">
        <h6 className="text-black text-2xl py-1 font-semibold uppercase">Create Product</h6>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
          <Input
            label={nameError || 'Product Name'}
            labelClass={`text-xs capitalize ${nameError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Name"
            {...register('name', { required: true, onChange: (e) => setNameError('') })}
          />
          <Input
            label={descriptionError || 'Product Description'}
            labelClass={`text-xs capitalize ${descriptionError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Description"
            {...register('description', { required: true, onChange: (e) => setDescriptionError('') })}
          />
          <Input
            label={detailsError || 'Product Details'}
            labelClass={`text-xs capitalize ${detailsError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Details"
            {...register('details', { required: true, onChange: (e) => setDetailsError('') })}
          />
          <Input
            label={priceError || 'Product Price'}
            labelClass={`text-xs capitalize ${priceError ? 'text-black' : 'text-red-500'}`}
            type="number"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Price"
            {...register('price', { required: true, onChange: (e) => setPriceError('') })}
          />
          <Input
            label={discountError || 'Product Discount'}
            labelClass={`text-xs capitalize ${discountError ? 'text-black' : 'text-red-500'}`}
            type="number"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Discount If Any"
            {...register('discount', { required: true, onChange: (e) => setDiscountError('') })}
          />
          <Input
            label={categoryError || 'Product Category'}
            labelClass={`text-xs capitalize ${categoryError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Category"
            {...register('type', { required: true, onChange: (e) => setCategoryError('') })}
          />
          <Input
            label={colorError || 'Product Color'}
            labelClass={`text-xs capitalize ${colorError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Color"
            {...register('color', { required: true, onChange: (e) => setColorError('') })}
          />
          <Input
            label={quantityError || 'Product Quantity'}
            labelClass={`text-xs capitalize ${quantityError ? 'text-black' : 'text-red-500'}`}
            type="number"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Quantity"
            {...register('quantity', { required: true, onChange: (e) => setQuantityError('') })}
          />
          <Input
            label={sizeError || 'Product Size'}
            labelClass={`text-xs capitalize ${sizeError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Size"
            {...register('size', { required: true, onChange: (e) => setSizeError('') })}
          />
          <Input
            label={fabricError || 'Product Fabric'}
            labelClass={`text-xs capitalize ${fabricError ? 'text-black' : 'text-red-500'}`}
            type="text"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Fabric"
            {...register('fabric', { required: true, onChange: (e) => setFabricError('') })}
          />
          <Input
            label={imageError || 'Product Images'}
            labelClass={`text-xs capitalize ${imageError ? 'text-black' : 'text-red-500'}`}
            type="file"
            className="border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none"
            placeholder="Product Images"
            multiple
            {...register('imageURL', { required: true, onChange: (e) => setImageError('') })}
          />
          <Button
            type="submit"
            className="bg-black text-white w-60 h-8 md:h-10 md:w-96 text-xs rounded-md"
            children="Create Product"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateProduct;