import React from "react";
import backgroundImage from "../../../public/bg-ilustrations/groupworking.svg";

const Background = ({ children }) => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "91vh",
  };
  return (
    <div className="mx-4 rounded-xl" style={styles}>
      {children}
    </div>
  );
};

export default Background;
