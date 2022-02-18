import React, { useEffect } from "react";

import { useProducts } from "hooks/useProducts";

import LayoutShop from "components/Layout/LayoutShop";
import LayoutPage from "components/Layout/LayoutPage";
export default function Shop() {
  const { fetchProducts, products } = useProducts();

  // in next this would be done in getStaticProps
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <LayoutPage>
      <LayoutShop products={products} />
    </LayoutPage>
  );
}
