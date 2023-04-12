import Image from "next/image";
import styled from "styled-components";

const Background = ({ children }) => {
  return <HeroContainer>{children}</HeroContainer>;
};

const HeroContainer = styled.div`
  background-image: url("/bg-ilustrations/team.jpg");
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

export default Background;
