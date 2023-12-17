// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-tailwind/react';
import { remove } from '../store/cartSlice';
import { CardDefault } from './product';

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    console.log("before", productCart);
    dispatch(remove(id));
    console.log("after", productCart);

  };

  return (
    <div>
      <Typography variant="h1" color="blue-gray" className="mb-2 text-center">
        Cart
      </Typography>
      <center>
      {productCart.map((product) => (
        <div key={product.id} >
          <CardDefault
            title={product.title}
            imageLink={product.image}
            price={product.price}
            removeCart={true}
            clickAction={() => removeFromCart(product.id)}/>
        </div>
      ))}
      </center>
    </div>
  );
};

export default Cart;
