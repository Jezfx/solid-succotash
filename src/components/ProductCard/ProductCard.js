import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import ButtonQuantity from "../ButtonQuantity";

const img =
  "https://allplants.com/_next/image?url=https%3A%2F%2Fafsuvcxqen.cloudimg.io%2Fv7%2Fpim.allplants.com%2Fmedia%2Fcache%2Fpreview%2F1%2F3%2F8%2Fc%2F138cde3d2d1babfeeef0f6e802de27a58ec27133_Dishes_Badges_Mac___Greens__1_.jpg&w=750&q=75";

export default function ProductCard({
  onProductCardClick,
  onIncreaseQuantityClick,
  basketTotal,
}) {
  const handleOnIncreaseQuantity = () => {
    onIncreaseQuantityClick(1); // pass in the current product id
  };

  const shouldShowAddButtons = !Boolean(basketTotal);
  const shouldShowQuanityButtons = Boolean(basketTotal);

  return (
    <Card sx={{ border: 2 }}>
      <CardActionArea onClick={onProductCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6">Mac + Greens</Typography>
          <Typography>Broccoli, Kale + Sunblush Tomatoe</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {shouldShowQuanityButtons && (
          <ButtonQuantity
            quantity={basketTotal}
            onIncreaseQuantityClick={handleOnIncreaseQuantity}
          />
        )}

        {shouldShowAddButtons && (
          <Button
            size="small"
            onClick={handleOnIncreaseQuantity}
            variant="contained"
            fullWidth
          >
            Add
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
