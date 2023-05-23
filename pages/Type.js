import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          `Blockchain Enthusiast`,
          "Web3 Developer",
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