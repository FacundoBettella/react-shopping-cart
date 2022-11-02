import { Fragment, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyle, PageContainer, Theme } from "./styles/GlobalStyles";
import {
  Login,
  Register,
  Home,
  Detail,
  Cart,
  OrderHistory,
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
import { useThemeContext } from "./context/ThemeContext";
import useResponsiveSize from "./hooks/useResponsiveSize";

const App = () => {
  const { theme } = useThemeContext();
  const { user } = useAuth();

  const { products, loading, getProducts } = useProducts();
  const [deviceSizeState] = useResponsiveSize();
  const { sincronizeItemFunc } = useLocalStorage();

  useEffect(() => {
    getProducts("products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <Fragment>
      <Layout title="Envios gratis en el día" />
      <BrowserRouter>
        <Theme data-theme={theme}>
          <GlobalStyle />
          <PageContainer sizeManagment={deviceSizeState}>
            <Navbar />
            <Title
              text={"Shopping Chart"}
              user={user?.email}
              sizeManagment={deviceSizeState}
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
                      sizeManagment={deviceSizeState}
                      listOfProducts={products}
                      onLoading={() => <Loading loading={loading} />}
                    />
                  </Home>
                }
              />
              <Route element={<ProtectedRoute userAuth={user} />}>
                <Route path="/orders" element={<OrderHistory />} />
                <Route
                  path="search/:filter"
                  element={
                    <Search onLoading={() => <Loading loading={loading} />} />
                  }
                />
                <Route
                  path="/productdetail"
                  element={<Detail sizeManagment={deviceSizeState} />}
                />
                <Route
                  path="/cart"
                  element={<Cart sizeManagment={deviceSizeState} />}
                />
              </Route>
            </Routes>
          </PageContainer>
          {!deviceSizeState && <Footer />}
        </Theme>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
