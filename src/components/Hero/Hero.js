import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Hero() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            alt=""
            sx={{
              height: "100%",
              backgroundSize: "cover",
              backgroundImage: "url(product_bundle.jpeg)",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: "64px",
            backgroundColor: "mushroom.main",
          }}
        >
          <Typography variant="h3" component="div" gutterBottom>
            BUILD YOUR BOX
          </Typography>

          <List dense>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="DoneIcon"
                  >
                    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    sx: { fontWeight: "bold" },
                  }}
                  primary="Healthy plant-based meals"
                  secondary="All dishes are nutritionally balanced and handmade by our expert chefs."
                />
              </ListItem>
            )}
          </List>
          <Button variant="contained">Build Basket</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
