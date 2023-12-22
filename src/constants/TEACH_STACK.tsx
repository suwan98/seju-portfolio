import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {FaReact} from "react-icons/fa";
import {SiTypescript} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

const TEACH_STACK = [
  {icon: <FaHtml5 color="#E34F26" />, name: "HTML5"},
  {icon: <FaCss3Alt color="#1572B6" />, name: "CSS3"},
  {
    icon: <IoLogoJavascript color="#F7DF1E" />,
    name: "JavaScript",
  },
  {icon: <FaReact color="#61DAFB" />, name: "React"},
  {
    icon: <SiTypescript color="#3178C6" />,
    name: "TypeScript",
  },
  {
    icon: <TbBrandNextjs color="#000000" />,
    name: "Next.js",
  },
];

export default TEACH_STACK;
