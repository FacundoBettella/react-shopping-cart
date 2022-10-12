import { Fragment, useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Login, Register, Home, Detail, Cart, ProtectedRoute  } from "./pages/index";
import {
  Loading,
  Title,
  Navbar,
  Products,
  Carousel,
  Searcher,
  Search,
  ChangeAlertWithStorageListener,
} from "./components";
import useProducts from "./hooks/useProducts";
import { useAuth } from "./context/authContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
// import { carritoContext } from "./context/carritoContext";

const App = () => {
  const { products, loading } = useProducts();
  const { user } = useAuth();
  const { sincronizeItemFunc } = useLocalStorage();

  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Title text={"Shopping Chart"} user={user?.email} />
        <Navbar />
        <ChangeAlertWithStorageListener sincronize={sincronizeItemFunc}/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
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
