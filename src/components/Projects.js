import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-[3rem] font-NotoSans font-bold">
          Projects Made:
        </h2>
        <ul>
          <li>
            <article className="border border-black w-[60rem]  rounded-lg">
              <div className="flex items-center gap-4 p-8">
                <figure>
                  <Image src={"/projects/psu.svg"} width={500} height={300} />
                </figure>
                <figcaption className="max-w-[25rem]">
                  <h4 className="text-xl font-NotoSans">
                    Palawan State University Web application
                  </h4>
                  <p className="font-WorkSans">
                    The Palawan University web application integrates campus
                    colleges for synchronized functioning, automates processes,
                    and disseminates university information. Its automated
                    Enrollment System streamlines enrollment for students and
                    staff. With its user-friendly interface and efficient
                    automation, it enhances university management and learning
                    environment.
                  </p>
                </figcaption>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
