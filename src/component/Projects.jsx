import {
  Box,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import projectsData from "../assets/projectsData";

function Projects() {
  return (
    <>
      <Typography variant="h2" textAlign={"center"} sx={{ mb: 5 }}>
        My projects
      </Typography>
      <Grid container gap={4} justifyContent={"center"} sx={{ mb: 15 }}>
        {projectsData.map((project) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            key={project.name}
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Card
              sx={{
                background:
                  "linear-gradient(45deg, rgba(5, 25, 55, 1), rgba(40, 81, 92, 0.55))",
                borderRadius: 1.5,
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                p: 3,
                height: 1,
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.name}
                sx={{ height: 225, borderRadius: 1.5, objectPosition: "top" }}
              />
              <CardContent>
                <Typography variant="h3" sx={{ color: "#4DC8B9" }}>
                  {project.name}
                </Typography>
                <Typography variant="p">{project.description}</Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap-reverse",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="outlined"
                    color="white"
                    sx={{ borderColor: "#4DC8B9" }}
                    component="a"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  {project.demoLink.length === 0 ? null : (
                    <Button
                      variant="contained"
                      component="a"
                      href={project.demoLink}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 1,
                  }}
                >
                  {project.icons &&
                    project.icons.map((icon, index) => (
                      <i key={index}>{icon}</i>
                    ))}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Projects;

{
  /* <a href={project.githubLink}>GitHub</a>
<a href={project.demoLink}>Live Demo</a> */
}
