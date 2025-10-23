
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    date: '',
    time: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      // Simulate a random success/error for demonstration
      if (Math.random() > 0.1) { // 90% success rate
        setSubmitStatus('success');
        setFormData({ name: '', mobile: '', location: '', date: '', time: '' });
      } else {
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
    }, 2000);
  };

  const phoneNumber = '+639171234567';
  const facebookMessengerUrl = 'https://m.me/legalchicksfarm';

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Have questions? Schedule a free consultation call or reach us directly.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule a Call Back</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile No.</label>
                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location (e.g., Tuguegarao City)</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time</label>
                  <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"/>
                </div>
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-400 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Submitting...' : 'Request a Call'}
                </button>
              </div>
              {submitStatus === 'success' && <p className="text-green-600 text-center">Thank you! We've received your request and will call you back soon.</p>}
              {submitStatus === 'error' && <p className="text-red-600 text-center">Something went wrong. Please try again or contact us directly.</p>}
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-8 pt-8 md:pt-0">
            <a href={`tel:${phoneNumber}`} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white">
                  <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-900">Call Us Directly</p>
                <p className="text-gray-600 text-lg">{phoneNumber}</p>
              </div>
            </a>
            
            <a href={facebookMessengerUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-600 text-white">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 12 2.04Z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl font-medium text-gray-900">Message Us on Facebook</p>
                <p className="text-gray-600 text-lg">@legalchicksfarm</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
