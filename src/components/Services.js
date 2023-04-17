import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      img: "/services/ui-ux.svg",
      title: "Creative UI/UX",
      description:
        "User-Interface & User-Experience Design Website Design Mobile App Design Windows Application Mac Application Local Network Design Database Structure Design Icons Logos.",
    },
    {
      img: "/services/mobildev.svg",
      title: " Mobile App Development (IOS/ANDROID)",
      description: "Native Mobile App Hybrid Mobile App Web-based Mobile App",
    },
    {
      img: "/services/business.svg",
      title: "Business Technology Consultation",
      description:
        "We will help you identify your business technological needs and conceptualize innovative solution",
    },
    {
      img: "/services/events.svg",
      title: "Event Webpage (workshop, wedding etc)",
      description:
        "No need to spend 5-6 digits for a website just for your short event. We offer a great solution. Let&apos;s talk. *1 day development *QR Code - Scan Ready *Interactive",
    },
    {
      img: "/services/social.svg",
      title: "Optimize your Facebook Business Page",
      description:
        "We will help you optimize your business facebook page: Appearance, Facebook Ads management, Business Facebook Page setup (Shop, Restaurant, Service, Non Profit, Video, Business, Government, etc)",
    },
    {
      img: "/services/webdev.svg",
      title: "Modern Website Development",
      description:
        "Modern & User friendly Website *Standard Website to Complex Website (Accommodation, Restaurants, eCommerce/online-shop, Booking, Landing Page, Service, CRM) Wordpress, Wix, Full Stack PhP",
    },
  ];
  return (
    <section className="py-4 xl:px-[5rem] mt-[5rem] px-8">
      <h2 className="text-xl font-bold text-center font-NotoSans">
        Services we offer
      </h2>
      <article className="grid grid-cols-1 gap-2 pt-4 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
        {services.map((service) => (
          <section
            key={service.titles}
            className="xl:min-w-[15rem] min-w-[10rem] min-h-[10rem] xl:min-h-[15rem] bg-white border md:border-0 md:border-r md:border-b border-[#E1E1E1] flex flex-col justify-center items-center p-4"
          >
            <figure>
              <Image src={service.img} alt="UI/UX" width={150} height={150} />
            </figure>
            <figcaption>
              <h3 className="flex justify-center text-base font-medium text-center font-NotoSans">
                {service.title}
              </h3>
              <p className="pt-2 text-xs text-gray-600 font-Worksans">
                {service.description}
              </p>
            </figcaption>
          </section>
        ))}
      </article>
    </section>
  );
};

export default Services;
