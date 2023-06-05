import { createTheme } from "@mui/material/styles";

const color = {
  white: "#FFFEFF",
  green: "#153A43",
  darkblue: "#051937",
  gradient: "linear-gradient(45deg, #051937 100%, #28515C 55%)",
  primary: "#4DC8B9",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: color.primary,
    },
    white: {
      main: color.white,
    },
    green: {
      main: color.green,
    },
    darkblue: {
      main: color.darkblue,
    },
    gradient: {
      main: color.gradient,
    },
    background: {
      default: color.white,
    },
  },
  components: {
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          color: color.black,
          fontSize: 20,
          fontWeight: 600,
        },
        subtitle: {
          color: color.black,
          fontSize: 16,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    color: color.white,
    h1: {
      fontFamily: "Hossa Medium, Arial, sans-serif",
      color: color.primary,
      fontSize: 32,
      letterSpacing: "-0.15em",
      transform: " rotate(6deg)",
    },
    h2: {
      fontFamily: "Hossa Light, Arial, sans-serif",
      color: color.white,
      fontSize: 22,
    },
    h3: {
      fontFamily: "Hossa Light, Arial, sans-serif",
      color: color.white,
      letterSpacing: "0.1em",
      fontSize: 20,
      fontWeight: "500",
    },
    h4: {
      fontFamily: "Hossa Light, Arial, sans-serif",
      color: color.white,
      letterSpacing: "0.15em",
      fontSize: 16,
      fontWeight: "500",
    },
    h6: {
      fontFamily: "Hossa Soft Medium, Arial, sans-serif",
      fontWeight: 600,
    },
    p: {
      color: color.white,
      fontWeight: 500,
      fontSize: 15,
    },
    button: {
      fontFamily: "Hossa Soft Medium, Arial, sans-serif",
      borderColor: color.primary,
      fontSize: 14,
    },
  },
});
