import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Breeds from './components/Breeds';
import PoultryCareGuide from './components/PoultryCareGuide';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Breeds />
        <PoultryCareGuide />
        <Testimonials />
        <FAQ />
        <Order />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
