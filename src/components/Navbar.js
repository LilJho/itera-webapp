import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex items-end justify-between p-4 font-NotoSans">
      <div>
        <h2 className="text-4xl font-extrabold leading-none cursor-pointer">
          IT-era
        </h2>
      </div>
      <ul className="flex gap-8 text-2xl font-medium leading-none cursor-pointer">
        <li className="link-underline">About us</li>
        <li className="link-underline">Services</li>
        <li className="link-underline">Clients</li>
        <li className="link-underline">Projects</li>
      </ul>
      <div>
        <button className="p-2 font-medium bg-[#FABC16] rounded-xl text-[#808080]">
          Inquire Now!
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
