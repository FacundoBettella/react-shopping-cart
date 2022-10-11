import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Fragment, useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import Home from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Cart } from "./pages/cart/Cart";
import { Navbar } from "./components/navbar/navbar";
import {
  Loading,
  Products,
  Title,
  Carousel,
  Searcher,
  Search,
} from "./components";
import useProducts from "./hooks/useProducts";
import { useAuth } from "./context/authContext";
import { ProtectedRoute } from "./pages/protected-route";
import { carritoContext } from "./context/carritoContext";

const App = () => {
  const { products, loading } = useProducts();
  const { user } = useAuth();
  

  return (
    <Fragment>
      
      <BrowserRouter>
        <GlobalStyle />
        <Title text={"Shopping Chart"} user={user?.email} />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="home"
            element={
              <Home loading={loading}>
                <Carousel
                  listOfProducts={products}
                  onLoading={() => <Loading loading={loading} />}
                />
                <Searcher param="" />
                <Products
                  listOfProducts={products}
                  onLoading={() => <Loading loading={loading} />}
                />
              </Home>
            }
          />
          <Route element={<ProtectedRoute userAuth={user} />}>
            <Route 
              path="search/:filter" 
              element={
                <Search onLoading={() => <Loading loading={loading} />} />
                  } 
            />
            <Route path="/productdetail" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
