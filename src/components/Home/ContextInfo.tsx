import CONTACT_INFO_LIST from "@/constants/CONTACT_INFO_LIST";
import React from "react";

function ContactInfo() {
  const renderALinkOrSpan = (text: string) => {
    return text.includes("https" || "http") ? (
      <a href={text} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    );
  };

  return (
    <div className="flex gap-4 items-center justify-center">
      <ul>
        {CONTACT_INFO_LIST.map(({icon, text}, i) => (
          <li key={i} className="flex gap-4 items-center justify-start">
            <span>{icon}</span>
            {renderALinkOrSpan(text)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
