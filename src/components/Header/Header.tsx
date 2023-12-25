"use client";

import LINK_MAP from "@/constants/LINK_MAP";
import useStore from "@/store/SectionActiveStore";
import Link from "next/link";

function Header() {
  const {activeIndex, setActiveIndex} = useStore();

  const moveToSection = (href: string) => {
    const willMoveElement = document.getElementById(href);
    if (willMoveElement) {
      window.scrollTo({
        top: willMoveElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (index: number, href: string) => () => {
    setActiveIndex(index);
    moveToSection(href);
  };

  return (
    <>
      <header className="shadow-md min-w-full p-8 bg-[#212121] text-neutral-200 bg-blend-overlay font-intel fixed z-20">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-x-2">
            <h1>Seju Portfolio</h1>
          </div>

          <nav className="flex gap-6">
            {LINK_MAP.map(({href, title}, index) => (
              <button key={title} onClick={handleLinkClick(index, href)}>
                <span
                  className={
                    activeIndex === index + 1 ? "text-highlight font-bold" : ""
                  }>
                  {title}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
