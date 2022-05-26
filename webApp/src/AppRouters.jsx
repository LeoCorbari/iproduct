import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditProduct from "./pages/editProduct/editProduct";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";

export default function AppRouters() {
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = sessionStorage.getItem("user") !== null;

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
          path="newProduct"
          element={
            <PrivateRoute redirectTo="/">
              <NewProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="editProduct/:id_product"
          element={
            <PrivateRoute redirectTo="/">
              <EditProduct />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
