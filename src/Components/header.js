import React from 'react';
import img1 from '../Images/header2.jpeg';
const Header = () => {
  return (
    <div>
    <header>
      <img src={img1} alt="Header Image" 
      style={{ width: '100%',height: '150PX', display:'flex',alignItems:'flex-start'
       
    }} 
      />
    </header>
 
    
    </div>
  );
}

export default Header;
