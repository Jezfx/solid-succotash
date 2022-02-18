import React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Basket from "components/Basket";
import Header from "components/Header";

import { LayoutPageProvider } from "./LayoutPage.context";
/**
 * Layouts
 * Equivalent to containers
 * - get data passed in from page
 * - set providers
 * - useHooks
 */

export default function LayoutPage({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOnCloseClick = () => {
    setIsMenuOpen(false);
  };

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsMenuOpen(isOpen);
  };

  const handleOnMenuClick = () => {
    setIsMenuOpen(true);
  };

  const toggleModal = (showModal) => {
    setIsModalOpen(showModal || !isModalOpen);
  };

  const handleOnProductCardClick = () => {
    toggleModal(false);
  };

  const closeModal = () => {
    toggleModal(false);
  };

  return (
    <Box sx={{ paddingTop: "60px" }}>
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ maxWidth: "600px" }}>
          <Basket onCloseClick={handleOnCloseClick} />
        </Box>
      </Drawer>
      <LayoutPageProvider value={{ onMenuClick: handleOnMenuClick }}>
        <Header onMenuClick={handleOnMenuClick} />
        {children}
      </LayoutPageProvider>
    </Box>
  );
}
