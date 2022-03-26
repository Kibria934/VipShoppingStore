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
    if (count >= 4 ) {
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
         <h5> Q1: How usestate work?</h5>
        <p><strong>Ans:</strong> UseState is a place,where we can placed  variables or any value for temporary time. If we need to chang anything in ui than we use usestate for this change. Maybe it handle by any button or something else.When we put a pair of variables it return one value. in single time UseState take one variable which is before change and another variable use for after change. It return the value of after changing. Like - We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.  </p>
        <h5>Q2: Props vs state.</h5>
        <p>Ans:
          <strong>UseStat:</strong>
          <ol>
            <li>State is a local data storage.It store our value which we need to chang.</li>
            <li>We can not can't modify state value.</li>
            <li>we can read and write state.</li>
          </ol>
          <p><strong>Props:</strong>
            <ol>
              <li>The main job of props is pass the data from one components to another.</li>
              <li>Props are not Mutable.</li>
              <li>We can't write only can read the props value</li>
            </ol>

          </p>
          
        </p>
      </section>
    </div>
  );
}

export default App;
