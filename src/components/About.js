import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-gray-300">
      <h4 className="text-xl font-semibold font-NotoSan">About us</h4>
      <article className="flex flex-col justify-center gap-[8rem] items center">
        <div className="flex items-center justify-center gap-4 mt-8">
          <Image
            src={"/about/teamhands.jpg"}
            width={300}
            height={300}
            className="rounded-xl"
          />
          <div className="h-[450px] flex flex-col justify-between">
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
            <button className="p-2 text-white bg-teal-500 rounded">
              Work with us!
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-[533px] flex flex-col justify-between">
            <p className="text-xs text-gray-700 max-w-[25rem]">
              <span className="text-base font-semibold">
                Starting a new business{" "}
              </span>
              can be an exciting but challenging endeavor, and it requires
              careful planning and execution to achieve success. One of the key
              factors that can make or break a startup is the effective use of
              technology. In today's digital age, technology plays a crucial
              role in enabling businesses to operate efficiently and compete in
              the market. A startup that is focused on helping other startups
              make their vision a reality by leveraging technology can provide a
              valuable service. This type of company would work closely with
              entrepreneurs and business owners to understand their needs and
              develop a customized technology strategy that aligns with their
              goals and budget. The firm could help clients identify and
              implement the right hardware and software solutions, as well as
              provide ongoing support and maintenance services. One of the
              primary benefits of working with a startup that specializes in
              technology is the access to expert knowledge and experience. They
              would have experience working with a variety of businesses across
              different sectors, and they would be able to offer valuable
              insights and guidance to help their clients succeed. In summary, a
              startup that focuses on helping other startups make the most of
              technology can be a valuable partner for entrepreneurs and
              business owners. By providing expert guidance and support, this
              type of firm can help new businesses succeed and thrive in today's
              digital landscape.
            </p>
            <button className="p-2 text-white bg-teal-500 rounded">
              Work with us!
            </button>
          </div>

          <Image
            src={"/about/startup.jpg"}
            width={800}
            height={800}
            className="rounded-xl"
          />
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Image
            src={"/about/andrea.jpg"}
            width={300}
            height={300}
            className="rounded-xl"
          />
          <p className="text-xs text-gray-600 max-w-[20rem]">
            The startup software firm is a cutting-edge technology company that
            specializes in creating innovative projects using the best practices
            in the software field. With a team of highly skilled software
            engineers and developers, the company is committed to delivering
            world-class software solutions that meet the highest quality
            standards. From design and development to testing and deployment,
            the company uses industry best practices to ensure that their
            projects are scalable, reliable, and secure. The firm is focused on
            leveraging the latest technologies and tools to provide their
            clients with cutting-edge software that is tailored to their
            specific needs. With a strong emphasis on collaboration and
            communication, the company is able to work closely with their
            clients to deliver projects that exceed their expectations and drive
            business growth.
          </p>
        </div>
      </article>
    </div>
  );
};

export default About;