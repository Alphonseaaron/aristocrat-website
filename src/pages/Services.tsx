
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "General Insurance",
      description: "Our General Insurance products provide comprehensive coverage for your valuable assets, offering protection against various risks and ensuring your peace of mind.",
      detailedDescription: "We offer a wide range of general insurance products including Motor, Fire, Burglary, All Risks, Public Liability, Employers Liability, Professional Indemnity, Bonds, and more. Our expert team will help you find the right coverage tailored to your specific needs.",
      icon: (
        <svg className="w-12 h-12 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Life & Pension",
      description: "Our Life & Pension solutions help you secure your family's financial future and prepare for a comfortable retirement with personalized planning.",
      detailedDescription: "We offer comprehensive life insurance and pension planning services to help you protect your loved ones and plan for a secure retirement. Our services include term life insurance, whole life insurance, endowment policies, retirement plans, and pension schemes tailored to your specific needs and goals.",
      icon: (
        <svg className="w-12 h-12 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Group Medical",
      description: "Our Group Medical insurance solutions provide comprehensive healthcare coverage for organizations, ensuring employees have access to quality medical services.",
      detailedDescription: "We offer tailored group medical insurance solutions for organizations of all sizes. Our comprehensive plans include inpatient, outpatient, dental, optical, and maternity coverage, ensuring your team receives quality healthcare. We work with leading medical insurance providers to offer the best coverage at competitive rates.",
      icon: (
        <svg className="w-12 h-12 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Managed Medical",
      description: "Our Managed Medical schemes are designed to meet specific healthcare requirements with optimal benefits and efficient cost management.",
      detailedDescription: "Our managed medical schemes are custom-designed healthcare solutions that balance comprehensive coverage with cost efficiency. We work closely with you to understand your specific healthcare needs and design a plan that provides optimal benefits while managing costs effectively. Our managed schemes include access to quality healthcare providers, preventive care, and wellness programs.",
      icon: (
        <svg className="w-12 h-12 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Special Risks Coverage",
      description: "For unique or high-value risks, we connect with Lloyd's Brokers in the UK to provide specialized insurance solutions tailored to your specific needs.",
      detailedDescription: "For complex, unique, or high-value risks that require specialized coverage, we leverage our relationships with Lloyd's Brokers in the UK. This allows us to access international insurance markets and provide customized solutions for risks that may not be adequately covered by standard insurance products in the local market.",
      icon: (
        <svg className="w-12 h-12 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Risk Management",
      description: "Our risk management services help you identify, assess, and mitigate potential risks to protect your assets and operations effectively.",
      detailedDescription: "We provide comprehensive risk management services to help you identify, assess, and mitigate potential risks to your business. Our approach includes risk assessment, development of risk management strategies, implementation of control measures, and ongoing monitoring and evaluation. Our goal is to help you minimize potential losses and protect your business assets and operations.",
      icon: (
        <svg className="w-12 h-12 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-aristocrat-green py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Our Services</h1>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Do</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Aristocrats provides comprehensive insurance solutions with a focus on quality service from quotation to claims settlements. 
              Our aim is to identify your needs and arrange quality programs to suit them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-aristocrat-gray p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-aristocrat-dark">{service.title}</h3>
                <p className="mb-6">{service.description}</p>
                <a href={`#service-${service.id}`} className="text-aristocrat-green hover:text-aristocrat-lightGreen font-medium transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-aristocrat-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Approach</h2>
              <p className="mb-4">
                Value for money is our philosophy, together with top-quality service from quotation to claims settlements. 
                Our aim is to identify your needs and arrange quality programs to suit them.
              </p>
              <p className="mb-6">
                As members of the Association of Insurance Brokers of Kenya, we provide an independent and professional 
                service for our clients, ensuring they receive the best possible insurance solutions tailored to their specific needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Assessment</h3>
                    <p>We take time to understand your unique needs and risks before recommending solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Comprehensive Coverage</h3>
                    <p>We ensure all aspects of your insurance needs are covered with optimal protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Efficient Claims Process</h3>
                    <p>We facilitate smooth and quick claims settlements when you need it most.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Ongoing Support</h3>
                    <p>We provide continuous assistance and review your coverage as your needs evolve.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Our Insurance Approach" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Insurance Solutions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of insurance products and services designed to meet your specific needs.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service) => (
              <div id={`service-${service.id}`} key={service.id} className="scroll-mt-24">
                <div className="bg-aristocrat-gray p-8 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 flex justify-center md:justify-start">
                      {service.icon}
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-bold mb-4 text-aristocrat-dark">{service.title}</h3>
                      <p className="mb-4">{service.description}</p>
                      <p>{service.detailedDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-aristocrat-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today for a personalized insurance consultation. Our experts will help you find the right coverage 
            for your unique needs.
          </p>
          <Link to="/contact" className="bg-white text-aristocrat-green hover:bg-aristocrat-gray transition-colors duration-300 py-3 px-8 rounded-md font-medium inline-block">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
