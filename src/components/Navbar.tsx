import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-serif font-semibold text-science-dark">
              Simple<span className="text-science-blue ">Science</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Sobre
            </a>
            <a href="#services" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Serviços
            </a>
            <a href="#why-choose-us" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Por Que Nos Escolher
            </a>
            <a href="#contact" className="text-gray-600 hover:text-science-blue transition-colors duration-300">
              Contato
            </a>
            <Button className="bg-science-blue text-white hover:bg-science-blue/90">
              Comece Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-science-blue focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </a>
              <a href="#services" className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </a>
              <a href="#why-choose-us" className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
                Por Que Nos Escolher
              </a>
              <a href="#contact" className="text-gray-600 hover:text-science-blue transition-colors duration-300 py-2" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
              <Button className="bg-science-blue text-white hover:bg-science-blue/90 w-full">
                Comece Agora
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;