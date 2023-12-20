import getRandom from "@/lib/utils/getRandom";

function Stars() {
  function multipleBoxShadow(n: number) {
    let value = `${getRandom(2000)}px ${getRandom(2000)}px #fff`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2000)}px ${getRandom(2000)}px #fff`;
    }
    return value;
  }

  const shadows = [
    {shadow: multipleBoxShadow(700), size: 1, animationtime: 50},
    {shadow: multipleBoxShadow(200), size: 2, animationtime: 100},
    {shadow: multipleBoxShadow(100), size: 3, animationtime: 150},
  ];

  return (
    <>
      {shadows.map((star, index) => (
        <div
          key={index}
          className="relative animate-spin"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: star.shadow,
            animationDuration: `${star.animationtime}s`,
          }}>
          <div
            className="absolute"
            style={{
              content: '""',
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: "transparent",
            }}></div>
        </div>
      ))}
    </>
  );
}

export default Stars;
