import { Button } from "@material-ui/core";
import React from "react";
import "./Product.css";

function Project({ id, title, image, price, rating }) {
  const addToBasket = () => {};
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <Button onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
}

export default Project;
