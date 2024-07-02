import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const ImageCarousel = () => {
  const slider = useSelector(state => state.home.swiperImg)
  const slides = slider[0].imageURL;
  const [currentSlide, setCurrentSlide] = useState(0);



  return (
    <div className="w-full h-screen relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="h-full md:w-full  object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-gray-400 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;