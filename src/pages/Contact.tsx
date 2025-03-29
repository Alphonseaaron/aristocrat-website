
import React from 'react';
import ContactForm from '../components/shared/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-aristocrat-green py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="mb-8">
                Have questions about our insurance services? Contact our team for personalized assistance 
                and expert advice. We're here to help you find the perfect coverage for your needs.
              </p>

              <div className="space-y-8">
                <div className="bg-aristocrat-gray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-aristocrat-green">Kenya Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <address className="not-italic">
                          <p>Aristocrats House, 1st Floor,</p>
                          <p>James Gichuru Road, Lavington</p>
                          <p>P.O. Box 57386 – 00200, Nairobi, Kenya</p>
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p>
                          <a href="tel:+254721338556" className="hover:text-aristocrat-green transition-colors">+254-721 338556</a> / 
                          <a href="tel:+254736791152" className="hover:text-aristocrat-green transition-colors"> +254-736 791152</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p>
                          <a href="mailto:info@aristocratskenya.com" className="hover:text-aristocrat-green transition-colors">info@aristocratskenya.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Social Media</h4>
                        <div className="flex space-x-4 mt-2">
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-aristocrat-green hover:text-aristocrat-lightGreen transition-colors">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-aristocrat-green hover:text-aristocrat-lightGreen transition-colors">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.052 10.052 0 01-3.127 1.195c-.895-.957-2.173-1.555-3.592-1.555-2.716 0-4.914 2.198-4.914 4.914 0 .385.044.762.127 1.122C7.691 8.094 4.066 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.84.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.175-.069 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.497 14-13.987 0-.21 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-aristocrat-gray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-aristocrat-green">Tanzania Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p>
                          <a href="tel:+254722516792" className="hover:text-aristocrat-green transition-colors">+254-722-516792</a> / 
                          <a href="tel:+256752786015" className="hover:text-aristocrat-green transition-colors"> +256-752-786 015</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-aristocrat-green p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p>
                          <a href="mailto:karim@aristocratskenya.com" className="hover:text-aristocrat-green transition-colors">karim@aristocratskenya.com</a> / 
                          <a href="mailto:md@fivestarug.com" className="hover:text-aristocrat-green transition-colors"> md@fivestarug.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

      {/* Map Section */}
      <section className="py-16 bg-aristocrat-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Location</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Visit us at our offices in Nairobi, Kenya. We're located on James Gichuru Road in Lavington.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Replace with an actual Google Maps embed in a production environment */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193213348963!2d36.76649231475852!3d-1.2777149359736217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7554c8d%3A0x940b62a3c8efde4a!2sJames%20Gichuru%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1624451896512!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Aristocrats Insurance Brokers Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Business Hours</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Visit us during our business hours or contact us any time through our online form.
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-aristocrat-gray p-8 rounded-lg shadow-md">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-medium">Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-medium">Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday & Public Holidays</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
