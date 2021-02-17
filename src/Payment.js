import { Link } from "@material-ui/core";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout [<Link to="/checkout">{basket?.length} items</Link>]
        </h1>
        {/* PAYMENT SECTION - DELIVERY ADDRESS */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>757 Red Velvet Cake Lane</p>
            <p>Seattle, Washington</p>
          </div>
        </div>
        {/* PAYMENT SECTION - REVIEW ITEMS */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* PAYMENT SECTION - PAYMENT METHOD */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">{/* STRIPE CODE */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
