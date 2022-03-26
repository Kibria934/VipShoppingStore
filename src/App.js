import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Summary from './Summary/Summary';
import Modal from 'react-modal';
import { TiDelete } from 'react-icons/ti';
import { CgClose } from 'react-icons/cg';
import Answer from './components/Answer/Answer';

//Modal=============
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function App() {
  // =============Modal start====================
  const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
    setIsOpen(true);
    }
    function closeModal() {
    setIsOpen(false);
  }
  //===============Modal end================
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
    console.log(pen.id);
    const existCart = cart.find(data => data.id === pen.id);
    if (existCart) {
      alert("You have already selected this item")
      return;
    }
    if (count >= 4) {
      openModal(true);
      return;
    }
    const newCart = [...cart, pen];
    setCart(newCart);
    setCount(count + 1)
  }
  const choseOnebtn = (selectedCarts) => {
    if (count!==0) {
      let rand = Math.floor(Math.random() * selectedCarts.length);
    const selectedCart = selectedCarts[rand];
      const resultElement = [selectedCart]
      setCart(resultElement);
    }
  }
 
  
  const selectCart = cart.map(singleCart => singleCart);

  return (
    <div className='App'>

      {/*----- Navbar section --- */}
      <Header count ={count}></Header>
      <p className='text-center header-content'>Select <strong>4</strong> best luxury writing instrument....</p>

      {/* ------- Card section -------- */}
      <div className="cart-container ">
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
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='cart text-danger deleteIcon'>
          <CgClose  onClick={closeModal} className='fs-4 text-black close'/>
          <TiDelete />
          <p className='fs-3'>Sorry!! <br />
            You can't buy more than 4 pen.</p>
        </div>
      
      </Modal>
      <section className='question-ans'>
        <Answer></Answer>
     </section>
    </div>
  );
}

export default App;
