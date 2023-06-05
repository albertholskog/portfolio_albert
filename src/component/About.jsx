import { Box, Grid, Typography } from "@mui/material";
import profileImages from "../assets/profileImages.jpg";

function About() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ my: 15 }}
    >
      <Grid
        item
        xs={12}
        ms={12}
        md={6}
        position={"relative"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "absolute",
            bgcolor: "rgba(255, 254, 255, 0.07);",
            width: 250,
            height: 250,
            borderRadius: 1.5,
            transform: "matrix(0.98, 0.2, -0.21, 0.98, 0, 0)",
          }}
        ></Box>
        <Box
          component={"img"}
          src={profileImages}
          sx={{
            width: 250,
            height: 250,
            objectFit: "cover",
            borderRadius: 1.5,
            zIndex: 2,
          }}
        />
      </Grid>
      <Grid
        item
        s={12}
        ms={12}
        md={6}
        sx={{ textAlign: { xs: "center", ms: "center", md: "left" } }}
      >
        <Typography variant="h2" color={"primary"} fontSize={32}>
          Welcome!
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, mt: 2 }}>
          i am a front-end developer
        </Typography>
        <Typography variant="p" letterSpacing={"0.04em"} lineHeight={"24px"}>
          My name is Albert Holskog and I am Front End Development and I'm
          finished at Noroff University College in Kristiansand. I used to work
          as a sailor, but I wanted to challenge myself and learn something new.
          I have always enjoyed working with coding and solving problems.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
