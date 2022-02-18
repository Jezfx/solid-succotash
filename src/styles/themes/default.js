import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const colors = {
  pumpkin: {
    main: "#DE613D",
    contrastText: "#fff",
  },
  mushroom: {
    main: "#e8e3d9",
    contrastText: "#000",
  },
  white: {
    main: "#fff",
    contrastText: "#000",
  },
};

export const defaultTheme = {
  typography: {
    fontFamily: '"filson-pro",Arial,sans-serif',
    h1: {
      fontSize: 72,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 30,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 22,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 18,
      lineHeight: 1.3,
      fontWeight: "bold",
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 18,
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "rgb(255, 219, 102)",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    ...colors,
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: "white",
        elevation: 0,
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded:before": {
            opacity: 1,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          marginBottom: "2px", // for the :focus boxshadow
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            background: "transparent",
          },
          "&.Mui-focusVisible": {
            boxShadow: "rgb(94 158 214) 0px 0px 0px 2px",
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: "#000",
          "&:hover": {
            background: "transparent",
          },
          "&.Mui-focusVisible": {
            boxShadow: "rgb(94 158 214) 0px 0px 0px 2px",
          },
        },
        small: {
          fontSize: 14,
        },
        contained: {
          border: "2px solid #000",
          padding: "6px 14px",
          transition: "none",
          "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "#000",
            color: "#fff",
          },
          "&.Mui-disabled": {
            border: "none",
          },
        },
        outlined: {
          padding: "6px 14px",
          border: "2px solid #000",
          transition: "none",

          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
            border: "2px solid #000",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "#000",
            color: "#fff",
          },
        },
      },
    },
  },
};

export default createTheme(defaultTheme);
