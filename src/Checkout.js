import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjgwNDI1YjYt/YjgwNDI1YjYt-OTBiNzQ3NGUt-w1500._CB661646969_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
