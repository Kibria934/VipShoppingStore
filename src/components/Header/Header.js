import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css'

const Header = ({count}) => {
     return (
          <div className='d-flex justify-content-between px-4 navbar'>
               <div className="logo ">
                    <h4>Pen store</h4>
               </div>
               <div className="icons fs-3">
                   <sup>{count}</sup><AiOutlineShoppingCart/>
               </div>
          </div>
     );
};

export default Header;