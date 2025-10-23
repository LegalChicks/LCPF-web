import React from 'react';
import type { Testimonial } from '../types';

// Define TestimonialCard component here to avoid circular dependencies and keep it co-located
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
        <p className="mt-4 font-bold text-gray-800">{testimonial.author}</p>
        <p className="text-sm text-red-700">{testimonial.location}</p>
    </div>
);


const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            quote: "Maraming salamat, Legal Chicks! The trio I bought last year is now a thriving flock. My family enjoys fresh eggs daily, and we even sell the surplus to our neighbors.",
            author: "Mang Jose",
            location: "Isabela"
        },
        {
            quote: "Their day-old chicks are so healthy and active. The vaccination gives me peace of mind. Highly recommended for anyone starting a small poultry business.",
            author: "Aling Maria",
            location: "Tuguegarao City"
        },
        {
            quote: "The best quality Rhode Island Reds I've found in Cagayan. The owners are very helpful and provide great advice for beginners like me.",
            author: "David L.",
            location: "Solana, Cagayan"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Farmers Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Stories of success from our community partners.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;