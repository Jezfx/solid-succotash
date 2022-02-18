import * as React from "react";
import { StyledButtonGroup, StyledButton } from "./ButtonQuantity.styles";

const ButtonQuantity = ({ onIncreaseQuantityClick, quantity = 0 }) => (
  <StyledButtonGroup
    variant="contained"
    aria-label="outlined primary button group"
  >
    <StyledButton
      size="small"
      sx={{ borderRight: "solid 2px !important" }}
      onClick={onIncreaseQuantityClick}
    >
      -
    </StyledButton>
    {quantity}
    <StyledButton
      size="small"
      sx={{ borderLeft: "solid 2px !important" }}
      onClick={onIncreaseQuantityClick}
    >
      +
    </StyledButton>
  </StyledButtonGroup>
);

export default ButtonQuantity;
