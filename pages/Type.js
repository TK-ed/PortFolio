import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `Python Developer`,
          "Web3 Enthusiast",
          "Open-Source contributor",
          "Full-Stack Developer",          
        ],
        autoStart: true,
        typeSpeed: 10,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Type;