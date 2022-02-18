import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `solid 1px ${theme.palette.grey[300]}`,
}));
