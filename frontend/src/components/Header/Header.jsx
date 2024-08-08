import { useState } from 'react'
import React from 'react'
import './Header.css'
const Header = () => {
  const [menu,setMenu] = useState("menu");
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Craving something tasty? Get it here.</h2>
        <p>Take your time to choose from our diverse food menu, offering a variety of delicious options to satisfy every palate.</p>
        <button >View Menu</button>
      </div>
    </div>
  )
  
}

export default Header
