
import React from 'react';

const Hero: React.FC = () => {
  const heroImageUrl = "https://images.pexels.com/photos/1996057/pexels-photo-1996057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-56 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Start Your Poultry Income Today
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          High-quality, vaccinated poultry for your backyard farm in Cagayan Valley.
        </p>
        <a 
          href="#order" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          Reserve My Trio
        </a>
      </div>
    </section>
  );
};

export default Hero;
