import React from 'react'

const Home = () => {
  function checkCookie() {
    if (document.cookie.includes("user_id")) {
        console.log("user_id");
    }
  }


  return (
    <div className='h-[1000px] bg-white'>

    checkCookie();

    </div>
  )
}

export default Home