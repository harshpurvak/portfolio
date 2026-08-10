import React from "react";

const Hero = () => {
  return (
    <section className="flex mt-20 mb-15 flex-col justify-center">
      
      <h1 className="text-[clamp(6rem,9vw,11rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em]">
        Harshit
        <br />
        Gusain
      </h1>

      <div className="mt-12 max-w-md border-l border-black pl-5">
        <p className="text-base leading-relaxed md:text-lg">
          Developer based in Noida. Building digital experiences where{" "}
          <span className="italic text-amber-600">
            code, design, and motion
          </span>{" "}
          come together.
        </p>
      </div>

    </section>
  );
};

export default Hero;