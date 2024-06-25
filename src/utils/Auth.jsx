import React, { useEffect } from 'react'

const Auth = () => {
  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (!accessToken) {
      navigate('/login');
    }
  });

  const update = async (data) => {

    try {
        const response = await axios.patch('/users/update', {
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
          }, {
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
      reset();


    } catch (error) {
      console.error(error.response.data.message);
      setError('An error occurred while updating your profile.');
    }
  };
    
  return 
}

export default Auth