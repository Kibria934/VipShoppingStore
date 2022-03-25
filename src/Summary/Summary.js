import React from 'react';
import './Summary.css'


const Summary = (props) => {
     const { name, img } = props.selectedCart;


     return (
          <div>
               <div>
               <h3>{ name}</h3>
               </div>
          </div>
     );
};

export default Summary;