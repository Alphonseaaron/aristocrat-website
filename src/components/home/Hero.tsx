
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-aristocrat-gray">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-aristocrat-dark">
              Your Trusted <span className="text-aristocrat-green">Insurance</span> Partner
            </h1>
            <p className="text-lg mb-8">
              Aristocrats Insurance Brokers provides comprehensive insurance solutions 
              with a personal touch. Celebrating over 25 years of excellence in service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Get a Quote
              </Link>
              <Link to="/services" className="border border-aristocrat-green text-aristocrat-green hover:bg-aristocrat-green hover:text-white py-2 px-6 rounded-md transition-colors duration-300 text-center">
                Our Services
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
                alt="Aristocrats Insurance Brokers Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-aristocrat-green bg-opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
