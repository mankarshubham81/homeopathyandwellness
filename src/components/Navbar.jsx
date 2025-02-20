"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { 
      name: "Homeopathy", 
      href: "#",
      subLinks: [
        { name: "About Homeopathy", href: "/about-homeopathy" },
        { name: "Treatment Methods", href: "/treatments" },
        { name: "Medicines & Products", href: "/medicines-products" },
        { name: "FAQs", href: "/faq" }
      ]
    },
    { name: "Contact Us", href: "/contact" }
  ];

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setOpenMobileDropdown(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleMobileDropdown = (name) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const closeAllMenus = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav 
      ref={navRef}
      className="bg-[#24562B] text-white shadow-lg w-full z-40"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity"
            aria-label="Homeopathy and Wellness homepage"
            onClick={closeAllMenus}
          >
            Little India Tampines
            {/* <Image
              src="/homeopathyandwellnessLogo.jpg"
              alt="Homeopathy & Wellness Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
            /> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <div ref={dropdownRef}>
                    <button
                      onClick={() => handleDropdown(link.name)}
                      className="flex items-center gap-1 px-4 py-2 hover:bg-[#A4C639] hover:text-[#333333] rounded-lg transition-colors"
                      aria-expanded={openDropdown === link.name}
                      aria-controls={`dropdown-${link.name}`}
                    >
                      {link.name}
                      <ChevronDown className={`transition-transform ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`} size={16} />
                    </button>
                    
                    {openDropdown === link.name && (
                      <ul
                        id={`dropdown-${link.name}`}
                        className="absolute top-full left-0 mt-1 w-48 z-50 bg-[#F8F8F8] text-[#333333] shadow-xl rounded-lg py-2"
                        role="menu"
                      >
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.name}>
                            <Link
                              href={subLink.href}
                              className="block px-4 py-2 hover:bg-[#DDD6C5] transition-colors"
                              role="menuitem"
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 hover:bg-[#A4C639] hover:text-[#333333] rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            {/* <Link
              href="/contact"
              className="ml-4 px-6 py-3 bg-[#A4C639] text-[#333333] rounded-lg hover:bg-[#C5D67A] font-semibold transition-colors"
            >
              Contact
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-[#A4C639]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#a4cfa8] h-screen overflow-y-auto">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <div>
                    <button
                      onClick={() => handleMobileDropdown(link.name)}
                      className="w-full flex justify-between items-center px-3 py-2 hover:bg-[#A4C639] hover:text-[#333333] rounded-md"
                      aria-expanded={openMobileDropdown === link.name}
                      aria-controls={`mobile-dropdown-${link.name}`}
                    >
                      {link.name}
                      <ChevronDown className={`transition-transform ${
                        openMobileDropdown === link.name ? "rotate-180" : ""
                      }`} size={16} />
                    </button>
                    
                    {openMobileDropdown === link.name && (
                      <ul
                        id={`mobile-dropdown-${link.name}`}
                        className="pl-4 mt-1 space-y-1"
                      >
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.name}>
                            <Link
                              href={subLink.href}
                              className="block px-3 py-2 hover:bg-[#A4C639] hover:text-[#333333] rounded-md"
                              onClick={closeAllMenus}
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 hover:bg-[#A4C639] hover:text-[#333333] rounded-md"
                    onClick={closeAllMenus}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/book-appointment"
              className="block px-3 py-3 bg-[#A4C639] text-[#333333] rounded-md mt-4 text-center font-semibold hover:bg-[#C5D67A]"
              onClick={closeAllMenus}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;