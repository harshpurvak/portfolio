import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import linkedinIcon from "../images/linkedin-fill.png";
import githubIcon from "../images/github.png";
import discordIcon from "../images/discord.png";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harshit-gs-b06324389/",
    icon: linkedinIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/harshpurvak",
    icon: githubIcon,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/479332791889166347",
    icon: discordIcon,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}

      <nav className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto flex w-full max-w-360 items-center justify-between px-6 py-6 md:px-8">
          {/* MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              flex
              h-12
              w-12
              cursor-pointer
              items-center
              justify-center
              rounded-full    
              bg-transparent
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-accent
              hover:text-white
            "
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.8} />
            ) : (
              <Menu size={22} strokeWidth={1.8} />
            )}
          </button>

          {/* SOCIAL LINKS */}

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  bg-[#F5F1E8]/90
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-accent
                "
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="
                    h-5
                    w-5
                    object-contain
                    transition-all
                    duration-300
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MENU */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-[#F5F1E8]
          transition-all
          duration-500
          ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
      >
        <div
          className={`
            flex
            h-full
            flex-col
            justify-center
            px-8
            transition-transform
            duration-700
            md:px-20
            ${menuOpen ? "translate-y-0" : "translate-y-10"}
          `}
        >
          {/* MENU LABEL */}

          <div className="mb-10 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber-600">
              Navigation
            </span>
          </div>

          {/* LINKS */}

          <div className="flex flex-col">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex
                items-center
                gap-5
                border-b
                border-black/10
                py-4
                text-[clamp(3.5rem,8vw,8rem)]
                font-bold
                uppercase
                leading-[0.85]
                tracking-[-0.06em]
                transition-all
                duration-300
                hover:pl-4
              "
            >
              {/* <span className="text-sm font-medium tracking-normal text-amber-600">
                01
              </span> */}

              <span>About</span>
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex
                items-center
                gap-5
                border-b
                border-black/10
                py-4
                text-[clamp(3.5rem,8vw,8rem)]
                font-bold
                uppercase
                leading-[0.85]
                tracking-[-0.06em]
                transition-all
                duration-300
                hover:pl-4
              "
            >
              {/* <span className="text-sm font-medium tracking-normal text-amber-600">
                02
              </span> */}

              <span>Projects</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                group
                flex
                items-center
                gap-5
                border-b
                border-black/10
                py-4
                text-[clamp(3.5rem,8vw,8rem)]
                font-bold
                uppercase
                leading-[0.85]
                tracking-[-0.06em]
                transition-all
                duration-300
                hover:pl-4
              "
            >
              {/* <span className="text-sm font-medium tracking-normal text-amber-600">
                03
              </span> */}

              <span>Contact</span>
            </a>
          </div>

          {/* BOTTOM TEXT */}

          <div className="mt-10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Harshit Gusain
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Frontend Developer / 2026
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
