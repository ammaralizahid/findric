'use client';
import { ReactNode,useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProductSliderProps {
  children: ReactNode; // Accepts any children (i.e., Card components)
  autoScroll?: boolean;
  scrollSpeed?: number;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  children,
}) => {

  const ProductSliderRef = useRef<HTMLDivElement | null>(null);


  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4">

      <div className="relative  overflow-hidden"
      >
        <div
          ref={ProductSliderRef}
          className="flex overflow-x-scroll scrollbar-hide py-4 p-0.5 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {children}
        </div>
      </div>

      <button
        onClick={() =>
          ProductSliderRef.current &&
          (ProductSliderRef.current.scrollLeft -= ProductSliderRef.current.clientWidth)
        }
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#4DB6AC]/70 hover:bg-[#4DB6AC]/50 p-3 rounded-full shadow-lg transition-all z-10 hidden sm:block"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-white text-xl" />
      </button>

      <button
        onClick={() =>
          ProductSliderRef.current &&
          (ProductSliderRef.current.scrollLeft += ProductSliderRef.current.clientWidth)
        }
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#4DB6AC]/50 hover:bg-[#4DB6AC]/70 p-3 rounded-full shadow-lg transition-all z-10 hidden sm:block"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-white text-xl" />
      </button>
    </div>
  );
};

export default ProductSlider;
