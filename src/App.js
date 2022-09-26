import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Title } from "./components";
import AppleIpad from "./assets/Apple iPad.jpg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import  {Home} from "./pages/home/Home"
import  {Detail} from "./pages/detail/Detail"
import  {Cart} from "./pages/cart/Cart"
import  {Login} from "./pages/login/Login"

// import { getData } from "./firebase/crud/firebaseCrudExample";

const App = () => {
  // let data = getData("products");

  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Title text={"Shopping Chart"} />
        <Routes>
          <Route path="home" element={<Home />}/>
          <Route path="productdetail" element={<Detail />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
        <div>
          <img src={AppleIpad} style={{ width: "230px" }} />
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
