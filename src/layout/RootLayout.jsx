import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import cartIcon from '../assets/shopping-cart.svg';
import searchIcon from '../assets/search-normal.svg';
import Logo from '../assets/logo.svg';
import Navbar from '../components/navbar';
// import Navbar from '../components/Navbar';

const RootLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-jost">
      <header
        className={`z-10 flex items-center justify-between sm:px-[76px] py-[20px] sm:py-[40.05px] fixed w-full transition-all duration-300 ${
          scrolled ? 'bg-[#FFFFFF] px-[20px]' : 'bg-transparent px-[20px]'
        }`}
      >
        <img className="w-[44px] border-[1px] border-[#964B00]" src={Logo} alt="logo" />
        <Navbar scrolled={scrolled} />
        <div className="flex gap-[24px]">
          <NavLink to="/cart">
            <img src={cartIcon} alt="cart icon" />
          </NavLink>
          <img src={searchIcon} alt="search icon" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
