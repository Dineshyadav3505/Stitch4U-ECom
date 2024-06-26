import React, { useEffect, useState } from 'react'
import axios from '../../utils/Axios'
import Navbar from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Reuse_Component/ProductCard';
import { setProducts } from '../../store/newSlice'

const New = () => {
  const dispatch = useDispatch()
  const NewProduct = useSelector((state) => state.new.Products)
  const [loding, setLoading] = useState(true)
  console.log(NewProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        dispatch(setProducts(response.data.data))
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
        {NewProduct.map((product) => (
          <Card
          key={product._id}
          id={product._id}
          img={product.imageURL[0]}
          colour={product.colour}
          price={product.price}
          orignalPrice={product.price}
          fit={product.fit}
          />
          
        ))}
      </div>
      <Footer />
    </>
  )
}

export default New