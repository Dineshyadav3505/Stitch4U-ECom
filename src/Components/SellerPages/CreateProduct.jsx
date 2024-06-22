import React, { Children, useState } from 'react'
import Navbar from '../HeaderFooter/SellerHeader'
import Footer from '../HeaderFooter/Footer'
import Input from '../Reuse_Component/Input'
import { useForm } from 'react-hook-form'
import Button from '../Reuse_Component/Button'

const CreateProduct = () => {
    const [nameError, setNameError] = useState();
    const [cartgoryError, setCartgoryError] = useState();
    const {register, handleSubmit} = useForm()
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center py-44">
    <h6 className="text-black text-2xl py-1 font-semibold uppercase">Create Product</h6>

    <form className=' space-y-5 mt-6'>
    <Input
        label={nameError || "Product Name"}
        labelclass={`text-xs capitalize ${nameError? "text-black" : "text-red"}`}
        type="text"
        className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
        placeholder="Product Name"
        {...register('ProductName',{required: true})}
    />
    <Input
        label={nameError || " Product Description"}
        labelclass={`text-xs capitalize ${nameError? "text-black" : "text-red"}`}
        type="text"
        className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
        placeholder="Product Description"
        {...register('Description',{required: true})}
    />
    <Input
        label={nameError || " Product Details"}
        labelclass={`text-xs capitalize ${nameError? "text-black" : "text-red"}`}
        type="text"
        className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
        placeholder="Product Details"
        {...register('Destails',{required: true})}
    />
    <Input
        label={nameError || " Product price"}
        labelclass={`text-xs capitalize ${nameError? "text-black" : "text-red"}`}
        type="text"
        className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
        placeholder="Product Price"
        {...register('Price',{required: true})}
    />
    <Input
        label={nameError || " Product Discount"}
        labelclass={`text-xs capitalize ${nameError? "text-black" : "text-red"}`}
        type="text"
        className='border w-60 h-8 block bg-transparent md:h-10 md:w-96 border-black rounded-md text-xs px-4 focus:outline-none'
        placeholder="Product Discount If Any "
        {...register('Price',{required: true})}
    />

    <Button   
        type="submit"
        className="bg-black text-white w-60 h-8 md:h-10 md:w-96 text-xs rounded-md"
        children="Create Product"
    />
    



    </form>

    </div>
    <Footer/>
    </>
  )
}

export default CreateProduct