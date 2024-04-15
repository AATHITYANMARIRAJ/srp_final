import React from 'react'
import Logo from "../Images/symbol.jpeg"
function Navbar(){
    return(
        <div className="navbar">
            <div className='leftSide'>
                <img src={Logo}></img>
            </div> 
            <div className='rightside'></div>
              
        </div>
    )
}

export default Navbar