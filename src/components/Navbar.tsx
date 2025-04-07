
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-serif font-semibold text-science-dark">
              Quantum<span className="text-science-blue">Scholar</span>Lab
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Services
            </a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Why Choose Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Contact
            </a>
            <Button className="bg-science-blue text-white hover:bg-science-blue/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-science-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#why-choose-us" 
                className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-science-blue text-white hover:bg-science-blue/90 w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
