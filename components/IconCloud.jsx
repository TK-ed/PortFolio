import React, { useState, useEffect } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import { Const } from "./const";

const DynamicIconCloud = () => {
  const useIcons = (slugs) => {
    const [icons, setIcons] = useState();
    useEffect(() => {
      fetchSimpleIcons({ slugs }).then(({ simpleIcons }) =>
        setIcons(Object.values(simpleIcons))
      );
    }, []);

    if (icons) {
      return icons.map((icon) =>
        renderSimpleIcon({
          icon,
          size: 40,
          aProps: {
            onClick: (e) => e.preventDefault(),
          },
        })
      );
    }

    return <a>Loading</a>;
  };

  const slugs = [
    "typescript",
    "github",
    "npm",
    "prisma",
    "next",
    "vercel",
    "visualstudiocode",
    "react",
    "tailwindcss",
    "node",
    "express",
    "mongodb",
    "docker",
    "graphql",
    "fastapi",
    "javascript",
    "html5",
    "css3",
    "linux",
    "supabase",
    "daisyui",
    "postman",
    "framer",
    "prettier",
    "eslint",
    "pip",
    "discord",
  ];

  const icons = useIcons(slugs);

  return (
    <Cloud
      id="stable-id-for-csr-ssr"
      containerProps={{
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: Const.pad * 2,
          marginRight: Const.pad * 2,
          marginTop: Const.pad * 2
        },
      }}

      options={{
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2.5,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
      }}
    >
      {icons || "Loading..."}
    </Cloud>
  );
};

export default DynamicIconCloud;
