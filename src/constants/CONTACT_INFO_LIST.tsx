import {FcPhoneAndroid} from "react-icons/fc";
import {FaRegAddressBook} from "react-icons/fa6";
import {IoMdMail} from "react-icons/io";
import {GrBlog} from "react-icons/gr";
import {PiGithubLogoFill} from "react-icons/pi";
import { FaMicroblog } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import PERSONAL_INFORMATION from "./PERSONAL_INFORMATION";

const CONTACT_INFO_LIST = [
    {icon: <ImProfile />, text: PERSONAL_INFORMATION.birthDate},
  {icon: <FaRegAddressBook />, text: PERSONAL_INFORMATION.adderss},
  {icon: <FcPhoneAndroid />, text: PERSONAL_INFORMATION.phone},
  {icon: <IoMdMail />, text: PERSONAL_INFORMATION.social.email},
  {icon: <PiGithubLogoFill />, text: PERSONAL_INFORMATION.social.github},
  {icon: <GrBlog />, text: PERSONAL_INFORMATION.social.velog},
  {icon: <FaMicroblog />, text: PERSONAL_INFORMATION.social.myBlog},
];

export default CONTACT_INFO_LIST;
