import Holidaze from "../assets/projectsImages/holidazeHome.png";
import Bidit from "../assets/projectsImages/bidit.png";
import BeardLand from "../assets/projectsImages/beardLand.png";
import Gamehub from "../assets/projectsImages/gamehub.png";
import Community from "../assets/projectsImages/community.png";
import SkylineShop from "../assets/projectsImages/skylineShop.png";

import CssIcon from "../assets/icon/CssIcon";
import BootstrapIcon from "../assets/icon/BootstrapIcon";
import CypressIcon from "../assets/icon/CypressIcon";
import HtmlIcon from "../assets/icon/HtmlIcon";
import JavascriptIcon from "../assets/icon/JavascriptIcon";
import JestIcon from "../assets/icon/JestIcon";
import MuiIcon from "../assets/icon/MuiIcon";
import ReactIcon from "../assets/icon/ReactIcon";
import ReduxIcon from "../assets/icon/ReduxIcon";
import SassIcon from "../assets/icon/SassIcon";

const projectsData = [
  {
    name: "Holidaze",
    image: Holidaze,
    githubLink: "https://github.com/albertholskog/Holidaze_eksamen",
    description: `Holidaze is a modern accommodation booking site. It offers a
     dual-sided platform; one for customers to book holidays at various venues, 
     and another for admin users to manage venues and bookings. This was my final
     exam project at Noroff and the goal was to put together all knowledge.
     The required features of this website was given in the assignment, 
     but the design and user experience I have arranged myself.`,
    demoLink: "https://roaring-hummingbird-c27e57.netlify.app/",
    icons: [
      <ReactIcon key="react" size={20} />,
      <MuiIcon key="mui" size={20} />,
      <ReduxIcon key="redux" size={20} />,
      <JestIcon key="jest" size={20} />,
    ],project: "Exam project 4",
  },
  {
    name: "SkylineShop",
    image: SkylineShop,
    githubLink: "https://github.com/albertholskog/CA_React",
    description: `
    SkylineShop is an online store where users can buy various products. 
    The guidelines given for this assignment was to use Redux and React to create a mock online shop.`,
    demoLink: "https://jolly-paletas-e16263.netlify.app/",
    icons: [
      <ReactIcon key="react" size={20} />,
      <CssIcon key="Css" size={20} />,
      <ReduxIcon key="redux" size={20} />,
    ],
    project: "Course assignment 2",
  },
  {
    name: "Bid:it",
    image: Bidit,
    githubLink: "https://github.com/albertholskog/Semester-Project-2",
    description: `Bid:it is an auction website where you can create your own listings and bid on others items.
     You can create your own user on the site or you can search for special items.
     I wanted the design to be clean and simple with few disturbances so that the items up for bidding would be in focus`,
    demoLink: "https://albertholskog.github.io/Semester-Project-2/index.html",
    icons: [
      <JavascriptIcon key="Javascript" size={20} />,
      <BootstrapIcon key="Bootstrap" size={20} />,
      <SassIcon key="Sass" size={20} />,
      <CypressIcon key="Cypress" size={20} />,
      <JestIcon key="jest" size={20} />,
    ],
    project: "Exam project 3",
  },
  {
    name: "BeardLand",
    image: BeardLand,
    githubLink: "https://github.com/username/project2",
    description: `Beardland is simply a blog about beards.. 
    I wanted it to be a go-to resource containing all beard related content.
     The blog holds different articles, recommendations and inspiration about beards.
     The target group addressed is men and the design is therefore a bit masculine and practical.`,
    demoLink: "",
    icons: [
      <JavascriptIcon key="Javascript" size={20} />,
      <HtmlIcon key="Html" size={20} />,
      <CssIcon key="Css" size={20} />,
    ],
    project: "Exam project 2",
  },
  {
    name: "Gamehub",
    image: Gamehub,
    githubLink: "https://github.com/albertholskog/emmneoppgave-gamehub",
    description: `GameHub is a website for buying and selling games, both new and second hand.
      This website aims at gamers aged 18 to 25, providing games at competitive prices.
       Considering this was my first ever front-end project the design is quite simple,
     but I wanted to include it in my portfolio to show my progress in design principles. `,
    demoLink: "https://sharp-northcutt-2538a8.netlify.app/",
    icons: [<HtmlIcon key="Html" size={20} />, <CssIcon key="Css" size={20} />],
    project: "Course assignment 1",
  },
  {
    name: "Community Science Museum",
    image: Community,
    githubLink: "https://github.com/albertholskog/semesteroppgave-semester1",
    description: ` This is a website for a museum called the Community Science Museum.
       The website is design to inform and engage school children ages 7 to
        15 and their parents. On this site you will find information about the museum and its program. 
      In addition you can sign up for tours and support the museum by getting involved. `,
    demoLink: "https://gracious-mahavira-3568d2.netlify.app/index.html",
    icons: [<HtmlIcon key="Html" size={20} />, <CssIcon key="Css" size={20} />],
    project: "Exam project 1",
  },
];

export default projectsData;
