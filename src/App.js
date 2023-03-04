
import './App.css';
import CheckoutPage from './components/CheckoutPage';
import NavBar from './components/NavBar';
//import Product from './components/Product';
import Products from './components/Products';
import {BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';

function App(){
  
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout-page" element={<CheckoutPage />} />
        </Routes>
      </>
    </Router>
  ); 
}

export default App;
