import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Title } from "./components";
import AppleIpad from "./assets/Apple iPad.jpg";
// import { getData } from "./firebase/crud/firebaseCrudExample";

const App = () => {
  // let data = getData("products");

  return (
    <Fragment>
      <GlobalStyle />
      <Title text={"Shopping Chart"} />
      {/* routes */}
      <div>
        <img src={AppleIpad} style={{ width: "230px" }} />
      </div>
    </Fragment>
  );
};

export default App;
