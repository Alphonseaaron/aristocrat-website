
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-aristocrat-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-serif">Aristocrats Insurance</h3>
            <p className="mb-4">Providing reliable insurance solutions since 1992. Your trusted partner for all insurance needs.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.052 10.052 0 01-3.127 1.195c-.895-.957-2.173-1.555-3.592-1.555-2.716 0-4.914 2.198-4.914 4.914 0 .385.044.762.127 1.122C7.691 8.094 4.066 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.84.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.175-.069 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.497 14-13.987 0-.21 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-aristocrat-lightGreen transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-aristocrat-lightGreen transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-aristocrat-lightGreen transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-aristocrat-lightGreen transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-serif">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-aristocrat-lightGreen transition-colors">General Insurance</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-aristocrat-lightGreen transition-colors">Life & Pension</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-aristocrat-lightGreen transition-colors">Group Medical</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-aristocrat-lightGreen transition-colors">Managed Medical</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white font-serif">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Aristocrats House, 1st Floor,</p>
              <p className="mb-2">James Gichuru Road, Lavington</p>
              <p className="mb-2">P.O. Box 57386 – 00200, Nairobi, Kenya</p>
              <p className="mb-2">
                <a href="tel:+254721338556" className="hover:text-aristocrat-lightGreen transition-colors">+254-721 338556</a>
              </p>
              <p>
                <a href="mailto:info@aristocratskenya.com" className="hover:text-aristocrat-lightGreen transition-colors">info@aristocratskenya.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Aristocrats Insurance Brokers Ltd. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-aristocrat-lightGreen transition-colors mr-4">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-aristocrat-lightGreen transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
