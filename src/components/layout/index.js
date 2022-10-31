import React from "react";
import { Helmet } from "react-helmet";

function Layout({ title }) {
  return (
    <Helmet>
      {title && <title> {title} | Shopping Chart 🛒</title>}
      <meta
        name="description"
        content="En Shopping Chart encuentras el producto que necesitas al mejor precio de mercado."
      />
    </Helmet>
  );
}

export default Layout;