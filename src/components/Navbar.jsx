import React, { useState } from "react";
import { Menu, Mail, X } from "lucide-react";

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
      <div className="relative z-50 flex items-center justify-between py-4">
        <button
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="block"
            >
              <img
                src={link.icon}
                alt={link.name}
                className="h-6 w-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full cursor-pointer flex-col justify-center gap-2 px-18">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-bold"
          >
            About Me
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-bold"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-6xl font-bold"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
