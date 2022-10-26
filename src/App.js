import { Fragment, useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle, Theme } from "./styles/GlobalStyles";
import {
  Login,
  Register,
  Home,
  Detail,
  Cart,
  ProtectedRoute,
} from "./pages/index";
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
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "./utils/viewportSizes";

const App = () => {
  const { products, loading } = useProducts();
  const { theme } = useContext(ThemeContext);
  const { user } = useAuth();
  const { sincronizeItemFunc } = useLocalStorage();
  const DEVICE_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

  return (
    <Fragment>
      <BrowserRouter>
        <Theme data-theme={theme}>
          <GlobalStyle />
          <div
            style={{
              /* Para el footer */
              paddingBottom: "45vh",
            }}
          >
            <Navbar />
            <Title text={"Shopping Chart"} user={user?.email} />
            <ChangeAlertWithStorageListener sincronize={sincronizeItemFunc} />
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
          </div>
          {!DEVICE_TABLE_QUERY_BOOLEAN && <Footer />}
        </Theme>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
