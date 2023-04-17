import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="z-20 flex flex-col items-center justify-between p-4 md:flex-row font-NotoSans">
      <div className="flex items-center justify-between w-full md:static">
        <h2 className="z-10 text-2xl font-extrabold leading-none cursor-pointer">
          IT-era
        </h2>
        <div
          className="z-10 text-4xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <GrClose className="z-10" /> : <FiMenu className="z-10" />}
        </div>
      </div>
      <ul
        className={`absolute w-screen h-[93vh] md:w-[25rem] md:h-[3rem] md:items-center md:justify-between md:right-2 z-10 p-6 font-medium bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-lg cursor-pointer top-16 md:top-2 md:flex text-4xl md:text-xs md:flex-row backdrop-filter backdrop-blur-lg transition-all delay-200 ease-in ${
          isOpen ? "right-0" : "right-[-765px]"
        }`}
      >
        <li className="my-6 md:my-0">About us</li>
        <li className="my-6 md:my-0">Services</li>
        <li className="my-6 md:my-0">Clients</li>
        <li className="my-6 md:my-0">Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
