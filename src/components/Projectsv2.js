import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projectsv2 = () => {
  return (
    <div className="flex flex-col items-center mt-[10rem] mb-[5rem]">
      <h1 className="mt-[5rem] text-xl font-semibold font-NotoSans">
        Our Latest Works
      </h1>
      {/* <div className="flex items-center gap-[3rem] mt-6">
        {projects()}
        {projects()}
      </div> */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-[620px] h-[600px]"
      >
        <SwiperSlide>{projects()}</SwiperSlide>
        <SwiperSlide>{projects()}</SwiperSlide>
        <SwiperSlide>{projects()}</SwiperSlide>
        <SwiperSlide>{projects()}</SwiperSlide>
      </Swiper>
    </div>
  );
};

const projects = () => {
  return (
    <div className="mx-auto flex max-w-[510px] max-h-[533px] flex-col mt-8 overflow-hidden bg-white shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-center h-full p-4 bg-[url('/project-bg/bgnew.svg')] bg-cover bg-center">
        <Image
          src={"/projects/psu.svg"}
          width={470}
          height={470}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-4 w-[510px]">
        <div className="flex flex-col items-center justify-center w-full">
          <h4 className="text-base font-medium font-NotoSans">
            PSU web application
          </h4>
          <p className="text-xs text-gray-600 font-WorkSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nam molestias temporibus odit porro, pariatur natus doloremque
            accusantium cum vero, velit sed atque dicta eveniet similique!
            Delectus consectetur ipsum quidem.
          </p>
          <button className="p-2 text-xs text-white bg-yellow-500 rounded-lg mt-[3rem] font-NotoSans">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projectsv2;
