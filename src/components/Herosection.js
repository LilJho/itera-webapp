import Image from "next/image";
import React from "react";

function Herosection() {
  return (
    <main className="flex w-screen  items-center justify-center gap-[10rem]">
      <div className="max-w-[20rem]">
        <h3 className="text-[6rem]">IT-era</h3>
        <h4 className="text-[3rem]">We make I.T. happen!</h4>
        <p className="text-xl">
          We are a Software Development Firm that provides industry standard,
          wide range, const-efficient, and full stack service that will
          tailor-fit your business needs
        </p>
      </div>

      <div>
        <Image
          src={"/bg-ilustrations/tech.svg"}
          height={700}
          width={700}
          alt="Hero section Image"
          className="rounded-xl"
        />
      </div>
    </main>
  );
}

export default Herosection;
