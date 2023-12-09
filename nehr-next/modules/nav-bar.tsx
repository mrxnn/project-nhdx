"use client";

import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { NavbarLinks } from "@/components/navbar-links";

export const NavBar: FC = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      link: "https://instagram.com/janithrs",
    },

    {
      name: "Github",
      icon: <FaGithub size={20} />,
      link: "https://github.com/janithRS",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={20} />,
      link: "https://twitter.com/janithrs",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/janithrs/",
    },
  ];

  return (
    <div className="sticky top-0">
      <nav className=" z-40 w-full py-4  bg-white">
        <ul className="flex items-center justify-between">
          <li>
            <motion.span
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black"
            >
              NEHR
            </motion.span>
          </li>
          <li className="flex items-center">
            <NavbarLinks />
          </li>
        </ul>
      </nav>
      <div className="flex -mx-40">
        <Separator />
      </div>
    </div>
  );
};
