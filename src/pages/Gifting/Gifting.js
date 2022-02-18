import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { useProducts } from "hooks/useProducts";

import LayoutGifting from "components/Layout/LayoutGifting";
import LayoutPage from "components/Layout/LayoutPage";

import giftingTheme from "styles/themes/gifting";

export default function Gifting() {
  const { fetchProducts, products } = useProducts();

  // in next this would be done in getStaticProps
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <LayoutPage>
      <ThemeProvider theme={giftingTheme}>
        <LayoutGifting products={products} />
      </ThemeProvider>
    </LayoutPage>
  );
}
