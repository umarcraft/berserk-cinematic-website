import { useEffect, useState } from "react";
import { useIsTouchDevice } from "../../hooks/useMediaQuery";

export default function Cursor() {
  const isTouchDevice = useIsTouchDevice();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isTouchDevice) return undefined;

    document.body.classList.add("has-custom-cursor");

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed z-[999999] h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-berserk-red shadow-[0_0_20px_rgba(139,0,0,0.8)] backdrop-blur-sm transition-[width,height] duration-200"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  );
}
