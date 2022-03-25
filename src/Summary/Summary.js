import React from 'react';
import './Summary.css'
import { MdDelete } from 'react-icons/md';

const Summary = (props) => {
     const { name, img } = props.selectedCart;


     return (  
          <div className='d-flex ms-4 mt-1 selected-cart '>
               <div className='me-4'><img src={img} style={{ width: '50px',border:'4px solid #c2fbd7', borderRadius:'50%'}} alt="" /></div>
               <div className='d-flex align-items-center ' >
                    <div>
                         <h3 className='py-1'>{name}</h3>
                    </div>
                 <div> <  MdDelete className=' deleteIcon fs-3'/></div>
                    
               </div>
               </div>
     );
};

export default Summary;