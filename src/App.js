import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Products, Title } from "./components";
import AppleIpad from "./assets/Apple iPad.jpg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Navbar } from "./pages/home/navbar/navbar";

// import { getData } from "./firebase/crud/firebaseCrudExample";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Title text={"Shopping Chart"} />
        <Navbar />
        <Routes>
          <Route
            path="home"
            element={
              <Home>
                <Products />
              </Home>
            }
          />
          <Route path="productdetail" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
