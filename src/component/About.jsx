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
        sx={{
          display: "flex",
          justifyContent: "center",
      
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bgcolor: "rgba(255, 254, 255, 0.07);",
            width: 240,
            height: 290,
            borderRadius: 1.5,
            transform: "matrix(0.98, 0.2, -0.21, 0.98, 0, 0)",
          }}
        ></Box>
        <Box
          id="about"
          component={"img"}
          src={profileImages}
          sx={{
            width: 250,
            height: 300,
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
        sx={{
          textAlign: { xs: "center", ms: "center", md: "left" },
         
        }}
      >
        <Typography
          variant="h2"
          color="primary"
          fontSize={32}
          sx={{ mt: { xs: 2, ms: 2, md: 0 } }}
        >
          Welcome!
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, mt: 2, animationDelay: "1s" }}>
          I am a front-end developer
        </Typography>
        <Typography
          variant="p"
          letterSpacing="0.04em"
          lineHeight="24px"
         
        >
          Hello! My name is Albert Holskog. I studied Front-End Development at
          Noroff University College in Kristiansand. I used to work as a sailor,
          but I wanted to challenge myself and learn something new. Solving
          problems and working with coding is something I have always enjoyed. I
          consider myself an outgoing and positive person that appreciates
          working with and around others.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;
