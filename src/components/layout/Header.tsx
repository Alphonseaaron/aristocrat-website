
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/43855eba-1578-4280-9399-eb4e95bacdfe.png" 
              alt="Aristocrats Insurance Brokers Logo" 
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-aristocrat-green font-serif">
              Aristocrats <span className="hidden sm:inline">Insurance Brokers</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors">
              Services
            </Link>
            <Link to="/photos" className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors">
              Photos
            </Link>
            <Link to="/safinaz-group" className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors">
              Safinaz Group
            </Link>
            <Link to="/contact" className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors">
              Contact
            </Link>
            <a href="tel:+254721338556" className="btn-primary">
              Call Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-aristocrat-dark" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 animate-fadeIn">
            <Link 
              to="/" 
              className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/photos" 
              className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Photos
            </Link>
            <Link 
              to="/safinaz-group" 
              className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Safinaz Group
            </Link>
            <Link 
              to="/contact" 
              className="text-aristocrat-dark hover:text-aristocrat-green font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:+254721338556" 
              className="btn-primary w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Call Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
