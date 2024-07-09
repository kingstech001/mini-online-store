import React, { useEffect, useState } from 'react';

const Navbar = ({ scrolled }) => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'product', 'stores', 'contact'];
      let current = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      });
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center gap-2 sm:gap-5 text-[10px] sm:text-[18px]">
      <a
        href="/home#home"
        className={`${currentSection === 'home' ? 'border-b-2' : ''} ${
          scrolled ? 'text-[#56564D] border-[#56564D]' : 'text-[#56564D] border-[#56564D]'
        }`}
      >
        Home
      </a>
      <a
        href="/home#product"
        className={`${currentSection === 'product' ? 'border-b-2' : ''} ${
          scrolled ? 'text-[#56564D] border-[#56564D]' : 'text-[#56564D] border-[#56564D]'
        }`}
      >
        Product
      </a>
      <a
        href="/home#stores"
        className={`${currentSection === 'stores' ? 'border-b-2' : ''} ${
          scrolled ? 'text-[#56564D] border-[#56564D]' : 'text-[#56564D] border-[#56564D]'
        }`}
      >
        Stores
      </a>
      <a
        href="#contact"
        className={`${currentSection === 'contact' ? 'border-b-2' : ''} ${
          scrolled ? 'text-[#56564D] border-[#56564D]' : 'text-[#56564D] border-[#56564D]'
        }`}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
