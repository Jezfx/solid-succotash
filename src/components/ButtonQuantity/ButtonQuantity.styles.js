import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const StyledButtonGroup = styled(ButtonGroup)({
  alignItems: "center",
  border: "solid 2px",
  display: "flex",
  justifyContent: " space-between",
  width: "100%",
});

export const StyledButton = styled(Button)({
  border: "none",
});
