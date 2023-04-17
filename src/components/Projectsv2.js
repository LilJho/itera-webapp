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
    <div className="flex flex-col items-center mt-2 mb-[5rem]">
      <h1 className="mt-[5rem] text-xl font-semibold font-NotoSans">
        Our Latest Works
      </h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full md:w-[40rem]"
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
    <div className="flex items-center justify-center w-full h-full my-8">
      <div className="h-[12rem] w-[20rem] md:w-[30rem] md:h-[16rem] overflow-hidden bg-white shadow-lg rounded-2xl backdrop-filter backdrop-blur-lg">
        <Image
          src={"/projects/psu.svg"}
          fill
          className="rounded-2xl"
          alt="PSU webApp"
        />
      </div>
    </div>
  );
};

export default Projectsv2;
