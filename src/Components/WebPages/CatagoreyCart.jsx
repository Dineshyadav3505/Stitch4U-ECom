import React, { useEffect, useState } from 'react'
import Navbar from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import axios from '../../utils/Axios'
import { useSelector, useDispatch } from'react-redux'
import { setCatahoreyCart } from '../../store/CatagoreyCartSlice'
import { useParams } from 'react-router-dom';
import Card from '../Reuse_Component/ProductCard';

const CatagoreyCart = () => {
    const dispatch = useDispatch()
    const catagoryCart = useSelector((state) => state.catagoreyCart.product)
    const [loding, setLoading] = useState(true)
    const accessToken = localStorage.getItem('accessToken');
    const { type } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`/products/type/${type}`, {
            });
            dispatch(setCatahoreyCart(response.data.data))
            setLoading(false)
          } catch (error) {
            console.error(error.response);
          }
        };
        fetchProducts();
      }, []);

    if(loding) return <h1>Loading...</h1>

  return (
    <>
    <Navbar/>
    {catagoryCart.length > 0 ? (
        <div className="py-20 px-[4vw] flex justify-around flex-wrap">
            {catagoryCart?.map((product) => (
                <Card
                key={product._id}
                id={product._id}
                img={product.imageURL[0]}
                name={product.productName}
                colour={product.color}
                price={product.price}
                size={product.size}
                discount={product.discount}
                discountedPrice={product.discountedPrice}
                discountedPercentage={product.discountedPercentage}
                heartadd={"hidden"}
                heartminus={"block"}
                colourCard={""}
                cart={"hidden"}
                accessToken={accessToken}
                quantityCard={"hidden"}
                newitem={"hidden"}
                height={""}
              />
            ))}
        </div>

    ):(null)}

    <Footer/>
    </>
  )
}

export default CatagoreyCart