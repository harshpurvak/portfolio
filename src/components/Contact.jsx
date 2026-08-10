import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen border-t border-neutral-300 px-6 py-20 md:px-12 md:py-32"
    >
      <div className="flex min-h-[80vh] flex-col justify-between">

        {/* Top */}
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">
            Contact
          </span>

          <h2 className="mt-8 max-w-6xl text-[clamp(4rem,11vw,11rem)] font-bold uppercase leading-[0.78] tracking-[-0.07em]">
            Let's
            <br />
            Make
            <br />
            Something
          </h2>
        </div>

        {/* Bottom */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="max-w-md text-xl leading-relaxed text-neutral-600 md:text-2xl">
              Have an idea, a project, or just want to talk about
              development and design?
            </p>

            <a
              href="mailto:Harshitgusain08@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 pb-2 text-xl font-medium"
            >
             Connect <Mail />

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end md:items-end">

            <div className="flex flex-wrap gap-6 text-sm uppercase tracking-wider">
              <a
                href="https://www.linkedin.com/in/harshit-gs-b06324389/"
                className="transition-opacity hover:opacity-50"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/harshpurvak"
                className="transition-opacity hover:opacity-50"
              >
                GitHub ↗
              </a>

              <a
                href="https://discord.com/users/479332791889166347"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-50"
              >
                Discord ↗
              </a>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-neutral-300 pt-6 text-xs uppercase tracking-wider text-neutral-500 md:flex-row">
          <span>© 2026 Harshit Gusain</span>

          <span>Built with React + GSAP</span>

          <span>Noida, India</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;