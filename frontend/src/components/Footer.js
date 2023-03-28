import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="p-5 bg-dark text-light">
        <Row>
          <Col md={4} className="mb-3">
            <h4 className="text-white">TechZz</h4>
            <p>
              We deal in smartphones, smartwatches, smart gadgets, and many
              other electronic appliances. Get into Touch with us for Latest
              products with affordable market rates.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h4 className="text-white">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/cart/:id">Cart</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h4 className="text-white">Contact Us</h4>
            <p>
              <i className="bi bi-geo-alt-fill"></i> 123 Main St, New York, NY
              10001, USA
            </p>
            <p>
              <i className="bi bi-telephone"></i> +92 348 6717118
            </p>
            <p>
              <i className="bi bi-envelope"></i> info@techzz.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            All rights reserved &copy; A H S A N
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
