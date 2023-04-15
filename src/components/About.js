import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-[10rem] bg-gray-100">
      <h4 className="text-xl font-semibold font-NotoSan">About us</h4>
      <article className="flex flex-col justify-center gap-[8rem] items center mt-[4rem]">
        <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
          <Image
            src={"/about/teamhands.jpg"}
            width={300}
            height={300}
            alt="Team of people"
            className="rounded mt-2-xl"
          />
          <div className="md:h-[450px] flex flex-col md:justify-between">
            <p className="text-xs text-gray-700 max-w-[20rem] font-WorkSans">
              <span className="text-base font-semibold">
                The startup software firm{" "}
              </span>
              is a cutting-edge technology company that specializes in creating
              innovative projects using the best practices in the software
              field. With a team of highly skilled software engineers and
              developers, the company is committed to delivering world-class
              software solutions that meet the highest quality standards. From
              design and development to testing and deployment, the company uses
              industry best practices to ensure that their projects are
              scalable, reliable, and secure. The firm is focused on leveraging
              the latest technologies and tools to provide their clients with
              cutting-edge software that is tailored to their specific needs.
              With a strong emphasis on collaboration and communication, the
              company is able to work closely with their clients to deliver
              projects that exceed their expectations and drive business growth.
            </p>
            <button className="p-2 mt-4 text-white bg-teal-500 rounded">
              Work with us!
            </button>
          </div>
        </div>
        <div className="items-center justify-center hidden gap-4 mt-8 xl:flex">
          <div className="h-[466px] flex flex-col justify-between">
            <p className="text-xs text-gray-700 max-w-[20rem]">
              <span className="text-base font-semibold">
                Starting a new business{" "}
              </span>
              can be an exciting but challenging endeavor, and it requires
              careful planning and execution to achieve success. One of the key
              factors that can make or break a startup is the effective use of
              technology. In today&apos;s digital age, technology plays a
              crucial role in enabling businesses to operate efficiently and
              compete in the market. A startup that is focused on helping other
              startups make their vision a reality by leveraging technology can
              provide a valuable service. In summary, a startup that focuses on
              helping other startups make the most of technology can be a
              valuable partner for entrepreneurs and business owners. By
              providing expert guidance and support, this type of firm can help
              new businesses succeed and thrive in today&apos;s digital
              landscape.
            </p>
            <button className="p-2 text-white bg-teal-500 rounded">
              Work with us!
            </button>
          </div>

          <Image
            src={"/about/startup.jpg"}
            width={700}
            height={700}
            alt="A startup company"
            className="rounded mt-2-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
          <Image
            src={"/about/andrea.jpg"}
            width={400}
            height={300}
            className="rounded mt-2-xl"
            alt="A girl with a lot of ideas"
          />
          <div className="flex flex-col md:justify-between md:min-h-[426px]">
            <p className="text-xs text-gray-600 max-w-[20rem] ">
              <span className="text-base font-semibold">
                The startup software firm{" "}
              </span>
              is a cutting-edge technology company that specializes in creating
              innovative projects using the best practices in the software
              field. With a team of highly skilled software engineers and
              developers, the company is committed to delivering world-class
              software solutions that meet the highest quality standards. From
              design and development to testing and deployment, the company uses
              industry best practices to ensure that their projects are
              scalable, reliable, and secure. The firm is focused on leveraging
              the latest technologies and tools to provide their clients with
              cutting-edge software that is tailored to their specific needs.
              With a strong emphasis on collaboration and communication, the
              company is able to work closely with their clients to deliver
              projects that exceed their expectations and drive business growth.
            </p>
            <button className="p-2 mt-4 text-white bg-teal-500 rounded">
              Work with us!
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
