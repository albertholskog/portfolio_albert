import Holidaze from "../assets/projectsImages/HolidazeHome.png";
import Bidit from "../assets/projectsImages/Bidit.png";
import BeardLand from "../assets/projectsImages/BeardLand.png";
import Gamehub from "../assets/projectsImages/Gamehub.png";
import Community from "../assets/projectsImages/Community.png";
import SkylineShop from "../assets/projectsImages/SkylineShop.png";
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
    description: "test",
    demoLink: "https://roaring-hummingbird-c27e57.netlify.app/",
    icons: [
      <ReactIcon key="react" size={20}/>,
      <MuiIcon key="mui" size={20}/>,
      <ReduxIcon key="redux"size={20} />,
      <JestIcon key="jest" size={20}/>,
    ],
  },
  {
    name: "SkylineShop",
    image: SkylineShop,
    githubLink: "https://github.com/albertholskog/CA_React",
    description: "test",
    demoLink: "https://bright-hotteok-d98ecd.netlify.app/",
    icons: [
      <ReactIcon key="react" size={20}/>,
      <CssIcon key="Css" size={20}/>,
      <ReduxIcon key="redux"size={20}/>,
    ],
  },
  // {
  //   name: "Bid:it",
  //   image: Bidit,
  //   githubLink: "https://github.com/albertholskog/Semester-Project-2",
  //   description: "test",
  //   demoLink: "https://bright-hotteok-d98ecd.netlify.app/",
  //   icons: [
  //     <JavascriptIcon key="Javascript"size={20} />,
  //     <BootstrapIcon key="Bootstrap" size={20}/>,
  //     <SassIcon key="Sass" size={20}/>,
  //     <CypressIcon key="Cypress" size={20}/>,
  //     <JestIcon key="jest" size={20}/>,
  //   ],
  // },
  // {
  //   name: "BeardLand",
  //   image: BeardLand,
  //   githubLink: "https://github.com/username/project2",
  //   description: "test",
  //   demoLink: "",
  //   icons: [
  //     <JavascriptIcon key="Javascript"size={20} />,
  //     <HtmlIcon key="Html" size={20}/>,
  //     <CssIcon key="Css" size={20}/>,
  //   ],
  // },
  // {
  //   name: "Gamehub",
  //   image: Gamehub,
  //   githubLink: "https://github.com/albertholskog/emmneoppgave-gamehub",
  //   description: "test",
  //   demoLink: "https://sharp-northcutt-2538a8.netlify.app/",
  //   icons: [<HtmlIcon key="Html" size={20} />, <CssIcon key="Css" size={20}/>],
  // },
  // {
  //   name: "Community Science Museum",
  //   image: Community,
  //   githubLink: "https://github.com/albertholskog/semesteroppgave-semester1",
  //   description: "test",
  //   demoLink: "https://gracious-mahavira-3568d2.netlify.app/index.html",
  //   icons: [<HtmlIcon key="Html" size={20}/>, <CssIcon key="Css" size={20}/>],
  // },
];

export default projectsData;
