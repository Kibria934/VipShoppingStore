import React from 'react';
import './Cart.css';
import { BsCartCheck } from 'react-icons/bs';


const Cart = (props) => {
     const { addToCartBtn } = props;
     const { name, price, img, id, index, seller } = props.pen;
     return (
          <div className="cart">
               <div>
                    <img src= {img} alt="" />
               </div>
               <div className='ms-3 mt-3'>
                    <h4>Pen's name: {name}</h4>
                    <h5>Price:$ {price}</h5>
                    <h5>Brand name: { seller}</h5>
               </div>
               <div>
                    <button onClick={addToCartBtn}> Add to Cart <BsCartCheck style={{ marginLeft: '10px', marginBottom:'5px'}}/> </button>
               </div>
          </div>
     );
};

export default Cart;