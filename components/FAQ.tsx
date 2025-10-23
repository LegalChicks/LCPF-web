import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
      aria-expanded={isOpen}
    >
      <span>{question}</span>
      <svg
        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <p className="pt-2 pr-10 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What breeds do you offer?",
      answer: "We specialize in Rhode Island Reds and Black Australorps, chosen for their resilience and high egg production in the Philippine climate."
    },
    {
      question: "Are the chicks vaccinated?",
      answer: "Yes, all our chicks and trio packages come fully vaccinated to ensure they have a healthy start. We believe in providing robust flocks for our customers."
    },
    {
      question: "How do I place an order?",
      answer: "You can reserve your poultry by clicking the 'Order Now' button and filling out our reservation form. We will contact you to confirm the details and schedule for pickup or delivery."
    },
    {
      question: "Do you deliver?",
      answer: "We primarily cater to the Cagayan Valley region. Please get in touch with us to discuss possible delivery options to your specific location."
    },
    {
      question: "I'm new to poultry farming. Do you offer guidance?",
      answer: "Absolutely! Our mission is to help you succeed. We provide a basic care guide on our website, and we're always happy to answer your questions when you contact us."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Your questions, answered.
          </p>
        </div>
        <div className="mt-12">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
