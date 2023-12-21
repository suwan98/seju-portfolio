import React from "react";

interface Props {
  children: React.ReactNode;
  style?: string;
}

function SpeechBubble({children, style}: Props) {
  const defaultStyle =
    "p-4 bg-neutral-50 rounded-lg shadow-md relative m-4 w-64";
  return (
    <div className={`${defaultStyle}  ${style}`}>
      <div className="bubble-arrow"></div>
      <p>{children}</p>
    </div>
  );
}
export default SpeechBubble;
