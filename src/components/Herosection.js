import React from "react";
import Background from "./layout/background";
import Navbar from "./Navbar";

function Herosection() {
  return (
    <Background>
      <Navbar />
      <main className="z-10">
        <div className="max-w-[20rem] bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-300 p-6 rounded-lg shadow-lg relative left-[5rem] top-[5rem]">
          <h3 className="text-[5rem] font-bold font-NotoSans leading-none">
            IT-era
          </h3>
          <h4 className="text-[2rem] font-NotoSans">We make I.T. happen!</h4>
          <p className="text-xl font-WorkSans">
            We are a Software Development Firm that provides industry standard,
            wide range, const-efficient, and full stack service that will
            tailor-fit your business needs
          </p>
          <button className="p-4 mt-2 text-white bg-red-500 rounded-full">
            Message us!
          </button>
        </div>
      </main>
    </Background>
  );
}

export default Herosection;
