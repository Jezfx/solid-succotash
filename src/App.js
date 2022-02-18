import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { ModalProvider } from "hooks/useModal";
import { BasketProvider } from "hooks/useBasket";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Gifting from "./pages/Gifting";
import Typography from "./pages/Typography";

import defaultTheme from "./styles/themes/default";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <BasketProvider>
          <Router>
            <Routes>
              <Route path="/shop" element={<Shop />} />
              <Route path="/gifting" element={<Gifting />} />
              <Route path="/typeography" element={<Typography />} />
            </Routes>
          </Router>
        </BasketProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
