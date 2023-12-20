import {RefObject} from "react";

function scrollToSection(ref: RefObject<Element>) {
  if (ref.current) {
    ref.current.scrollIntoView({behavior: "smooth"});
  }
}

export default scrollToSection;
