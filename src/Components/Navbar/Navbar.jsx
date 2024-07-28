import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import callIcon from "../../assets/call-icon.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <nav className="bg-black py-4 px-8">
      <div className="container mx-auto flex justify-between items-center lg:w-9/12">
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          {" "}
          PD's SALON
        </div>
        <div className="hidden md:flex space-x-8 text-sm">
          <ul className="flex space-x-8 text-sm">
            <li>
              <a
                onClick={() => navigate("/")}
                className="text-[#7b9e87] hover:text-white cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#7b9e87] hover:text-white cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/shop")}
                className="text-[#7b9e87] hover:text-white cursor-pointer"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#7b9e87] hover:text-white cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#7b9e87] hover:text-white cursor-pointer"
              >
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
              <a href="#" className="text-[#7b9e87] hover:text-white  block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[#7b9e87] hover:text-white block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-[#7b9e87] hover:text-white block">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-[#7b9e87] hover:text-white block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-[#7b9e87] hover:text-white block">
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
