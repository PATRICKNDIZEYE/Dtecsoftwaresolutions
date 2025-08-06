'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Software Consultancy",
    description: "Studying your business needs to provide tailored  Solutions",
    image: "/about/deve.png"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Strategic online marketing to grow your business presence",
    image: "/about/marketing.png"
  },
  {
    id: 3,
    title: "Tech Training",
    description: "We offer training programs to upskill your team",
    image: "/about/productivity.png"
  }
];

export function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div 
      className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-blue-500/10 to-black z-10"></div>
      
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
            <motion.div
              className="mb-6 rounded-xl overflow-hidden shadow-2xl border-2 border-primary-500/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              style={{ width: '80%', maxWidth: '500px' }}
            >
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-auto object-cover"
                style={{ minHeight: '250px' }}
              />
            </motion.div>
            
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-4 font-heading text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentIndex].title}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300 text-center max-w-md px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slides[currentIndex].description}
            </motion.p>
          </div>
          
          {/* Abstract tech pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-500 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-blue-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-purple-500 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-primary-500/50 hover:bg-primary-500/80 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-primary-500/50 hover:bg-primary-500/80 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dots indicator */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary-500 w-8' : 'bg-white/70 w-4'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}