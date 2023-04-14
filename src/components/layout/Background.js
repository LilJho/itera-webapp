import Image from "next/image";

const Background = ({ children }) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/bg-ilustrations/team.jpg"}
        fill
        alt="Background Illustration of Hero Section"
        className="select-none"
      />
      {children}
    </div>
  );
};

export default Background;
