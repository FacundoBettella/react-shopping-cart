import { Fragment, useContext, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle, Theme } from "./styles/GlobalStyles";
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
  Footer,
} from "./components";
import useProducts from "./hooks/useProducts";
import { useAuth } from "./context/authContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { products, loading } = useProducts();
  const { user } = useAuth();
  const { sincronizeItemFunc } = useLocalStorage();

  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <Fragment >
      <BrowserRouter>
        <Theme data-theme={theme}>
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
        <Footer />
        </Theme>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
