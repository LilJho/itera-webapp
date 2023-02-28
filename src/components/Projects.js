import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  });

  return (
    <section className="my-10">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-[3rem] font-NotoSans font-bold">
          Projects Made:
        </h2>
        <motion.div
          ref={carousel}
          className="overflow-hidden cursor-grab max-w-[46rem] border border-gray-600"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            <motion.div className="m-4">{Post()}</motion.div>
            <motion.div className="m-4">{Post()}</motion.div>
            <motion.div className="m-4">{Post()}</motion.div>
            <motion.div className="m-4">{Post()}</motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <article className="border border-black rounded-lg">
      <div className="flex flex-col items-center gap-4 p-8">
        <figure>
          <Image
            src={"/projects/psu.svg"}
            width={700}
            height={300}
            className="rounded-[1.5rem] pointer-events-none"
            alt="PSU webApp"
          />
        </figure>
        <figcaption className="min-w-[40rem]">
          <h4 className="text-xl text-center font-NotoSans">
            Palawan State University Web application
          </h4>
          <p className="font-WorkSans">
            The Palawan University web application integrates campus colleges
            for synchronized functioning, automates processes, and disseminates
            university information. Its automated Enrollment System streamlines
            enrollment for students and staff. With its user-friendly interface
            and efficient automation, it enhances university management and
            learning environment.
          </p>
        </figcaption>
      </div>
    </article>
  );
}

export default Projects;
