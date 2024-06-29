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
  const [ addToWishList , setAddToWishList ] = useState(false)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/new');
        dispatch(setProducts(response.data.data))
        // console.log(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchProducts();
  }, []);

  
  const handleAddToWishList = () => {
    setAddToWishList(true);
    console.log(addToWishList)
    setTimeout(() => {
      setAddToWishList(false);
    }, 3000);
  }

  if(loding === true){
    return <h1>Loading...</h1>
  }


  return (
    <>
      <Navbar />
      <div className="flex py-20 px-4 gap-3 flex-wrap  relative">
        {addToWishList===true ? <h1 className='absolute left-1/2 -translate-x-1/2  z-20 bg-black rounded text-sm text-white px-4 py-1 w-1/2 text-center'>Added to WishList</h1> : null}
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
            colourCard={""}
            cart={"hidden"}
            accessToken={accessToken}
            quantityCard={"hidden"}
            newitem={"block"}
            height={""}
          />
          
        ))}
      </div>
      <Footer />
    </>
  )
}


export default New;