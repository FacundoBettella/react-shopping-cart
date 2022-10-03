import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Home from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Navbar } from "./components/navbar/navbar";
import { Loading, Products, Title, Carousel ,Searcher, Search} from "./components";
import useProducts from "./hooks/useProducts";
// import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const { products, loading } = useProducts();

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
              <Home loading={loading}>
                <Carousel
                  listOfProducts={products}
                  onLoading={(loading) => <Loading loading={loading} />}
                />
                <Searcher/>
                <Products
                  listOfProducts={products}
                  onLoading={(loading) => <Loading loading={loading} />}
                />
              </Home>
            }
          />
          <Route path="productdetail" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="search/:filter" 
            element={<Search onLoading={(loading) => <Loading loading={loading} />}/>}
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
