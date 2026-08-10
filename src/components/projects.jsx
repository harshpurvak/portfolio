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
      "A modern e-commerce experience focused on product discovery, clean interfaces, and a smooth shopping experience. It uses local storage and protected routes.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://sky-mart-pied.vercel.app/",
  },

  {
    number: "02",
    title: "THE WORKSPACE",
    name: "Productivity Dashboard",
    description:
      "A personal workspace combining task planning, goals, focus sessions, quotes, weather, and theme switching, with local storage for persistence.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://productivity-dashboard-lake.vercel.app/",
  },

  {
    number: "03",
    title: "THE LEDGER",
    name: "FinTrack Pro",
    description:
      "A personal finance experience for managing transactions, tracking income and expenses, and understanding cash flow.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://fin-track-pro-drab-chi.vercel.app/",
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

      /*
        --------------------------------
        HORIZONTAL SCROLL
        --------------------------------
      */

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

      /*
        --------------------------------
        PROJECT CONTENT STAGGER
        --------------------------------
      */

      cards.forEach((card) => {
        const elements = card.querySelectorAll(".project-reveal");

        gsap.fromTo(
          elements,

          {
            opacity: 0,
            y: 50,
          },

          {
            opacity: 1,
            y: 0,

            duration: 0.8,

            stagger: 0.12,

            ease: "power3.out",

            scrollTrigger: {
              trigger: card,

              containerAnimation: horizontalTween,

              start: "left 75%",

              end: "left 45%",

              scrub: 0.5,
            },
          }
        );
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
      className="relative "
    >
      <div className="flex h-screen items-center">
        <div
          ref={trackRef}
          className="flex w-max gap-10 px-6 md:gap-20 md:px-12"
        >
          {/* =========================
              INTRO
          ========================== */}

          <div className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-center md:w-[45vw]">
            <span className="project-reveal text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
              Selected Work
            </span>

            <h2 className="project-reveal mt-6 text-[clamp(4rem,10vw,10rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em]">
              Projects
            </h2>

            <p className="project-reveal mt-8 max-w-sm text-lg leading-relaxed text-neutral-600">
              A collection of things I've built while exploring code,
              interfaces, and interaction.
            </p>
          </div>

          {/* =========================
              PROJECT CARDS
          ========================== */}

          {projects.map((project) => (
            <article
              key={project.number}
              data-project-card
              className="flex h-[70vh] w-[80vw] shrink-0 flex-col justify-between border border-neutral-300 p-6 md:w-[65vw] md:p-10"
            >
              {/* TOP */}

              <div className="project-reveal flex items-start justify-between">
                <span className="text-sm font-bold text-amber-600">
                  {project.number}
                </span>

                <span className="text-sm uppercase tracking-wider">
                  {project.title}
                </span>
              </div>

              {/* MIDDLE */}

              <div>
                <h3 className="project-reveal text-[clamp(3rem,7vw,8rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em]">
                  {project.name}
                </h3>

                <p className="project-reveal mt-8 max-w-lg text-lg leading-relaxed text-neutral-600">
                  {project.description}
                </p>
              </div>

              {/* BOTTOM */}

              <div className="project-reveal flex items-end justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-neutral-300 px-3 py-1 text-xs uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-medium uppercase tracking-wider transition-opacity duration-300 hover:opacity-50"
                >
                  Visit ↗
                </a>
              </div>
            </article>
          ))}

          {/* =========================
              END SPACER
          ========================== */}

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