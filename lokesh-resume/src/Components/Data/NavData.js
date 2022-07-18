import {
  faAddressCard,
  faAtom,
  faHome,
  faTrophy,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../Elements/Home";
import About from "../Elements/About";
import Projects from "../Elements/Projects";
import Achivements from "../Elements/Achivements";
import Stacks from "../Elements/Stacks";
export const Navs = [
  { id: 1, title: "Home", icon: faHome, element: <Home /> },
  { id: 2, title: "About", icon: faAddressCard, element: <About /> },
  { id: 3, title: "Projects", icon: faAtom, element: <Projects /> },
  { id: 4, title: "Achivements", icon: faTrophy, element: <Achivements /> },
  { id: 5, title: "Stacks", icon: faMicrochip, element: <Stacks /> },
];
