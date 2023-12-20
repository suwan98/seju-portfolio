function SectionDots() {
  const dots = Array(3).fill(null);

  return (
    <ul className="flex flex-col gap-4 fixed right-0 bottom-1/2 mr-12 cursor-pointer">
      {dots.map((dot, index) => (
        <button
          key={index}
          className="w-6 h-6 bg-neutral-500 rounded-full shadow-md hover:scale-110 ease-in-out delay-75 transition-transform">
          {dot}
        </button>
      ))}
    </ul>
  );
}

export default SectionDots;

// background: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
