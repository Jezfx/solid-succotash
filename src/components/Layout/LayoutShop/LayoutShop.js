import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ProductCard from "components/ProductCard";
import Hero from "components/Hero";
import Filters from "components/Filters";
import ProductModal from "components/ProductModal";

import { useProducts } from "hooks/useProducts";
import { useModal } from "hooks/useModal";
import { useBasket } from "hooks/useBasket";

const LayoutShop = ({ products = [] }) => {
  const { getProductById } = useProducts();
  const { add, remove } = useModal();
  const { addItem, removeItem, basketTotal } = useBasket();

  const handleOnProductCardClick = (id) => {
    const product = getProductById(id);
    add(<ProductModal close={remove} {...product} />);
  };

  const renderProductsList = ({ title, id }) => (
    <Grid item xs={2} sm={4} md={4} key={id}>
      <ProductCard
        title={title}
        basketTotal={basketTotal}
        onIncreaseQuantityClick={addItem}
        onDecreaseQuantityClick={removeItem}
        onProductCardClick={handleOnProductCardClick}
      />
    </Grid>
  );

  return (
    <>
      <Hero />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Filters />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid spacing={2} container>
                {products.map(renderProductsList)}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LayoutShop;
