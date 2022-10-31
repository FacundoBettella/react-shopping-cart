import { Fragment, useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle, PageContainer, Theme } from "./styles/GlobalStyles";
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
  Layout,
} from "./components";
import useProducts from "./hooks/useProducts";
import { useAuth } from "./context/authContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ThemeContext } from "./context/ThemeContext";
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "./utils/viewportSizes";
// import { useGetUserPurchaseOrders } from "./hooks/useGetUserPurchaseOrders";

const App = () => {
  const { products, loading } = useProducts();
  const { theme } = useContext(ThemeContext);
  const { user } = useAuth();
  const { sincronizeItemFunc } = useLocalStorage();
  /*TODO: Consumir useMediaQuery en un contexto global */
  const DEVICE_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

  /* 
    const { orders } = useGetUserPurchaseOrders("juan.marderwald@ar.ey.com");
    console.log(orders);
 */
  return (
    <Fragment>
      <Layout title="Envios gratis en el día" />
      <BrowserRouter>
        <Theme data-theme={theme}>
          <GlobalStyle />
          <PageContainer sizeManagment={DEVICE_TABLE_QUERY_BOOLEAN}>
            <Navbar />
            <Title
              text={"Shopping Chart"}
              user={user?.email}
              sizeManagment={DEVICE_TABLE_QUERY_BOOLEAN}
            />
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
                      sizeManagment={DEVICE_TABLE_QUERY_BOOLEAN}
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
                <Route
                  path="/productdetail"
                  element={
                    <Detail sizeManagment={DEVICE_TABLE_QUERY_BOOLEAN} />
                  }
                />
                <Route
                  path="/cart"
                  element={<Cart sizeManagment={DEVICE_TABLE_QUERY_BOOLEAN} />}
                />
              </Route>
            </Routes>
          </PageContainer>
          {!DEVICE_TABLE_QUERY_BOOLEAN && <Footer />}
        </Theme>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
