import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import displayImage from "../images/display.jpg";

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const imageInnerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // -------------------------
      // INITIAL STATES
      // -------------------------

      gsap.set(".hero-line-inner", {
        yPercent: 100,
      });

      gsap.set(".hero-description", {
        opacity: 0,
        y: 20,
      });

      // Image starts hidden from bottom
      gsap.set(imageRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      // Image itself starts slightly zoomed
      gsap.set(imageInnerRef.current, {
        scale: 1.08,
      });

      // -------------------------
      // TEXT
      // -------------------------

      tl.to(".hero-line-inner", {
        yPercent: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power4.out",
      })

        // -------------------------
        // DESCRIPTION
        // -------------------------

        .to(
          ".hero-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.4"
        )

        // -------------------------
        // IMAGE REVEAL
        // -------------------------

        .to(
          imageRef.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.15,
            ease: "power4.inOut",
          },
          "-=0.45"
        )

        // Image settles from slight zoom
        .to(
          imageInnerRef.current,
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "<"
        );
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      className="relative mt-20 min-h-[78vh]  pb-10 md:mt-16"
    >

      <div className="relative z-10 md:w-[58%]">
        {/* NAME */}

        <h1 className="text-[clamp(5rem,9vw,11rem)] font-bold uppercase leading-[0.78] tracking-[-0.06em]">
          <span className="block overflow-hidden">
            <span className="hero-line-inner block">
              Harshit
            </span>
          </span>

          <span className="block overflow-hidden">
            <span className="hero-line-inner block">
              Gusain
            </span>
          </span>
        </h1>

        {/* DESCRIPTION */}

        <div className="hero-description mt-12 max-w-md border-l border-black pl-5">
          <p className="text-base leading-relaxed md:text-lg">
            Developer based in Noida. Building digital experiences where{" "}
            <span className="italic text-amber-600">
              code, design, and motion
            </span>{" "}
            come together.
          </p>
        </div>
      </div>

     {/* =========================
    PHOTO
========================= */}

<div
  className="
    mt-14
    w-full
    md:absolute
    md:right-[6%]
    md:top-[1%]
    md:mt-0
    md:w-[34vw]
    md:max-w-[590px]
  "
>
  {/* OUTER CARD
      Shadow lives here
  */}
  <div
    className="
      group
      relative
      h-[55vh]
      w-full
      rounded-[24px]
      shadow-[6px_10px_41px_-11px_rgba(0,_0,_0,_0.7)]
      transition-all
      duration-500
      ease-out
      md:h-[60vh]
      md:rounded-[28px]
      md:hover:-translate-y-1
      md:hover:shadow-[0_28px_65px_rgba(0,0,0,0.30)]
    "
  >
    {/* INNER IMAGE CONTAINER */}
    <div
      ref={imageRef}
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[24px]
        md:rounded-[28px]
      "
    >
      {/* IMAGE */}

      <img
        ref={imageInnerRef}
        src={displayImage}
        alt="Harshit Gusain"
        className="
          block
          h-full
          w-full
          object-cover
          object-[center_65%]
          transition-transform
          duration-700
          ease-out
          md:group-hover:scale-[1.04]
        "
      />

      {/* IMAGE OVERLAY */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/10
          via-transparent
          to-white/5
        "
      />
    </div>
  </div>
</div>

      {/* BOTTOM DIVIDER */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-black/70" />
    </section>
  );
};

export default Hero;
