import React, { useEffect, useState } from 'react'
import axios from '../../utils/Axios'
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Reuse_Component/ProductCard';
import { setProducts } from '../../store/newSlice'

const New = () => {
  const dispatch = useDispatch()
  const NewProduct = useSelector((state) => state.new.Products)
  const [loding, setLoading] = useState(true)
  const accessToken = Cookies.get('accessToken'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/new');
        dispatch(setProducts(response.data.data))
        console.log(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchProducts();
  }, []);

  const products = useSelector(state => state.products);

  if(loding === true){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Navbar />
      <div className="flex py-20 px-5 justify-between flex-wrap">
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
            newitem={"block"}
          />
          
        ))}
      </div>
      <Footer />
    </>
  )
}

export default New