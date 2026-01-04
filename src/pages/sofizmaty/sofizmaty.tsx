import { useState, useEffect, useRef } from 'react';
import Navbar from "../../components/navbar";
import logo from "../../assets/mathLox_icon.png";
import Sofizmat1 from "@/components/sofizmaty/sofizmat1";
import Sofizmat2 from "@/components/sofizmaty/sofizmat2";
import Sofizmat3 from "@/components/sofizmaty/sofizmat3";
import Sofizmat4 from "@/components/sofizmaty/sofizmat4";

export default function Sofizmaty() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sofizmatyComponents = [
    { id: 1, component: <Sofizmat1 /> },
    { id: 2, component: <Sofizmat2 /> },
    { id: 3, component: <Sofizmat3 /> },
    { id: 4, component: <Sofizmat4 /> },
  ];

  const scrollToSlide = (index: number) => {
    if (!isTransitioning && index >= 0 && index < sofizmatyComponents.length) {
      setIsTransitioning(true);
      setActiveIndex(index);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollToSlide(activeIndex - 1);
      } else if (e.key === 'ArrowRight') {
        scrollToSlide(activeIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!isTransitioning) {
      if (e.deltaY > 0) {
        scrollToSlide(activeIndex + 1);
      } else {
        scrollToSlide(activeIndex - 1);
      }
    }
  };

  return (
    <div className="bg-gray-950 h-screen overflow-hidden">
      <Navbar logoSrc={logo} title="/Sofizmaty" />

      <div className="relative h-[calc(100vh-4rem)] select-none">
        <button
          onClick={() => scrollToSlide(activeIndex - 1)}
          disabled={activeIndex === 0 || isTransitioning}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full text-white transition-all duration-300 ${activeIndex === 0 || isTransitioning
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gray-800/70 hover:bg-gray-700/70 hover:scale-110'
            }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scrollToSlide(activeIndex + 1)}
          disabled={activeIndex === sofizmatyComponents.length - 1 || isTransitioning}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full text-white transition-all duration-300 ${activeIndex === sofizmatyComponents.length - 1 || isTransitioning
              ? 'opacity-50 cursor-not-allowed'
              : 'bg-gray-800/70 hover:bg-gray-700/70 hover:scale-110'
            }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={containerRef}
          className="h-full w-full relative overflow-hidden"
          onWheel={handleWheel}
        >
          <div
            className="flex h-full transition-[transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(-${activeIndex * 100}vw)`,
              width: `${sofizmatyComponents.length * 100}vw`
            }}
          >
            {sofizmatyComponents.map((item) => (
              <div
                key={item.id}
                className="w-screen h-full flex items-center justify-center p-4 flex-shrink-0"
              >
                <div className="w-full max-w-4xl transition-opacity duration-500 ease-in-out">
                  {item.component}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-3">
          {sofizmatyComponents.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${activeIndex === index
                  ? 'bg-blue-500 scale-125'
                  : 'bg-gray-500 hover:bg-gray-400'
                } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
            />
          ))}
        </div>

        <div className="absolute bottom-4 right-4 z-10 bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm transition-all duration-300">
          {activeIndex + 1} / {sofizmatyComponents.length}
        </div>
      </div>
    </div>
  );
}