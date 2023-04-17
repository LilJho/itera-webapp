import Image from "next/image";

const Background = ({ children }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={
          "https://res.cloudinary.com/dlwdolltd/image/upload/v1681764702/ITera/bg-ilustrations/team_l4uhk3.jpg"
        }
        fill
        alt="Background Illustration of Hero Section"
        className="object-cover select-none"
      />
      {children}
    </div>
  );
};

export default Background;
