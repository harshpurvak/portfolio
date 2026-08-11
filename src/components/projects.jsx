import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "THE STORE",
    name: "SkyMart",
    description:
      "A modern e-commerce experience focused on product discovery, clean interfaces, and a smooth shopping experience.",
    technologies: ["React", "JavaScript", "Tailwind"],
    live: "https://sky-mart-pied.vercel.app/",
    type: "E-COMMERCE",
  },
  {
    number: "02",
    title: "THE WORKSPACE",
    name: "Productivity Dashboard",
    description:
      "A personal workspace combining task planning, goals, focus sessions, quotes, weather, and theme switching.",
    technologies: ["React", "JavaScript", "Tailwind"],
    live: "https://productivity-dashboard-lake.vercel.app/",
    type: "PRODUCTIVITY",
  },
  {
    number: "03",
    title: "THE LEDGER",
    name: "FinTrack Pro",
    description:
      "A personal finance experience for managing transactions, tracking income and expenses, and understanding cash flow.",
    technologies: ["React", "JavaScript", "Tailwind"],
    live: "https://fin-track-pro-drab-chi.vercel.app/",
    type: "FINANCE",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const cards = gsap.utils.toArray("[data-project-card]");

      const getScrollAmount = () => {
        const lastProject = track.querySelector(
          "[data-project-card]:last-of-type"
        );

        const sectionWidth = sectionRef.current.offsetWidth;

        if (!lastProject) {
          return track.scrollWidth - sectionWidth;
        }

        return (
          lastProject.offsetLeft +
          lastProject.offsetWidth / 2 -
          sectionWidth / 2
        );
      };

      // --------------------------------
      // HORIZONTAL SCROLL
      // --------------------------------

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount() + 700}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // --------------------------------
      // INTRO ANIMATION
      // --------------------------------

      const introElements = gsap.utils.toArray(
        "[data-project-intro]"
      );

      gsap.fromTo(
        introElements,
        {
          autoAlpha: 0,
          y: 40,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",

          scrollTrigger: {
            trigger: introElements[0],
            containerAnimation: horizontalTween,
            start: "left 85%",
            end: "left 60%",
            scrub: 0.4,
          },
        }
      );

      // --------------------------------
      // PROJECT CARD REVEAL
      // --------------------------------

      cards.forEach((card) => {
        const elements = card.querySelectorAll(".project-reveal");

        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",

            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 80%",
              end: "left 50%",
              scrub: 0.5,
            },
          }
        );

        // --------------------------------
        // PROJECT TITLE REVEAL
        // --------------------------------

        const title = card.querySelector(".project-title");

        if (title) {
          gsap.fromTo(
            title,
            {
              opacity: 0,
              y: 60,
              scale: 0.96,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",

              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left 75%",
                end: "left 45%",
                scrub: 0.6,
              },
            }
          );
        }
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden border-t border-black/10 bg-[#F5F1E8]"
    >
      <div className="flex h-screen items-center">
        <div
          ref={trackRef}
          className="flex w-max items-center gap-8 px-6 md:gap-16 md:px-12"
        >
          {/* --------------------------------
              INTRO
          -------------------------------- */}

          <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center md:w-[45vw]">

            <h2
              data-project-intro
              className="mt-5 text-[clamp(4rem,10vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.07em]"
            >
              Projects
            </h2>

            <p
              data-project-intro
              className="mt-8 max-w-sm text-base leading-relaxed text-neutral-600 md:text-lg"
            >
              A collection of digital experiences built while exploring
              interfaces, systems, interaction and motion.
            </p>

            <div
              data-project-intro
              className="mt-10 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
            >
              Scroll to explore
            </div>
          </div>

          {/* --------------------------------
              PROJECT CARDS
          -------------------------------- */}

          {projects.map((project) => (
            <article
              key={project.number}
              data-project-card
              className="
                group
                relative
                flex
                h-[72vh]
                w-[82vw]
                shrink-0
                flex-col
                justify-between
                overflow-hidden
                rounded-[2rem]
                border
                border-black/10
                bg-[#EDE4D6]
                p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]
                md:w-[65vw]
                md:p-10
              "
            >
              {/* HOVER LIGHT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/20
                  via-transparent
                  to-black/[0.03]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* TOP */}

              <div className="project-reveal relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-[0.2em] text-amber-600">
                    {project.number}
                  </span>


                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                    {project.type}
                  </span>
                </div>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                  2026
                </span>
              </div>

              {/* MAIN CONTENT */}

              <div className="relative z-10 max-w-5xl">
                <p className="project-reveal mb-5 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  {project.title}
                </p>

                <h3
                  className="
                    project-title
                    max-w-4xl
                    text-[clamp(3.5rem,7vw,8rem)]
                    font-bold
                    uppercase
                    leading-[0.78]
                    tracking-[-0.07em]
                  "
                >
                  {project.name}
                </h3>

                <p className="project-reveal mt-8 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* BOTTOM */}

              <div className="project-reveal relative z-10 flex items-end justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-black/10
                        bg-white/20
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-neutral-600
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-lg
                    text-white
                    transition-all
                    duration-300
                    hover:rotate-45
                    hover:scale-110
                  "
                >
                  ↗
                </a>
              </div>

              {/* LARGE NUMBER */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-8
                  select-none
                  text-[18rem]
                  font-bold
                  leading-none
                  tracking-[-0.12em]
                  text-black/[0.035]
                  transition-transform
                  duration-700
                  group-hover:-translate-y-4
                "
              >
                {project.number}
              </span>
            </article>
          ))}

          {/* END SPACER */}

          <div
            className="w-[28vw] shrink-0 md:w-[36vw]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
