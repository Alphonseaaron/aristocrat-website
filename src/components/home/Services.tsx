
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "General Insurance",
      description: "Comprehensive coverage for your home, car, business and other assets to protect against various risks.",
      icon: (
        <svg className="w-10 h-10 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Life & Pension",
      description: "Secure your family's financial future and enjoy comfortable retirement through our expert pension planning.",
      icon: (
        <svg className="w-10 h-10 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Group Medical",
      description: "Comprehensive healthcare solutions for your team, ensuring they have access to quality medical services.",
      icon: (
        <svg className="w-10 h-10 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Managed Medical",
      description: "Tailored healthcare schemes designed to meet specific requirements with optimal benefits and cost management.",
      icon: (
        <svg className="w-10 h-10 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-aristocrat-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What We Do</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Aristocrats provides all General Insurance, Life & Pension, Group Medical, and Managed Medical schemes. 
            We are also in touch with Lloyd's Brokers in the U.K. for any special risks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-aristocrat-dark">{service.title}</h3>
              <p className="mb-4 text-sm">{service.description}</p>
              <Link to="/services" className="text-aristocrat-green hover:text-aristocrat-lightGreen font-medium transition-colors">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-6 text-lg">
            Our range of products is extensive, and as members of the Association of Insurance Brokers of Kenya, 
            we provide an independent and professional service for our clients.
          </p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
