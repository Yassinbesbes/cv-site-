import React from "react";

function Resume() {
  const Viewbutton = {
    color: "white",
    borderRadius: "30px",
    padding: "10px 15pX 10px 15px ",
    backgroundColor: "black",
    cursor: "pointer", // Add cursor to indicate it's clickable
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2>About</h2>
          <div className="resumer">
            I am a Web Development student skilled in a variety of web
            technologies, including HTML, CSS, and JavaScript. I also work with
            the MERN stack (MongoDB, Express.js, React, Node.js), enabling me to
            build dynamic, full-stack web applications. I am passionate about
            creating intuitive, user-friendly websites and constantly expanding
            my skill set to deliver high-quality digital experiences.
            <br />
            <div style={{ marginTop: "20px" }}>
              <button style={Viewbutton}>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
