import React from 'react'
import { useSelector } from 'react-redux'
import Card from './ProductCard'
import Cookies from 'js-cookie'
import { NavLink } from 'react-router-dom'

const homeCart = ({title}
) => {


  const  NewProduct = useSelector(state => state.home.bestSellerProducts)
  const accessToken = Cookies.get('accessToken'); 
  return (
    <>
    {NewProduct?.length > 0 ? (
    <div className="px-5">
        <h1 className="py-4 font-1 ">Best Seller</h1>
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">
        <div className="py-1 flex gap-4">
            {NewProduct?.map((product) => (
            <Card
                id={product.productId._id}
                img={product.productId.imageURL[0]}
                name={product.productId.name}
                colour={product.productId.colour}
                price={product.productId.price}
                size={product.productId.size}
                heartadd={"hidden"}
                heartminus={"block"}
                cart={"hidden"}
                accessToken={accessToken}
                quantityCard={"hidden"}
                newitem={"hidden"}
                colourCard={"hidden"}
            />
            ))}
        </div>
        </div>
    </div>
    ) : null}
    </>
  )
}

export default homeCart