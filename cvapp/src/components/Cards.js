import React, { useState } from "react";

function Cards({ title, description, link, backColor }) {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles
  const cardStyle = {
    padding: "40px",
    margin: "40px",
    backgroundColor: "white",
    borderRadius: "10px 10px 40px 10px",
    boxShadow: isHovered
      ? "0 20px 30px rgba(0, 0, 0, 0.2)"
      : "0 20px 30px rgba(0, 0, 0, 0.2)",
    width: "330px",
    position: "relative",
    transition: "box-shadow 0.3s, transform 0.3s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Pushes the button to the bottom
    height: "330px", // Adjust height as needed
  };

  const rectangleStyle = {
    width: "50%",
    height: "4px",
    position: "absolute",
    top: "0px",
    right: "0px",
    borderRadius: "10px",
    backgroundColor: backColor,
  };

  const titleStyle = {
    fontSize: "35px",
    marginBottom: "12px",
    paddingRight: "100px",
    color: "black",
  };

  const descriptionStyle = {
    lineHeight: "1.5",
    flexGrow: 1, // Allows the description to take available space
  };

  const buttonStyle = {
    textDecoration: "none",
    color: "blue",
    padding: "5px 10px",
    borderRadius: "4px",
    position: "absolute",
    bottom: "20px", // Distance from the bottom
    right: "20px", // Distance from the right
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={rectangleStyle}></div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
      {/* Button with a link */}
      <a
        href={link}
        target="_blank"
        style={buttonStyle}
        rel="noopener noreferrer"
      >
        See More
      </a>
    </div>
  );
}

export default Cards;
