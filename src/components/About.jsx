import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    number: "01",
    title: "Where It Started",
    text: "I started in a world of numbers, business, and structured thinking. Commerce gave me an understanding of how businesses operate and taught me to look at problems through processes, decisions, and the details that connect everything together.",
  },

  {
    number: "02",
    title: "Inside The System",
    text: "Working with auditing, verification, and data-heavy workflows introduced me to something deeper systems. I became interested not only in the information I was working with, but in how it moved, how it was organized, and how technology could make those processes better.",
  },

  {
    number: "03",
    title: "Building Instead",
    text: "At some point, I stopped wanting to simply understand the systems and started wanting to build them. That curiosity led me into development, where logic meets creativity. Today I create digital experiences with code, design, interaction, and motion.",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;

      // --------------------------------
      // INITIAL CARD STATES
      // --------------------------------

      gsap.set(cards, {
        autoAlpha: 0,
        y: 60,
      });

      gsap.set(cards[0], {
        autoAlpha: 1,
        y: 0,
      });

      // --------------------------------
      // LEFT HEADING REVEAL
      // --------------------------------

      gsap.fromTo(
        headingRef.current,
        {
          autoAlpha: 0,
          y: 60,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // --------------------------------
      // SCROLL JOURNEY
      // --------------------------------

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      timeline

        // Hold first card
        .to({}, { duration: 90 })

        // Card 01 OUT
        .to(cards[0], {
          autoAlpha: 0,
          y: -60,
          duration: 40,
          ease: "power2.inOut",
        })

        // Card 02 IN
        .to(
          cards[1],
          {
            autoAlpha: 1,
            y: 0,
            duration: 40,
            ease: "power2.inOut",
          },
          "<"
        )

        // Hold second card
        .to({}, { duration: 90 })

        // Card 02 OUT
        .to(cards[1], {
          autoAlpha: 0,
          y: -60,
          duration: 40,
          ease: "power2.inOut",
        })

        // Card 03 IN
        .to(
          cards[2],
          {
            autoAlpha: 1,
            y: 0,
            duration: 40,
            ease: "power2.inOut",
          },
          "<"
        )

        // Hold final card
        .to({}, { duration: 400 });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[300vh] border-t border-black/15"
    >
      <div className="grid h-full gap-14 py-20 lg:grid-cols-2">
        {/* LEFT SIDE */}

        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <h2
            ref={headingRef}
            className="text-[clamp(3.5rem,8vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]"
          >
            from
            <br />
            numbers to
            <br />
            <span className="text-amber-600">code</span>
          </h2>

          <div className="mt-10 max-w-sm">
            <div className="mb-5 h-px w-12" />

            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-neutral-500">
              A journey from commerce and systems to building digital
              experiences.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative">
          <div className="sticky top-4 flex h-[calc(100vh-6rem)] items-center pl-6">
            <div className="relative h-[26rem] w-full">
              {journey.map((item, index) => (
                <article
                  key={item.title}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  {/* NUMBER */}

                  <span className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                    {item.number}
                  </span>

                  {/* TITLE */}

                  <h3 className="max-w-4xl text-[clamp(3rem,7vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-600 md:text-xl">
                    {item.text}
                  </p>

                  {/* SMALL LINE */}

                  <div className="mt-10 h-px w-16 bg-black/30" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
