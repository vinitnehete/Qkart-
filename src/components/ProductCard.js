
import React from "react";
import "./ProductCard.css";
import Card from './MUI/Card';
// import Rating from './MUI/Rating';


const ProductCard = ({ product, handleAddToCart }) => {
  // console.log('called',product);
  return (
    <Card key={product.key} className="card" image={product.image} title={product.name} cost={product.cost} rating={product.rating} onClick={handleAddToCart}/>
  );
};

export default ProductCard;
