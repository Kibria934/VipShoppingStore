import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Summary from './Summary/Summary';

function App() {
  const [pens, setPens] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
    .then(data => setPens(data))
  }, [])
   const resetBtn = () => {
     setCart([]);
     setCount(0)

  }

  const addToCartBtn = (pen) => {
    if (count >= 4) {
      return;
    }
    const newCart = [...cart, pen];
    setCart(newCart);
    setCount(count + 1)
    console.log(cart);
  }
  const choseOnebtn = (selectedCarts) => {
    if (count!==0) {
      let rand = Math.floor(Math.random() * selectedCarts.length);
    const selectedCart = selectedCarts[rand];
      const resultElement = [selectedCart]
      setCart(resultElement);
      console.log(cart);
    }
  }
 
  
  const selectCart = cart.map(singleCart => singleCart);
  // console.log(selectCart);

  return (
    <div className='App'>

      {/*----- Navbar section --- */}
      <Header count ={count}></Header>
      <p className='text-center header-content'>Select <strong>4</strong> best luxury writing instrument....</p>

      {/* ------- Card section -------- */}
      <div className="cart-container d-grid">
      <div className="cart-section">
         {
        pens.map(pen=><Cart addToCartBtn ={()=>addToCartBtn(pen)} key={pen.id} pen = {pen}></Cart>)
      }
    </div>
        <div className="summary-container">
          <div className='order-container'>
            <h4 className='ms-4 mt-4 mb-4'> Your Selected Pen</h4>
          {
            cart.map(selectedCart => <Summary key={selectedCart.id} selectedCart = {selectedCart}></Summary>)
            }
            <div className="button-div">
               <button onClick={()=>choseOnebtn(selectCart)} className='btn btn-success'>Chose One</button>
               <button onClick={resetBtn} className='btn btn-danger ms-4'>Reset All</button>
           </div>
      </div>
      </div>
      </div> {/*cart section end */}
    </div>
  );
}

export default App;
