import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import callIcon from "../../assets/call-icon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-4 px-8">
      <div className="container mx-auto flex justify-between items-center lg:w-9/12">
        <div className="text-2xl font-bold text-white">PD's SALON</div>
        <div className="hidden md:flex space-x-8 text-sm">
          <ul className="flex space-x-8 text-sm">
            <li>
              <a href="#" className="text-yellow-300 hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-300 hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-300 hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-300 hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-300 hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4 gap-16">
          <div className="flex justify-center items-center gap-2 text-right text-white text-sm">
            <img className="w-8" src={callIcon} alt="call" />
            <div>
              <div>Info & reservations</div>
              <div>1 - 111 - 344 - 678</div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black py-4 px-8">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-yellow-400 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-yellow-400 block"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-yellow-400 block"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-yellow-400 block"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-300 hover:text-yellow-400 block"
              >
                Contact
              </a>
            </li>
            <div className="flex items-center gap-2 text-right text-white text-sm">
              <img className="w-8" src={callIcon} alt="call" />
              <div>
                <div>Info & reservations</div>
                <div>1 - 111 - 344 - 678</div>
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
