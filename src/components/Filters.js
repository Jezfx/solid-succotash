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
            <Typography variant="h6">Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MenuList dense>
              <MenuItem>
                <ListItemText inset>Single</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>1.15</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemText inset>Double</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                Custom: 1.2
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
