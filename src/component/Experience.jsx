import { Box, Grid, Typography } from "@mui/material";
import AiIcon from "../assets/icon/AiIcon";
import CssIcon from "../assets/icon/CssIcon";
import BashIcon from "../assets/icon/BashIcon";
import BootstrapIcon from "../assets/icon/BootstrapIcon";
import CypressIcon from "../assets/icon/CypressIcon";
import FigmaIcon from "../assets/icon/FigmaIcon";
import GithubIcon from "../assets/icon/GithubIcon";
import HtmlIcon from "../assets/icon/HtmlIcon";
import JavascriptIcon from "../assets/icon/JavascriptIcon";
import JestIcon from "../assets/icon/JestIcon";
import MuiIcon from "../assets/icon/MuiIcon";
import ReactIcon from "../assets/icon/ReactIcon";
import ReduxIcon from "../assets/icon/ReduxIcon";
import SassIcon from "../assets/icon/SassIcon";
import XdIcon from "../assets/icon/XdIcon";

function Experience() {
  return (
    <>
      <Typography variant="h2" id="experience" textAlign={"center"} sx={{ mb: 5 }}>
        My experience
      </Typography>
      <Grid container justifyContent={"center"} gap={4} sx={{ mb: 15 }}>
        <Grid
          item
          xs={12}
          ms={12}
          md={5}
          sx={{
            background:
              "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 0.55))",
            pb:10,pt:8,
            borderRadius: 1.5,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Typography variant="h3" textAlign={"center"} sx={{ mb: 5 }}>
            Front-end skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 1,
              alignItems: "center",
              gap: 5,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", width: 1 }}
            >
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <ReactIcon />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", width: 1 }}
            >
              <MuiIcon />
              <SassIcon />
              <BootstrapIcon />
              <ReduxIcon />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          ms={12}
          md={5}
          sx={{
            background:
              "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 0.55))",
              pb:10,pt:8,
            borderRadius: 1.5,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        >
          <Typography variant="h3" textAlign={"center"} sx={{ mb: 5 }}>
            Other Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: 1,
              alignItems: "center",
              gap: 5,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", width: 1 }}
            >
              <GithubIcon />
              <XdIcon />
              <FigmaIcon />
              <AiIcon />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", width: 1 }}
            >
              <BashIcon />
              <JestIcon />
              <CypressIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Experience;
