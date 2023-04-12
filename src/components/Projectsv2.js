import Image from "next/image";

const Projectsv2 = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-[5rem] text-xl font-semibold font-NotoSans">
        Our Latest Works
      </h1>
      <div className="flex flex-col gap-[3rem] mt-6">
        {projects()}
        {projectsv2()}
        {projects()}
        {projectsv2()}
      </div>
    </div>
  );
};

const projects = () => {
  return (
    <div className=" rounded-2xl shadow-lg flex mt-8  w-[60rem] h-[25rem]  bg-white backdrop-filter backdrop-blur-lg overflow-hidden">
      <div className="flex flex-col items-center justify-center w-1/2 h-full p-4 ">
        <div className="p-[5rem]">
          <h4 className="text-2xl font-bold font-NotoSans">
            PSU web application
          </h4>
          <p className="text-xs text-gray-600 font-WorkSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nam molestias temporibus odit porro, pariatur natus doloremque
            accusantium cum vero, velit sed atque dicta eveniet similique!
            Delectus consectetur ipsum quidem.
          </p>
          <button className="p-2 text-xs bg-gray-400 rounded-lg mt-[4rem] font-NotoSans">
            View Project
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 h-full p-4 bg-[url('/project-bg/bgnew.svg')] bg-cover bg-center">
        <Image
          src={"/projects/psu.svg"}
          width={470}
          height={470}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

const projectsv2 = () => {
  return (
    <div className=" rounded-2xl shadow-lg flex gap-6 mt-8  w-[60rem] h-[25rem]  bg-white backdrop-filter backdrop-blur-lg overflow-hidden">
      <div className="flex items-center justify-center w-1/2 h-full p-4 bg-[url('/project-bg/bgnew.svg')] bg-cover bg-center">
        <Image
          src={"/projects/psu.svg"}
          width={470}
          height={470}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 h-full p-4 ">
        <div className="p-[5rem]">
          <h4 className="text-2xl font-bold font-NotoSans">
            PSU web application
          </h4>
          <p className="text-xs text-gray-600 font-WorkSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            nesciunt laboriosam, excepturi ratione cumque nisi animi autem illum
            laudantium unde delectus explicabo placeat dolores, blanditiis at ex
            quas veritatis aperiam.
          </p>
          <button className="p-2 text-xs bg-gray-400 rounded-lg mt-[4rem] font-NotoSans">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectsv2;
