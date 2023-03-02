const Background = ({ children, image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
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
