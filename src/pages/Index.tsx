
import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Team from '../components/home/Team';
import ContactForm from '../components/shared/ContactForm';

const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Team />
      
      {/* Testimonial/Quote Section */}
      <section className="py-16 bg-aristocrat-green text-white">
        <div className="container-custom text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic max-w-4xl mx-auto">
            "The Purpose of a Business is to create a Customer."
          </blockquote>
          <p className="mt-6">- Quote of the Month</p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="mb-6">
                Have questions about our insurance services? Contact our team for personalized assistance 
                and expert advice. We're here to help you find the perfect coverage for your needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-aristocrat-gray p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>Aristocrats House, 1st Floor, James Gichuru Road, Lavington</p>
                    <p>P.O. Box 57386 – 00200, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aristocrat-gray p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>+254-721 338556 / +254-736 791152</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-aristocrat-gray p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-aristocrat-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>info@aristocratskenya.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Tanzania Office</h3>
                <p>
                  <strong>Phone:</strong> +254-722-516792 / +256-752-786 015<br />
                  <strong>Email:</strong> karim@aristocratskenya.com / md@fivestarug.com
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-aristocrat-gray p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
