import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css'

const Header = () => {
     return (
          <div className='d-flex justify-content-between px-4 navbar'>
               <div className="logo ">
                    <h4>Pen shop</h4>
               </div>
               <div className="icons fs-3">
                   <sup>0</sup><AiOutlineShoppingCart/>
               </div>
          </div>
     );
};

export default Header;