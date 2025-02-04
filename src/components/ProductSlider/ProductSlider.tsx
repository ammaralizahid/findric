'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

interface ProductSliderProps {
  children: React.ReactNode;
  autoScroll?: boolean;
  scrollSpeed?: number;
  sliderId: string; 
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  children,
  autoScroll = false,
  scrollSpeed = 4000,
  sliderId,
}) => {

  if (!children) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  const prevButtonClass = `custom-prev-${sliderId}`;
  const nextButtonClass = `custom-next-${sliderId}`;

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={{
          nextEl: `.${nextButtonClass}`,
          prevEl: `.${prevButtonClass}`,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination', 
        }}
        allowTouchMove={true}
        touchEventsTarget="container"
        autoplay={autoScroll ? { delay: scrollSpeed } : false}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {React.Children.map(children, (child, index) => {
          if (!child) return null; 
          return (
              <SwiperSlide key={index} className="h-auto px-2 py-10">
              {child}
            </SwiperSlide>
          );
        })}
        <div className="custom-pagination"></div> 
      </Swiper>

      <button
        className={`${prevButtonClass} absolute left-0 top-1/2 -translate-y-1/2 bg-[#4DB6AC]/70 hover:bg-[#4DB6AC]/50 p-3 rounded-full shadow-lg transition-all z-10 hidden sm:block`}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-white text-xl" />
      </button>
      <button
        className={`${nextButtonClass} absolute right-0 top-1/2 -translate-y-1/2 bg-[#4DB6AC]/50 hover:bg-[#4DB6AC]/70 p-3 rounded-full shadow-lg transition-all z-10 hidden sm:block`}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-white text-xl" />
      </button>
    </div>
  );
};

export default ProductSlider;