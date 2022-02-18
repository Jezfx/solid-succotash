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

const theme = createTheme({
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
    MuiAppBar: {
      defaultProps: {
        color: "white",
        elevation: 0,
      },
      styleOverrides: {
        positionFixed: {
          boxShadow: "none",
        },
      },
    },
    // MuiAccordion: {
    //   styleOverrides: {
    //     root: {
    //       "&.Mui-expanded:before": {
    //         opacity: 1,
    //       },
    //     },
    //   },
    // },
    MuiAccordionSummary: {
      styleOverrides: {
        "&.Mui-expanded": {
          minHeight: 0,
        },
        "& .MuiAccordionSummary-content.Mui-expanded": {
          margin: "12px 0",
        },
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
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
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
        },
        outlined: {
          padding: "6px 14px",
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
});

export default theme;
