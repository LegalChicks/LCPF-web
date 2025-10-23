
import React from 'react';

interface BreedAdvantage {
  title: string;
  text: string;
}

interface Breed {
  name: string;
  description: string;
  advantages: BreedAdvantage[];
  bestFor: string;
  imageUrl: string;
  imageAlt: string;
}

const BreedDetail: React.FC<Breed & { reverse?: boolean }> = ({ name, description, advantages, bestFor, imageUrl, imageAlt, reverse = false }) => {
  const imageBlock = (
    <div className="mt-10 lg:mt-0">
      <img className="rounded-lg shadow-xl mx-auto" src={imageUrl} alt={imageAlt} />
    </div>
  );

  const textBlock = (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-red-800 sm:text-3xl">{name}</h3>
      <p className="text-lg text-gray-600">{description}</p>
      <ul className="space-y-3 text-gray-600">
        {advantages.map((advantage, index) => (
          <li key={index} className="flex items-start">
            <svg className="flex-shrink-0 h-6 w-6 text-green-600 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>{advantage.title}:</strong> {advantage.text}</span>
          </li>
        ))}
      </ul>
      <p className="pt-4 font-semibold text-gray-800 text-lg">
        <strong>Best For:</strong> {bestFor}
      </p>
    </div>
  );

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
      {reverse ? textBlock : imageBlock}
      {reverse ? imageBlock : textBlock}
    </div>
  );
};

const Breeds: React.FC = () => {
  const breeds: Breed[] = [
    {
      name: 'Rhode Island Red',
      description: "One of the most famous and popular breeds worldwide, the Rhode Island Red is a fantastic dual-purpose bird. They are known for their hardiness, excellent foraging skills, and friendly disposition, making them a reliable choice for both beginners and experienced farmers in the Philippines.",
      advantages: [
        { title: 'Prolific Egg Layers', text: 'Consistently produce 250-300 large, brown eggs per year.' },
        { title: 'Hardy & Resilient', text: 'Adapt well to the Philippine climate and are resistant to common poultry diseases.' },
        { title: 'Good Foragers', text: 'Can supplement their diet by foraging, which helps reduce feed costs.' }
      ],
      bestFor: "Families seeking a dependable supply of daily eggs and a good source of meat.",
      imageUrl: 'https://images.pexels.com/photos/105994/pexels-photo-105994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'A healthy Rhode Island Red chicken in a farm setting.'
    },
    {
      name: 'Black Australorp',
      description: "Originating from Australia, the Black Australorp is a record-setting egg layer with a calm and gentle nature. Their beautiful, iridescent black plumage and docile temperament make them a wonderful and productive addition to any backyard flock.",
      advantages: [
        { title: 'Exceptional Egg Production', text: 'Known for laying over 300 light brown eggs annually.' },
        { title: 'Docile & Friendly', text: 'Easy to manage and great for families with children.' },
        { title: 'Dual-Purpose', text: 'Grow to a good size, providing a substantial amount of meat.' }
      ],
      bestFor: "Farmers prioritizing high egg yield and a gentle flock that is easy to handle.",
      imageUrl: 'https://images.pexels.com/photos/1769279/pexels-photo-1769279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'A Black Australorp chicken with glossy black feathers.'
    }
  ];

  return (
    <section id="breeds" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Premier Breeds</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Hand-selected for performance and resilience in the local climate.
          </p>
        </div>
        <div className="mt-20 space-y-20">
          <BreedDetail {...breeds[0]} />
          <BreedDetail {...breeds[1]} reverse={true} />
        </div>
      </div>
    </section>
  );
};

export default Breeds;
