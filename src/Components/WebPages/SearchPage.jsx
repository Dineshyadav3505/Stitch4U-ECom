import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../HeaderFooter/Header';
import axios from '../../utils/Axios';
import Footer from '../HeaderFooter/Footer';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../store/searchSlice';
import { useDebounce } from 'use-debounce';
import Card from '../Reuse_Component/ProductCard';

const SearchPage = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const accessToken = Cookies.get('accessToken');
  const dispatch = useDispatch();

  const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // 500ms delay

  const product = useSelector((state) => state.search.product);
  console.log(product);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products', {
          params: {
            search: debouncedSearchTerm,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch(setSearch(response.data.data));
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
        setError('An error occurred while fetching products.');
      }
    };

    if (debouncedSearchTerm) {
      fetchProducts();
    }
  }, [debouncedSearchTerm, accessToken, dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }


  return (
    <>
      <Navbar />

      <div className="w-full min-h-full py-24 bg-[#FAF9F8] top-0 left-0">
        <div className="w-full h-16 bg-[#FAF9F8] px-3 md:px-8 flex gap-3 items-center">
          <NavLink to="/" className="hover:text-zinc-200 md:hidden">
            <img src="/img/leftarrow.svg" alt="Back" />
          </NavLink>
          <input
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-3 py-2 rounded-full text-sm text-[#2B2B2B] border-[1px] bg-transparent focus:outline-[#2B2B2B] border-[#A1A9B4]"
            type="text"
            placeholder="Search"
          />
          <NavLink to="/" className="hover:text-zinc-200 hidden md:block">
            <img src="/img/close.svg" alt="Close" />
          </NavLink>
        </div>
        {product.length > 0 ? (
          <div className="flex flex-wrap gap-4 px-4">
            {product.map((product) => (
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
        
        ) : (
          <div className="h-full">
            <div className=" px-3 py-10 rounded-md ">
              <h5 className="text-sm uppercase text-center text-black ">
                No product found
              </h5>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;