import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="py-4 px-[5rem] mt-[5rem]">
      <h2 className="text-center text-[3rem] font-NotoSans font-bold">
        Services we offer
      </h2>
      <article className="grid grid-cols-3 grid-rows-2 gap-2 pt-4">
        <section className="min-w-[20rem] min-h-[20rem] bg-white border-r border-b border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image src={"/services/ui-ux.svg"} width={150} height={150} />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-xl font-NotoSans">
              Creative UI/UX
            </h3>
            <p className="pt-2 font-Worksans">
              User-Interface & User-Experience Design Website Design Mobile App
              Design Windows Application Mac Application Local Network Design
              Database Structure Design Icons Logos
            </p>
          </figcaption>
        </section>
        <section className="min-w-[20rem] min-h-[20rem] bg-white border-r border-b border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image src={"/services/mobildev.svg"} width={150} height={150} />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-xl font-NotoSans">
              Mobile App Development (IOS/ANDROID)
            </h3>
            <p className="pt-2 font-Worksans">
              Native Mobile App Hybrid Mobile App Web-based Mobile App
            </p>
          </figcaption>
        </section>
        <section className="min-w-[20rem] min-h-[20rem] bg-white border-b border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image src={"/services/business.svg"} width={150} height={150} />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-xl font-NotoSans">
              Business Technology Consultation
            </h3>
            <p className="pt-2 font-Worksans">
              We will help you identify your business technological needs and
              conceptualize innovative solution
            </p>
          </figcaption>
        </section>
        <section className="min-w-[20rem] min-h-[20rem] bg-white border-r border-t border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image src={"/services/events.svg"} width={150} height={150} />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-xl font-NotoSans">
              Event Webpage (workshop, wedding etc)
            </h3>
            <p className="pt-2 font-Worksans">
              No need to spend 5-6 digits for a website just for your short
              event. We offer a great solution. Let's talk. *1 day development
              *QR Code - Scan Ready *Interactive
            </p>
          </figcaption>
        </section>
        <section className="min-w-[20rem] min-h-[20rem] bg-white border-r border-t border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image src={"/services/social.svg"} width={150} height={150} />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-xl font-NotoSans">
              Optimize your Facebook Business Page
            </h3>
            <p className="pt-2 font-Worksans">
              We will help you optimize your business facebook page: Appearance,
              Facebook Ads management, Business Facebook Page setup (Shop,
              Restaurant, Service, Non Profit, Video, Business, Government, etc)
            </p>
          </figcaption>
        </section>
        <section className="min-w-[20rem] min-h-[20rem] bg-white border-t border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image src={"/services/webdev.svg"} width={150} height={150} />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-xl font-NotoSans">
              Modern Website Development
            </h3>
            <p className="pt-2 font-Worksans">
              Modern & User friendly Website *Standard Website to Complex
              Website (Accommodation, Restaurants, eCommerce/online-shop,
              Booking, Landing Page, Service, CRM) Wordpress, Wix, Full Stack
              PhP
            </p>
          </figcaption>
        </section>
      </article>
    </section>
  );
};

export default Services;
