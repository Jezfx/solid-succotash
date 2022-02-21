import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DayRangerPicker from "../../DayRangerPicker";
import DayPicker from "../../DayPicker";

export default function LayoutKitchenSink() {
  return (
    <>
      <Box mt={4}>
        <Stack spacing={2} direction="row" sx={{ marginTop: 2 }}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ margin: "30px 0" }} />

      <Box>
        <Stack spacing={2}>
          <Typography variant="h1" component="div">
            h1. Heading
          </Typography>
          <Typography variant="h2" component="div">
            h2. Heading
          </Typography>
          <Typography variant="h3" component="div">
            h3. Heading
          </Typography>
          <Typography variant="h4" component="div">
            h4. Heading
          </Typography>
          <Typography variant="h5" component="div">
            h5. Heading
          </Typography>
          <Typography variant="h6" component="div">
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" component="div">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" component="div">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1">
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="body2">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="button" display="block">
            button text
          </Typography>
          <Typography variant="caption" display="block">
            caption text
          </Typography>
          <Typography variant="overline" display="block">
            overline text
          </Typography>
        </Stack>
      </Box>

      <Box mt={4}>
        <DayRangerPicker />
      </Box>
      <Box mt={4}>
        <DayPicker />
      </Box>
    </>
  );
}
