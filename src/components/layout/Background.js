import Image from "next/image";

const Background = ({ children }) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/bg-ilustrations/team.jpg"}
        fill
        cover
        alt="Background Illustration of Hero Section"
        className="select-none"
      />
      {children}
    </div>
  );
};

// const HeroContainer = styled.div`
//   background-image: url("/bg-ilustrations/team.jpg");
//   background-size: cover;
//   background-position: center center;
//   height: 100vh;
// `;

export default Background;
