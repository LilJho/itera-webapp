import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="py-4 xl:px-[5rem] mt-[5rem] px-8">
      <h2 className="text-xl font-bold text-center font-NotoSans">
        Services we offer
      </h2>
      <article className="grid grid-cols-1 gap-2 pt-4 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
        <section className="xl:min-w-[15rem] min-w-[10rem] min-h-[10rem] xl:min-h-[15rem] bg-white border md:border-0 md:border-r md:border-b border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image
              src={"/services/ui-ux.svg"}
              alt="UI/UX"
              width={150}
              height={150}
            />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
              Creative UI/UX
            </h3>
            <p className="pt-2 text-xs text-gray-600 font-Worksans">
              User-Interface & User-Experience Design Website Design Mobile App
              Design Windows Application Mac Application Local Network Design
              Database Structure Design Icons Logos
            </p>
          </figcaption>
        </section>
        <section className="xl:min-w-[15rem] min-w-[10rem] border md:border-0 min-h-[10rem] xl:min-h-[15rem] bg-white xl:border-r md:border-b md:border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image
              src={"/services/mobildev.svg"}
              width={150}
              height={150}
              alt="Mobile development"
            />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
              Mobile App Development (IOS/ANDROID)
            </h3>
            <p className="pt-2 text-xs text-gray-600 font-Worksans">
              Native Mobile App Hybrid Mobile App Web-based Mobile App
            </p>
          </figcaption>
        </section>
        <section className="xl:min-w-[15rem] min-w-[10rem] min-h-[10rem] xl:min-h-[15rem] bg-white border md:border-0 md:border-t md:border-r md:border-b xl:border-t-0 xl:border-r-0 xl:border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image
              src={"/services/business.svg"}
              width={150}
              height={150}
              alt="Business"
            />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
              Business Technology Consultation
            </h3>
            <p className="pt-2 text-xs text-gray-600font-Worksans">
              We will help you identify your business technological needs and
              conceptualize innovative solution
            </p>
          </figcaption>
        </section>
        <section className="xl:min-w-[15rem] min-w-[10rem] min-h-[10rem] xl:min-h-[15rem] bg-white border md:border-0 xl:border-r md:border-t md:border-l xl:border-l-0 xl:border-b-0 border-b border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image
              src={"/services/events.svg"}
              width={150}
              height={150}
              alt="Events"
            />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
              Event Webpage (workshop, wedding etc)
            </h3>
            <p className="pt-2 text-xs text-gray-600 font-Worksans">
              No need to spend 5-6 digits for a website just for your short
              event. We offer a great solution. Let&apos;s talk. *1 day
              development *QR Code - Scan Ready *Interactive
            </p>
          </figcaption>
        </section>
        <section className="xl:min-w-[15rem] min-w-[10rem] min-h-[10rem] xl:min-h-[15rem] bg-white border md:border-0 md:border-r md:border-t xl:border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image
              src={"/services/social.svg"}
              width={150}
              height={150}
              alt="Socials"
            />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
              Optimize your Facebook Business Page
            </h3>
            <p className="pt-2 text-xs text-gray-600 font-Worksans">
              We will help you optimize your business facebook page: Appearance,
              Facebook Ads management, Business Facebook Page setup (Shop,
              Restaurant, Service, Non Profit, Video, Business, Government, etc)
            </p>
          </figcaption>
        </section>
        <section className="xl:min-w-[15rem] min-w-[10rem] min-h-[10rem] xl:min-h-[15rem] bg-white border md:border-0 md:border-t md:border-l border-[#E1E1E1] flex flex-col justify-center items-center p-4">
          <figure>
            <Image
              src={"/services/webdev.svg"}
              width={150}
              height={150}
              alt="Web Development"
            />
          </figure>
          <figcaption>
            <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
              Modern Website Development
            </h3>
            <p className="pt-2 text-xs text-gray-600 font-Worksans">
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
