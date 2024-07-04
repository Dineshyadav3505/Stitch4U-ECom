import React, { useEffect, useState } from 'react';

const ProductSlide = ({ product }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval;
    if (product && product.imageURL) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % product.imageURL.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [product, currentSlide]);

  return (
    <div className="pt-16 h-full w-full lg:w-1/2">
      <div className="w-full h-screen relative">
        {product.imageURL.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="h-full md:w-full object-cover"
            />
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {product.imageURL.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;