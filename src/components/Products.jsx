import React, { useEffect, useState } from "react";
import { CardDefault } from "./product";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const {data: productsData, status} = useSelector((state) => state.products);

//   const getProducts = async () => {
//     const { data } = await axios.get("https://fakestoreapi.com/products");
//     setProducts(data);
//   };
useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

useEffect(() => {
    setProducts(productsData);
  }, [productsData])

  if(status === StatusCode.LOADING){
    return <Typography variant="h1" className="text-center">...Loading</Typography>
  }

  if(status === StatusCode.ERROR){
   return <Typography variant="h1" className="text-center">Something went wrong!</Typography>
  }


  const addToCart = (product)=>{
    dispatch(add(product))

  }

  const cards = products.map((product) => <div>
    <CardDefault title={product.title} 
    imageLink={product.image} 
    price={product.price} 
    clickAction={()=>{addToCart(product)}}/></div>);


  return (
    <div>
      <Typography variant="h1" color="blue-gray" className="mb-2 text-center">
        Products Dashboard
      </Typography>
      <div className="flex flex-wrap space-x-4 justify-center">{cards}</div>
    </div>
  );
};

export default Products