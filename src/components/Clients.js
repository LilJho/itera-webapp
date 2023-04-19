import React from "react";
import Image from "next/image";

const clients = () => {
  return (
    <main className="flex flex-col gap-4 items-center justify-center w-full my-[4rem]">
      <h3 className="text-xl font-semibold font-NotoSans">Our Partners</h3>
      <section className="w-[50rem] flex justify-center items-center flex-col border border-gray-500 rounded-xl">
        <article className="flex justify-center gap-2 p-4">
          <Image src={"/clients/ADB.png"} width={100} height={100} />
          <Image src={"/clients/DAI.jpg"} width={100} height={100} />
          <Image src={"/clients/delta.png"} width={100} height={100} />
          <Image src={"/clients/DENR.png"} width={100} height={100} />
          <Image src={"/clients/ECOLEK.png"} width={100} height={100} />
          <Image src={"/clients/FARMKONEK.png"} width={100} height={100} />
          <Image src={"/clients/FARMYIELDS.png"} width={100} height={100} />
          <Image src={"/clients/FBM.jpg"} width={100} height={100} />
        </article>
        <article className="flex justify-center gap-2 p-4">
          <Image src={"/clients/GoPalengke.jpg"} width={100} height={100} />
          <Image src={"/clients/greenjobsph.png"} width={100} height={100} />
          <Image src={"/clients/IISLA.png"} width={100} height={100} />
          <Image src={"/clients/Palawan.jfif"} width={100} height={100} />
          <Image src={"/clients/PITBI.jpg"} width={100} height={100} />
          <Image src={"/clients/PUERTO.png"} width={100} height={100} />
        </article>
      </section>
    </main>
  );
};

export default clients;
