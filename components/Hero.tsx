
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center text-center rounded-lg overflow-hidden">
          <img
            src="https://picsum.photos/seed/hero/1600/900"
            alt="Fashion model"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Timeless Style, Modern Grace
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg sm:text-xl">
              Discover our curated collection of ethically crafted pieces designed to last a lifetime.
            </p>
            <a
              href="#products"
              className="mt-8 inline-block bg-white text-stone-900 font-semibold py-3 px-8 rounded-md hover:bg-stone-200 transition-all duration-300 transform hover:scale-105"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
