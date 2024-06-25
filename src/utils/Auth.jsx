import React, { useEffect } from 'react'

const Auth = () => {
  const update = async (data) => {

    try {
        const response = await axios.patch('/users/Current_User',null , {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });
      if (response.status === 200) {
        const updatedUser = response.data.data;
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error.response.data.message);
      setError('An error occurred while updating your profile.');
    }
  };

  return 
}

export default Auth