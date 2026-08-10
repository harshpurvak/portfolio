import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import htmlIcon from "../images/stack/html (1).png";
import cssIcon from "../images/stack/css.png";
import javascriptIcon from "../images/stack/javascript-16-filled.png";
import reactIcon from "../images/stack/logo-react.png";
import tailwindIcon from "../images/stack/tailwind.png";
import gsapIcon from "../images/stack/gsap.png";
import reduxIcon from "../images/stack/icons8-redux-50.png";

const techStack = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
  },
  {
    name: "GSAP",
    icon: gsapIcon,
  },
  {
    name: "Redux",
    icon: reduxIcon,
  },
];

const TechStack = () => {
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;

    gsap.to(track, {
      xPercent: -50,
      duration: 34,
      ease: "none",
      repeat: -1,
    });
  });

  const renderStackItems = (prefix = "") =>
    techStack.map((tech) => (
      <div
        key={`${prefix}${tech.name}`}
        className="flex shrink-0 items-center gap-2 px-10 md:gap-7 md:px-16"
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-8 w-8 object-contain md:h-10 md:w-10"
        />

        <span className="text-2xl font-medium uppercase tracking-tight md:text-4xl">
          {tech.name}
        </span>

      </div>
    ));

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden  py-6">
      <div
        ref={trackRef}
        className="flex w-max items-center"
      >
        {renderStackItems()}
        {renderStackItems("duplicate-")}
      </div>
    </section>
  );
};

export default TechStack;