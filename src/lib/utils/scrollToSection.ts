import {RefObject} from "react";

function scrollToSection(ref: RefObject<Element>) {
  if (ref.current) {
    ref.current.scrollIntoView({behavior: "smooth", block: "center"});
  }
}

export default scrollToSection;
