import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";

import HeaderMenu from "./HeaderMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useBasket } from "hooks/useBasket";
import { StyledAppBar } from "./Header.styles";

export default function Header({ onMenuClick }) {
  const { basketTotal } = useBasket();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleOnMenuClick = () => {
    onMenuClick();
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Link
            underline="none"
            href="/"
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              textTransform: "none",
            }}
          >
            allplants
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Link variant="h6" href="/" underline="none" mr={4}>
            Shop
          </Link>
          <Link variant="h6" href="/gifting" underline="none" mr={4}>
            Gifting
          </Link>
          <Link variant="h6" href="/kitchen-sink" underline="none" mr={2}>
            Kitchen sink 🚰
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleOnMenuClick}
              color="inherit"
            >
              <Badge badgeContent={basketTotal} color="secondary">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <HeaderMobileMenu
        mobileMenuId={mobileMenuId}
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
      />
      <HeaderMenu
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
      />
    </Box>
  );
}
