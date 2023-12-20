import CONTACT_INFO_LIST from "@/constants/CONTACT_INFO_LIST";
import React from "react";

function ContactInfo() {
  const renderALinkOrSpan = (text: string) => {
    return text.includes("https" || "http") ? (
      <a
        href={text}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 underline decoration-neutral-200
        underline-offset-[4px]">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    );
  };

  return (
    <div className="flex gap-6 items-center justify-center">
      <ul>
        {CONTACT_INFO_LIST.map(({icon, text}, i) => (
          <li key={i} className="flex gap-4 items-center justify-start pb-2">
            <span>{icon}</span>
            {renderALinkOrSpan(text)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
