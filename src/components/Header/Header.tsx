"use client";

import LINK_MAP from "@/constants/LINK_MAP";
import useScrollStatus from "@/lib/hooks/useScrollStatus";
import useStore from "@/store/SectionActiveStore";
import Link from "next/link";
import {useRouter} from "next/router";

function Header() {
  const activeIndex = useStore((state) => state.activeIndex);
  const setActiveIndex = useStore((state) => state.setActiveIndex);

  const moveToSection = (elementId: string) => {
    const willMoveElement = document.getElementById(elementId);
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

  /* 스크롤시 헤더 투명도 조정 */
  const scrollState = useScrollStatus();

  return (
    <>
      <header
        className={`shadow-md min-w-full p-8 bg-[#212121] text-neutral-200 bg-blend-overlay font-intel fixed z-20 ${
          scrollState
            ? "bg-opacity-70 text-opacity-70 bg-blend-overlay backdrop-blur-xl"
            : null
        }`}>
        <div className="flex justify-between w-full">
          <Link className="flex items-center gap-x-2" href="/">
            <h1>Seju Portfolio</h1>
          </Link>

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
