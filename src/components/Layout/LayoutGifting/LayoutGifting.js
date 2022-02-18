import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import ProductCard from "components/ProductCard";
import ProductModal from "components/ProductModal";

import { useProducts } from "hooks/useProducts";
import { useModal } from "hooks/useModal";
import { useBasket } from "hooks/useBasket";

const LayoutShop = ({ products = [] }) => {
  const { getProductById } = useProducts();
  const { add, remove } = useModal();
  const { addItem, removeItem } = useBasket();

  const handleOnProductCardClick = (id) => {
    const product = getProductById(id);
    add(<ProductModal close={remove} {...product} />);
  };

  const renderProductsList = ({ title, id }) => (
    <Grid item xs={2} sm={4} md={3} key={id}>
      <ProductCard
        title={title}
        onIncreaseQuantity={addItem}
        onDecreaseQuantity={removeItem}
        onProductCardClick={handleOnProductCardClick}
      />
    </Grid>
  );

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid spacing={2} container>
              {products.map(renderProductsList)}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LayoutShop;
