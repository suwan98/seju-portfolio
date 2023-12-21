import React from "react";
import CardWrapper from "./CardWrapper";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function SpeechBubble({children, className}: Props) {
  return (
    <CardWrapper className={className}>
      <div className="bubble-arrow"></div>
      {children}
    </CardWrapper>
  );
}
export default SpeechBubble;
