import { Box } from "@mui/system";
import Navbar from "./component/navBar";
import backgroundImage from "./assets/icon/Background.svg";
import "./App.css";
import About from "./component/About";
import Experience from "./component/experience";
import { Container } from "@mui/material";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Container maxWidth={"lg"}>
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Container>
      </Box>
    </>
  );
}

export default App;
