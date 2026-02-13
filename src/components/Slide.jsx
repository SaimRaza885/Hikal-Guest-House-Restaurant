import { useEffect, useState } from "react";

function Slide({ image, active }) {
  const [loaded, setLoaded] = useState(false);

  // Reset loading when image changes
  useEffect(() => {
    setLoaded(false);
  }, [image]);

  return (
    <div
      className={`
        absolute inset-0 bg-cover bg-center bg-no-repeat
        will-change-transform brightness-50
        transition-opacity duration-[1400ms] ease-in-out
        ${active ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"}
      `}
      style={{
        backgroundImage: `url('${image}')`,
        transitionProperty: "opacity, transform",
        transitionDuration: active ? "6000ms" : "1400ms", // long zoom duration
      }}
    >
      {/* hidden img ensures no white flash */}
      <img
        src={image}
        alt=""
        className="hidden"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default Slide;
