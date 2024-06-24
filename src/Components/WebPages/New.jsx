import React, { useEffect, useState } from 'react'
import axios from '../../utils/Axios'

const New = () => {

    useState(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/product');
                console.log(response);
            } catch (error) {
                // Handle the error
            }
        };
    }, []);

  return (
    <div>New</div>
  )
}

export default New