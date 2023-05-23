import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Full-Stack Developer",
          `Frontend Developer`,
          "Backend Developer",
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