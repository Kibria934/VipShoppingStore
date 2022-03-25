import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBeer } from 'react-icons/fa';
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
  

  const addToCartBtn = (pen) => {
    setCount(count + 1)
    console.log(cart);
    const newCart = [...cart, pen];
    setCart(newCart);
  }

  return (
    <div className='App'>

      {/*----- Navbar section --- */}
      <Header count ={count}></Header>
      <p className='text-center header-content'>Select the best luxury writing instrument....</p>

      {/* ------- Card section -------- */}
      <div className="cart-container d-grid">
      <div className="cart-section">
         {
        pens.map(pen=><Cart addToCartBtn ={()=>addToCartBtn(pen)} key={pen.id} pen = {pen}></Cart>)
      }
    </div>
        <div className="summary-container">
                <div className='order-container'>
          {
            cart.map(selectedCart => <Summary key={selectedCart.id} selectedCart = {selectedCart}></Summary>)
        }
      </div>
      </div>
      </div> {/*cart section end */}
    </div>
  );
}

export default App;
