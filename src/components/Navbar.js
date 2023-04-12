import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 font-NotoSans">
      <h2 className="text-2xl font-extrabold leading-none cursor-pointer">
        IT-era
      </h2>
      <ul className="flex gap-8 p-6 text-xs font-medium leading-none bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-lg cursor-pointer backdrop-filter backdrop-blur-lg">
        <li className="link-underline">About us</li>
        <li className="link-underline">Services</li>
        <li className="link-underline">Clients</li>
        <li className="link-underline">Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
