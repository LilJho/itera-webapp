import React from "react";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="z-10 flex items-center justify-between p-4 font-NotoSans">
      <h2 className="z-10 text-2xl font-extrabold leading-none cursor-pointer">
        IT-era
      </h2>
      <div className="z-10 text-4xl md:hidden">
        <FiMenu className="z-10" />
      </div>
      <ul className="hidden gap-8 p-6 text-xs font-medium leading-none bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-lg cursor-pointer md:flex backdrop-filter backdrop-blur-lg">
        <li className="link-underline">About us</li>
        <li className="link-underline">Services</li>
        <li className="link-underline">Clients</li>
        <li className="link-underline">Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
