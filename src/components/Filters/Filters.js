import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";

export default function Filters() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {Array.from(Array(3)).map((_, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          disableGutters={true}
          square={true}
          TransitionProps={{
            timeout: 0,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" mr={1}>
              Filters
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>(1)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              Hit Tab, then you can use the arrow keys to navigate
            </Typography>
            <MenuList dense>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText>Noodles</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>Pizza</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>Pastas</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Add space before paragraph</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText>Add space after paragraph</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Custom spacing...</ListItemText>
              </MenuItem>
            </MenuList>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
