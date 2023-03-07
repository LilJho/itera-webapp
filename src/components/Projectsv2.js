import Image from "next/image";

const Projectsv2 = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-8 text-4xl font-NotoSans">Our Latest Works</h1>
      {projects()}
      {projects()}
      {projects()}
      {projects()}
    </div>
  );
};

const projects = () => {
  return (
    <div className=" rounded-lg shadow-lg flex gap-6 mt-8  w-[50rem] h-[20rem]  bg-white backdrop-filter backdrop-blur-lg border border-gray-300 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-1/2 h-full p-4 ">
        <div>
          <h4 className="text-2xl font-WorkSans">PSU web application</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error amet
            ipsum, eveniet corporis porro voluptates.
          </p>
          <button className="p-4 bg-gray-400 rounded-lg mt-[2rem]">
            View Project
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 h-full p-4 bg-[url('/project-bg/bgnew.svg')] bg-cover bg-center">
        <Image src={"/projects/psu.svg"} width={470} height={470} />
      </div>
    </div>
  );
};

export default Projectsv2;
