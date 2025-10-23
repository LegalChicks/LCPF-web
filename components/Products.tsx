import React from 'react';
import type { Product } from '../types';

// Define ProductCard component here to avoid circular dependencies and keep it co-located
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
    <img className="h-56 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" src={product.imageUrl} alt={product.name} />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
    </div>
  </div>
);


const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: 'Trio Starter Package',
      description: 'Our signature package includes two (2) vaccinated hens and one (1) rooster of either Rhode Island Red or Black Australorp, the perfect foundation for a productive flock.',
      imageUrl: 'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Fertile Eggs',
      description: 'High-fertility eggs from our prime breeders. Ideal for incubation and growing your flock from the very start with strong genetics.',
      imageUrl: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Day-Old Chicks',
      description: 'Healthy, vibrant, and vaccinated day-old chicks. Get a head start on your poultry journey with our robust and carefully selected young birds.',
      imageUrl: 'https://images.pexels.com/photos/6689454/pexels-photo-6689454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Custom Feed Pellets',
      description: 'Specially formulated feed to ensure optimal growth, health, and egg production for your flock. Made with high-quality, locally sourced ingredients.',
      imageUrl: 'https://images.pexels.com/photos/9820556/pexels-photo-9820556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Quality poultry and supplies to ensure your success.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;