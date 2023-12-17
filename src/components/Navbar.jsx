import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const cartProducts = useSelector(state => state.cart)
  return (
    <nav className="bg-gray-800 p-6 sticky">
      <div className="container mx-24 flex items-center">
        <Link to="/" className="text-white text-4xl font-bold">
          ReduxToolkit
        </Link>
        <div className="flex">
          <Link to="/" className="text-gray-500 text-2xl ml-44">
            Products
          </Link>
        </div>
        <div className="ml-auto relative left-96">
          <Link to="/cart" className="text-gray-500 text-2xl">
            Bag {cartProducts.length}
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar