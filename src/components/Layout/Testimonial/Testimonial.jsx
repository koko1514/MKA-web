import { useState, useEffect, useCallback } from "react";
import TestimonialCard, { testimonials } from "../../Fragment/TestimonialCard";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeSlide = (index) => {
    if (index !== currentIndex) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setFade(false);
      }, 500);
    }
  };

  const nextSlide = useCallback(() => {
    changeSlide((currentIndex + 1) % testimonials.length);
  });

  const prevSlide = () => {
    changeSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <section
      className="font-lato relative bg-cover bg-center py-30"
      style={{
        backgroundImage: `url('/assets/Building2.svg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Testimonial Content */}
      <div className="relative z-10 flex justify-center">
        <div
          className={`transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-25 transform -translate-y-1/2 bg-black/40 text-white py-4 px-2 rounded-lg hover:bg-opacity-80 z-20"
        >
          <FaAngleLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-25 transform -translate-y-1/2 bg-black/40 text-white py-4 px-2 rounded-lg hover:bg-opacity-80 z-20"
        >
          <FaAngleRight size={20} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="relative z-10 mt-6 flex justify-center space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => changeSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-primary scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
