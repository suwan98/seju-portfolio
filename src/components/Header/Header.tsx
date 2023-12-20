import LINK_MAP from "@/constants/LINK_MAP";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="shadow-md min-w-full p-8 bg-[#212121] text-neutral-200 bg-blend-overlay font-intel">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-x-2">
            <h1 className=" max-w-md:text-xl">Seju Portfolio</h1>
          </div>

          <ul className="flex gap-6">
            {LINK_MAP.map(({href, title}) => (
              <Link key={title} href={href}>
                {title}
              </Link>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
