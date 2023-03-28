import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreeen from "./screens/HomeScreeen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/loginScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/" element={<HomeScreeen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
