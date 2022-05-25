import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import Product from "./pages/product/Product";

export default function AppRouters() {
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem("user") !== null;

    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="product"
          element={
            <PrivateRoute redirectTo="/">
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="product/:id_product"
          element={
            <PrivateRoute redirectTo="/">
              <Product />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
