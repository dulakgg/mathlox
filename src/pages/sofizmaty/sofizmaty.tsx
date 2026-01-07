import Navbar from "../../components/navbar";
import logo from "../../assets/mathLox_icon.png";
import Sofizmat1 from "@/components/sofizmaty/sofizmat1";
import Sofizmat2 from "@/components/sofizmaty/sofizmat2";
import Sofizmat3 from "@/components/sofizmaty/sofizmat3";
import Sofizmat4 from "@/components/sofizmaty/sofizmat4";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function Sofizmaty() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const lastNavAtRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const touchEndYRef = useRef<number | null>(null);

  // Stała dla liczby sofizmatów
  const SOFIZMAT_COUNT = 4;
  const MAX_INDEX = SOFIZMAT_COUNT - 1; // 3

  function mniejsza(next: number) {
    return Math.max(0, Math.min(MAX_INDEX, next));
  }

  function goTo(next: number) {
    const clamped = mniejsza(next);
    const now = Date.now();
    if (now - lastNavAtRef.current < 650) return;
    lastNavAtRef.current = now;
    setDirection(clamped > index ? 1 : -1);
    setIndex(clamped);
  }

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [index]);

  function scrollem(e: React.WheelEvent) {
    const current = scrollRef.current;
    if (!current) return;

    const isAtTop = current.scrollTop <= 2;
    const isAtBottom =
      current.scrollTop + current.clientHeight >= current.scrollHeight - 2;

    if (e.deltaY > 0 && isAtBottom) {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.deltaY < 0 && isAtTop) {
      e.preventDefault();
      goTo(index - 1);
    }
  }

  function telefonStart(e: React.TouchEvent) {
    const y = e.touches[0]?.clientY;
    if (typeof y !== "number") return;
    touchStartYRef.current = y;
    touchEndYRef.current = y;
  }

  function telefonMove(e: React.TouchEvent) {
    const y = e.touches[0]?.clientY;
    if (typeof y !== "number") return;
    touchEndYRef.current = y;
  }

  function telefonEnd() {
    const startY = touchStartYRef.current;
    const endY = touchEndYRef.current;
    touchStartYRef.current = null;
    touchEndYRef.current = null;
    if (typeof startY !== "number" || typeof endY !== "number") return;

    const current = scrollRef.current;
    if (!current) return;

    const delta = startY - endY;
    if (Math.abs(delta) < 60) return;

    const isAtTop = current.scrollTop <= 2;
    const isAtBottom =
      current.scrollTop + current.clientHeight >= current.scrollHeight - 2;

    if (delta > 0 && isAtBottom) {
      goTo(index + 1);
    } else if (delta < 0 && isAtTop) {
      goTo(index - 1);
    }
  }

  // Renderowanie odpowiedniego sofizmatu
  const renderSofizmat = () => {
    switch (index) {
      case 0:
        return <Sofizmat1 />;
      case 1:
        return <Sofizmat2 />;
      case 2:
        return <Sofizmat3 />;
      case 3:
        return <Sofizmat4 />;
      default:
        return <Sofizmat1 />;
    }
  };

  return (
    <div className="h-dvh overflow-hidden flex flex-col">
      <Navbar logoSrc={logo} title="/Sofizmaty" showThemeToggle={true} />
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, y: direction === 1 ? 28 : -28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction === 1 ? -28 : 28 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <div
              ref={scrollRef}
              className="h-full overflow-y-auto overscroll-contain"
              onWheel={scrollem}
              onTouchStart={telefonStart}
              onTouchMove={telefonMove}
              onTouchEnd={telefonEnd}
            >
              {renderSofizmat()}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <div className="pointer-events-auto inline-flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Poprzedni sofizmat"
              className="h-10 w-10 rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm backdrop-blur transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none hover:bg-white hover:scale-[1.03] dark:border-gray-800 dark:bg-gray-950/70 dark:text-gray-200 dark:hover:bg-gray-950"
            >
              <IoChevronUpOutline className="mx-auto h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === MAX_INDEX}
              aria-label="Następny sofizmat"
              className="h-10 w-10 rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm backdrop-blur transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none hover:bg-white hover:scale-[1.03] dark:border-gray-800 dark:bg-gray-950/70 dark:text-gray-200 dark:hover:bg-gray-950"
            >
              <IoChevronDownOutline className="mx-auto h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}