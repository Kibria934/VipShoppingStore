import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBeer } from 'react-icons/fa';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const [pens, setPens] = useState([]);
  useEffect(() => {
    fetch('product.json')
      .then(res => res.json())
    .then(data => setPens(data))
  },[])


  return (
    <div className='App'>

      {/*----- Navbar section --- */}
      <Header></Header>
      <p className='text-center header-content'>Select the best luxury writing instrument....</p>

      {/* ------- Card section -------- */}
      <div className="cart-container d-grid">
      <div className="cart-section">
         {
        pens.map(pen=><Cart key={pen.id} pen = {pen}></Cart>)
      }
    </div>
      <div>
        
      </div>
      </div> {/*cart section end */}
    </div>
  );
}

export default App;
