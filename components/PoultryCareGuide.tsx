// FIX: The 'Cannot find namespace JSX' error is resolved by importing React, which provides the necessary type definitions for JSX.
import React from 'react';

interface CareTip {
  icon: JSX.Element;
  title: string;
  description: string;
}

const CareTipCard: React.FC<{ tip: CareTip }> = ({ tip }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center items-center mb-4">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-700">
        {tip.icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
    <p className="text-gray-600">{tip.description}</p>
  </div>
);

const PoultryCareGuide: React.FC = () => {
  const careTips: CareTip[] = [
    {
      icon: <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: 'Proper Feeding',
      description: 'Provide constant access to fresh water and a quality layer feed. For chicks, use a starter feed. Supplement with kitchen scraps like vegetable peels and rice, but avoid salty or spoiled food.',
    },
    {
      icon: <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
      title: 'Secure Housing',
      description: 'A good coop protects your flock from predators and harsh weather. Ensure it is well-ventilated, dry, and has at least 2-3 square feet of space per chicken inside, with nesting boxes for laying eggs.',
    },
    {
      icon: <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 010-18 9 9 0 010 18zm0 0v-6m0 6H6m6-6h6" /></svg>,
      title: 'Health & Wellness',
      description: "Regularly check your chickens for signs of illness like lethargy or ruffled feathers. Keep the coop clean to prevent diseases. Our vaccinated chicks provide a strong, healthy start for your flock.",
    },
  ];

  return (
    <section id="care-guide" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Poultry Care Guide</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Basic tips to help your new flock thrive.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {careTips.map((tip, index) => (
            <CareTipCard key={index} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoultryCareGuide;