import React from "react";
import Container from "@mui/material/Container";

import LayoutPage from "components/Layout/LayoutPage";
import LayoutKitchenSink from "components/Layout/LayoutKitchenSink";

export default function KitchenSink() {
  return (
    <LayoutPage>
      <Container>
        <LayoutKitchenSink />
      </Container>
    </LayoutPage>
  );
}
