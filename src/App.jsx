import { Box } from "@mui/system";
import NavBar from "./component/NavBar";
import backgroundImage from "./assets/icon/Background.svg";
import "./App.css";
import About from "./component/About";
import Experience from "./component/Experience"
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
        <NavBar />
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
