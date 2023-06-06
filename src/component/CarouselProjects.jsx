/* eslint-disable react/prop-types */
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

function CarouselProjects({ data, matches }) {
  if (!matches) {
    return (
      <Grid container gap={4} justifyContent={"center"} sx={{ width: 1 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{
            width: "100%",
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
              image={data.image}
              alt={data.name}
              sx={{
                height: 225,
                width: 1,
                borderRadius: 1.5,
                objectPosition: "top",
              }}
            />
            <CardContent>
              <Typography variant="h3" sx={{ color: "#4DC8B9" }}>
                {data.name}
              </Typography>
              <Typography variant="p">{data.description}</Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                flexDirection:"row-reverse",
                flexWrap:"wrap",
                alignItems: "center",
                justifyContent: "start",
                gap: 1,
                pb:2
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 1,
                  pl: 1,
                }}
              >
                {data.icons &&
                  data.icons.map((icon, index) => <i key={index}>{icon}</i>)}
              </Box>
              <Box sx={{ display: "flex", gap: 2, flexWrap:"wrap" }}>
                <Button
                  variant="outlined"
                  color="white"
                  sx={{ borderColor: "#4DC8B9" }}
                  component="a"
                  href={data.githubLink}
                  target="_blank"
                >
                  GitHub
                </Button>
                {data.demoLink.length === 0 ? null : (
                  <Button
                    variant="contained"
                    component="a"
                    href={data.demoLink}
                    target="_blank"
                  
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }
  if (matches) {
    return (
      <Grid container gap={4} justifyContent={"center"} sx={{ width: 1 }}>
        {data.map((project) => (
          <Grid
            key={project.name}
            item
            xs={12}
            sm={12}
            md={5}
            sx={{
              width: "100%",

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
                sx={{
                  height: 225,
                  width: 1,
                  borderRadius: 1.5,
                  objectPosition: "top",
                }}
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
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    mt: 1,
                    pl: 1,
                  }}
                >
                  {project.icons &&
                    project.icons.map((icon, index) => (
                      <i key={index}>{icon}</i>
                    ))}
                </Box>
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default CarouselProjects;
