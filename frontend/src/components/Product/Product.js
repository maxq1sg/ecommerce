import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product({ product }) {
  return (
    <>
      <div className="product__title">
        <Link className="product__title-link" to={`/product/${product._id}`}>
          {product.name}
        </Link>{" "}
      </div>
      <div className="product__image">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} />
        </Link>
      </div>
      <Rating
        name={product.name}
        value={product.rating}
        reviews={product.numReviews}
      />
      <div className="product__price">
        <h3>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </h3>
      </div>
    </>
  );
}
