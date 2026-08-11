import React, { useRef } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const headingLines = gsap.utils.toArray(".contact-heading-line");
      const smallElements = gsap.utils.toArray(".contact-small");
      const socialLinks = gsap.utils.toArray(".contact-social");
      const footer = gsap.utils.toArray(".contact-footer");

      // Initial states
      gsap.set(headingLines, {
        y: 80,
        autoAlpha: 0,
      });

      gsap.set(smallElements, {
        y: 25,
        autoAlpha: 0,
      });

      gsap.set(socialLinks, {
        y: 25,
        autoAlpha: 0,
      });

      gsap.set(footer, {
        y: 20,
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      // Small label
      tl.to(smallElements, {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3.out",
      });

      // Main heading
      tl.to(
        headingLines,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.35"
      );

      // Bottom content
      tl.to(
        socialLinks,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.35"
      );

      // Footer
      tl.to(
        footer,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.25"
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-t border-black/15 px-6 py-20 md:px-1"
    >
      <div
        ref={contentRef}
        className="mx-auto flex min-h-[80vh] max-w-[1440px] flex-col justify-between"
      >
        {/* TOP */}

        <div>
          <div className="contact-small flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Get in touch
            </span>
          </div>

          {/* HEADING */}

          <div className="mt-8 overflow-hidden">
            <h2 className="text-[clamp(4rem,11vw,11rem)] font-bold uppercase leading-[0.76] tracking-[-0.07em]">
              <span className="contact-heading-line block">
                Let's
              </span>

              <span className="contact-heading-line block">
                Make
              </span>

              <span className="contact-heading-line block text-amber-600">
                Something.
              </span>
            </h2>
          </div>
        </div>

        {/* BOTTOM CONTENT */}

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-10">
          {/* LEFT */}

          <div>
            <p className="contact-social max-w-lg text-lg leading-relaxed text-neutral-600 md:text-2xl">
              Have an idea, a project, or just want to talk about development,
              design, and the web?
            </p>

            <a
              href="mailto:Harshitgusain08@gmail.com"
              className="contact-social group mt-10 inline-flex items-center gap-3 border-b border-black pb-3 text-lg font-medium transition-opacity hover:opacity-60 md:text-xl"
            >
              <span>Let's talk</span>

              <Mail
                size={19}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

              <ArrowUpRight
                size={20}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-end md:items-end">
            <div className="contact-social mb-5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Find me online
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="https://www.linkedin.com/in/harshit-gs-b06324389/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social group flex items-center gap-2 text-lg font-medium"
              >
                LinkedIn

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://github.com/harshpurvak"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social group flex items-center gap-2 text-lg font-medium"
              >
                GitHub

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://discord.com/users/479332791889166347"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social group flex items-center gap-2 text-lg font-medium"
              >
                Discord

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="contact-footer mt-20 flex flex-col justify-between gap-4 border-t border-black/15 pt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 md:flex-row">
          <span>© 2026 Harshit Gusain</span>

          <span>Built with React & GSAP</span>

          <span>Noida, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
