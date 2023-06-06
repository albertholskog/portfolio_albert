import { Typography, useMediaQuery } from "@mui/material";
import projectsData from "../assets/projectsData";
import Carousel from "react-material-ui-carousel";
import CarouselProjects from "./CarouselProjects";

function Projects() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  console.log(matches);

  if (matches) {
    const slideOne = projectsData.slice(0, 2);
    const slideTwo = projectsData.slice(2, 4);
    const slideThree = projectsData.slice(4, 6);
    return (
      <>
        <Typography
          variant="h2"
          id="projects"
          textAlign={"center"}
          sx={{ mb: 5 }}
        >
          My projects
        </Typography>

        <Carousel
          animation="slide"
          navButtonsAlwaysVisible={true}
          autoPlay={false}
          indicators={false}
        >
          <CarouselProjects data={slideOne} matches={matches} />
          <CarouselProjects data={slideTwo} matches={matches} />
          <CarouselProjects data={slideThree} matches={matches} />
        </Carousel>
      </>
    );
  }

  if (!matches) {
    const slide = projectsData;
    return (
      <>
        <Typography
          variant="h2"
          id="projects"
          textAlign={"center"}
          sx={{ mb: 5 }}
        >
          My projects
        </Typography>
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible={false}
          autoPlay={false}
        >
          {slide.map((item) => (
            <CarouselProjects key={item.name} data={item} matches={matches} />
          ))}
        </Carousel>
      </>
    );
  }
}

export default Projects;

{
  /* <a href={project.githubLink}>GitHub</a>
<a href={project.demoLink}>Live Demo</a> */
}
