import Image from "next/image";

const Background = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={"/bg/team.jpg"}
        fill
        alt="Background Illustration of Hero Section"
        className="object-cover select-none"
      />
      {children}
    </div>
  );
};

export default Background;
