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
        className="flex shrink-0 items-center gap-4 px-8 md:gap-6 md:px-14"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#EDE4D6]">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-6 w-6 object-contain md:h-7 md:w-7"
          />
        </div>

        <span className="text-2xl font-semibold uppercase tracking-[-0.04em] md:text-4xl">
          {tech.name}
        </span>
      </div>
    ));

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#F5F1E8] py-7">
      
      <div className="mb-6 flex items-center justify-between px-6 md:px-12">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
          Tools / Technologies
        </span>

        <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-neutral-800 md:block">
          My Stack
        </span>
      </div>

      <div className="relative overflow-hidden">
        
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F5F1E8] to-transparent md:w-36" />

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F5F1E8] to-transparent md:w-36" />

        <div ref={trackRef} className="flex w-max items-center">
          {renderStackItems()}
          {renderStackItems("duplicate-")}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 px-6 md:px-12">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          Always learning / Always building
        </span>
      </div>
    </section>
  );
};

export default TechStack;
