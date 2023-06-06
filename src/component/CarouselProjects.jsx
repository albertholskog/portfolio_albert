/* eslint-disable react/prop-types */
import {
  Box,
  Grid,
  CardMedia,
  Card,
  CardContent,
  Typography,
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
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
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography variant="h3" sx={{ color: "#4DC8B9" }}>
                      {data.name}
                    </Typography>
                    <Typography variant="p">{data.project}</Typography>
                  </Box>
                  <Typography variant="p">{data.description}</Typography>
                </Box>
              </CardContent>
            </Box>

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap-reverse",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
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
                <Box sx={{ display: "flex", gap: 1 }}>
                  {data.icons &&
                    data.icons.map((icon, index) => <i key={index}>{icon}</i>)}
                </Box>
              </Box>
            </CardContent>
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
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
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h3" sx={{ color: "#4DC8B9" }}>
                        {project.name}
                      </Typography>
                      <Typography variant="p">{project.project}</Typography>
                    </Box>
                    <Typography variant="p">{project.description}</Typography>
                  </Box>
                </CardContent>
              </Box>

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap-reverse",
                  }}
                >
                  <Box>
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
                        sx={{ ml: 2 }}
                        variant="contained"
                        component="a"
                        href={project.demoLink}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    )}
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {project.icons &&
                      project.icons.map((icon, index) => (
                        <i key={index}>{icon}</i>
                      ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default CarouselProjects;
