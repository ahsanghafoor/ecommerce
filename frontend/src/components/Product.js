import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const shadow = hovered ? "0 8px 12px rgba(0, 0, 0, 0.2)" : "none";

  return (
    <Card
      className="my-3 p-3 rounded"
      style={{ boxShadow: shadow }}
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
