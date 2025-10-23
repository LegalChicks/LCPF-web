
import React from 'react';

const About: React.FC = () => {
  const farmerImageUrl = "https://images.pexels.com/photos/8100732/pexels-photo-8100732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Empowering Filipino Families, One Flock at a Time
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              At Legal Chicks, we're more than just a poultry farm; we're a family-run business in the heart of Cagayan Valley dedicated to empowering other Filipino families.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to provide high-quality, fully vaccinated starter flocks of Rhode Island Reds and Black Australorps. We make it easy and affordable for you to launch your own profitable egg-laying business, right from your backyard, ensuring a sustainable source of food and income for your loved ones.
            </p>
          </div>
          <div className="mt-10 lg:mt-0" aria-hidden="true">
            <img 
              className="rounded-lg shadow-xl" 
              src={farmerImageUrl} 
              alt="A Filipino farmer tending to chickens in a lush green environment." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
