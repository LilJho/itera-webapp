import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="p-4 flex justify-between w-screen ">
      <div>
        <h2 className="text-4xl font-extrabold">IT-era</h2>
      </div>
      <ul className="flex gap-6 text-xl font-medium">
        <li>About us</li>
        <li>Services</li>
        <li>Clients</li>
        <li>Projects</li>
      </ul>
      <div>
        <button className="p-2 bg-yellow-400 rounded-xl font-medium">
          Inquire Now!
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
