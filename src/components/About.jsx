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
  const cardRefs = useRef([]);

 useGSAP(
  () => {
    const cards = cardRefs.current;

    gsap.set(cards, {
      autoAlpha: 0,
      y: 60,
    });

    gsap.set(cards[0], {
      autoAlpha: 1,
      y: 0,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: false,
      },
    });

    timeline
      .to({}, { duration: 2 })

      .to(cards[0], {
        autoAlpha: 0,
        y: -60,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        cards[1],
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )

      .to({}, { duration: 2 })

      .to(cards[1], {
        autoAlpha: 0,
        y: -60,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        cards[2],
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )

      .to({}, { duration: 2 });
  },
  { scope: sectionRef }
);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-[300vh] border-t border-black"
    >
      <div className="grid gap-14 py-20 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <h2 className="text-[clamp(3.5rem,8vw,9rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]">
            from
            <br />
            numbers to
            <br />
            code
          </h2>

          {/* <div className="mt-12 max-w-xl ">
            <p className="text-xl leading-relaxed md:text-2xl">
              I am a commerce graduate who worked in audit and data
              engineering, and now I work as a developer.
            </p>
          </div> */}
        </div>

        <div className="relative min-h-[400vh]">
          <div className="sticky top-4 flex h-[calc(100vh-6rem)] items-center pl-6">
            <div className="relative h-[24rem] w-full">
              {journey.map((item, index) => (
                <article
                  key={item.title}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <span className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                    {item.number}
                  </span>
                  <h3 className="text-[clamp(3rem,7vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em]">
                    {item.title}
                  </h3>
                  <p className="mt-8 max-w-md text-lg leading-relaxed text-neutral-700 md:text-xl">
                    {item.text}
                  </p>
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
