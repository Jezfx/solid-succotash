import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import ButtonQuantity from "./ButtonQuantity";
import { useProducts } from "hooks/useProducts";
export default function ProductsList({ onProductCardClick, products }) {
  const { onIncreaseQuantity, onDecreaseQuantity } = useProducts();

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card>
              <CardActionArea onClick={onProductCardClick}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://allplants.com/_next/image?url=https%3A%2F%2Fafsuvcxqen.cloudimg.io%2Fv7%2Fpim.allplants.com%2Fmedia%2Fcache%2Fpreview%2F1%2F3%2F8%2Fc%2F138cde3d2d1babfeeef0f6e802de27a58ec27133_Dishes_Badges_Mac___Greens__1_.jpg&w=750&q=75"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mac + Greens
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Broccoli, Kale + Sunblush Tomatoe
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <ButtonQuantity />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
