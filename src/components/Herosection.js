import React from "react";
import Background from "./layout/Background";
import Navbar from "./Navbar";

function Herosection() {
  return (
    <Background>
      <Navbar />
      <main className="z-10 flex items-center justify-center mt-[9rem] lg:block lg:relative lg:left-[5rem] lg:top-[1rem]">
        <div className="max-w-[20rem] transform transition duration-200 ease-in-out hover:scale-105 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 p-6 rounded-lg shadow-lg ">
          <h3 className="text-[5rem] font-bold font-NotoSans leading-none">
            IT-era
          </h3>
          <h4 className="text-[3rem] font-NotoSans">We make I.T. happen!</h4>
          <p className="text-xs text-gray-600 font-WorkSans">
            We are a Software Development Firm that provides industry standard,
            wide range, const-efficient, and full stack service that will
            tailor-fit your business needs
          </p>
          <button className="p-2 mt-2 text-xs text-white bg-red-500 rounded-xl">
            Message us!
          </button>
        </div>
      </main>
    </Background>
  );
}

export default Herosection;
