
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Celebrating 25+ Years in Service</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Since 1992, Aristocrats Insurance Brokers has been providing top-quality insurance services 
            to clients across East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="Aristocrats Insurance Building" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="section-subtitle text-aristocrat-green">Our Story</h3>
            <p className="mb-4">
              The roots of Aristocrats can be traced back to 1986 as Al-Karim Insurance Agency in Mombasa. 
              It later moved to the Prudential Building on Wabera Street, Nairobi, and changed its name to 
              Aristocrats Insurance Brokers Ltd.
            </p>
            <p className="mb-4">
              In 1996, Aristocrats relocated to the 9th floor of Loita House, occupying an entire floor. 
              In August 2006, the company moved to its own building, Aristocrats House, located on James 
              Gichuru Road in Lavington, Nairobi.
            </p>
            <p className="mb-6">
              Aristocrats is a general insurance broker transacting all classes of general insurance business. 
              The company has grown significantly, thanks to the support of clients and intermediaries over the years.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-aristocrat-green">Vision</h3>
            <p>
              To be a reputable company providing security and service to clients in the East African Region.
            </p>
          </div>
          <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-aristocrat-green">Mission</h3>
            <p>
              To grow profitably while providing excellent customer service and good returns to shareholders.
            </p>
          </div>
          <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-aristocrat-green">Values</h3>
            <ul className="list-disc list-inside">
              <li>Integrity</li>
              <li>Commitment</li>
              <li>Passion</li>
              <li>Speed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
