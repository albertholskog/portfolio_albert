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
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!isMediumScreen) {
      setIsMenuOpen(false);
    }
  }, [isMediumScreen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHeadingClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navbarBackground = hasScrolled
    ? "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 0.9))"
    : "transparent";
  const dropdownMenuBackground =
    "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 1))";
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ background: navbarBackground }}
    >
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
                {!isMenuOpen ? (
                  <MenuIcon sx={{ color: theme.palette.primary.main }} />
                ) : (
                  <CloseIcon sx={{ color: theme.palette.primary.main }} />
                )}
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
                  ref={dropdownRef}
                  sx={{
                    background: dropdownMenuBackground,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    padding: "1rem",
                    animation: "slide-in 0.5s ease-in-out",
                    zIndex: 5,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{ my: 1 }}
                    onClick={() => handleHeadingClick("about")}
                  >
                    About Me
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ my: 1 }}
                    onClick={() => handleHeadingClick("experience")}
                  >
                    Experience
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ my: 1 }}
                    onClick={() => handleHeadingClick("projects")}
                  >
                    My Projects
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ my: 1 }}
                    onClick={() => handleHeadingClick("contact")}
                  >
                    Contact
                  </Typography>
                </Box>
              )}
            </>
          ) : (
            <Box display="flex" justifyContent="center" flexGrow={1}>
              <Typography
                variant="h2"
                sx={{ mx: 2, cursor:"pointer" }}
                onClick={() => handleHeadingClick("about")}
              >
                About Me
              </Typography>
              <Typography
                variant="h2"
                sx={{ mx: 2, cursor:"pointer" }}
                onClick={() => handleHeadingClick("experience")}
              >
                Experience
              </Typography>
              <Typography
                variant="h2"
                sx={{ mx: 2, cursor:"pointer" }}
                onClick={() => handleHeadingClick("projects")}
              >
                My Projects
              </Typography>
              <Typography
                variant="h2"
                sx={{ mx: 2, cursor:"pointer" }}
                onClick={() => handleHeadingClick("contact")}
              >
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