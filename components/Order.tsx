
import React, { useState } from 'react';

const Order: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const googleFormUrl = "https://legalchicks.github.io/orders/";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="order" className="py-20 bg-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to Start Your Farm?</h2>
          <p className="mt-4 text-xl text-red-100">
            Click the button below to reserve your poultry. We'll contact you to confirm your order and schedule a pickup or delivery.
          </p>
          <button
            onClick={openModal}
            className="mt-8 inline-block bg-white hover:bg-red-50 text-red-700 font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Reserve Your Trio Now
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full transform transition-all" role="document">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-900" id="modal-title">Order Reservation</h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600" aria-label="Close modal">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4">
                <p className="text-gray-600">
                  You are about to reserve our highly sought-after <strong>Trio Starter Package</strong> (2 hens, 1 rooster). This is the perfect start for your own backyard egg-laying business!
                </p>
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Next Steps:</h4>
                  <ol className="list-decimal list-inside mt-2 text-gray-600 space-y-1">
                    <li>Click the "Proceed to Form" button below.</li>
                    <li>You will be taken to our secure Google Form.</li>
                    <li>Fill out your contact and order details.</li>
                    <li>We will contact you within 24-48 hours to confirm.</li>
                  </ol>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  Please note: This is a reservation, not a final purchase. No payment is required at this time.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4 flex justify-end rounded-b-lg">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={closeModal}
              >
                Proceed to Form
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
