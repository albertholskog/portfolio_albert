import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!isMediumScreen) {
      setIsMenuOpen(false);
    }
  }, [isMediumScreen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h1">AH</Typography>
          {isMediumScreen ? (
            <>
              <IconButton color="inherit" onClick={toggleMenu}>
                <MenuIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              {isMenuOpen && (
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  position="absolute"
                  top="100%"
                  left="0"
                  right="0"
                  background="#ffffff"
                  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
                  padding="1rem"
                  animation="slide-in 0.5s ease-in-out"
                  zIndex={5}
                >
                  <Typography variant="h2" sx={{ my: 1 }}>
                    About Me
                  </Typography>
                  <Typography variant="h2" sx={{ my: 1 }}>
                    Experience
                  </Typography>
                  <Typography variant="h2" sx={{ my: 1 }}>
                    My Projects
                  </Typography>
                  <Typography variant="h2" sx={{ my: 1 }}>
                    Contact
                  </Typography>
                </Box>
              )}
            </>
          ) : (
            <Box display="flex" justifyContent="center" flexGrow={1}>
              <Typography variant="h2" sx={{ mx: 2 }}>
                About Me
              </Typography>
              <Typography variant="h2" sx={{ mx: 2 }}>
                Experience
              </Typography>
              <Typography variant="h2" sx={{ mx: 2 }}>
                My Projects
              </Typography>
              <Typography variant="h2" sx={{ mx: 2 }}>
                Contact
              </Typography>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
