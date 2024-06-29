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
    console.log(type);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('/products', {
                params: {
                  type: type,
                },
            });
            dispatch(setCatahoreyCart(response.data.data))
            setLoading(false)
            console.log(response.data.data)
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
        <div className="py-20 px-5">
            {catagoryCart?.map((product) => (
                <Card
                key={product._id}
                id={product._id}
                img={product.imageURL[0]}
                name={product.name}
                colour={product.colour}
                price={product.price}
                size={product.size}
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