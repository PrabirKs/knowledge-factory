import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo and Title Section */}
        <div className="flex items-center gap-1 md:gap-4">
          <div className="logo">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <h1 className="font-bold text-xl md:text-2xl">THE KNOWLEDGE HOSPITAL</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 relative group"
                >
                  <span className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex">
          <button onClick={toggleMenu} className="text-4xl">
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className={`overflow-hidden transition-all bg-white dark:bg-gray-900 absolute top-20 left-0 w-full z-10000000`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {menu.title}
              </a>
            </li>
          ))}
          <li key={7}>
              <a
                href="tel:+917735765827"
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                Talk With Us 
                <BiSolidPhoneCall className="group-hover:animate-bounce group-hover:text-lg duration-200" style={{color:"green"}}/>
              </a>
            </li>
            <li key={8} >
              <a
                href="https://api.whatsapp.com/send?phone=917735765827"
                target="_blank"
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 transition-colors flex items-center gap-2"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                Chat With Us
                <IoLogoWhatsapp className="group-hover:animate-bounce group-hover:text-lg duration-200" style={{color:"green"}}/>

              </a>
            </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
