"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { NavbarLinks } from "@/components/navbar-links";
import { LanguageSelector } from "@/components/language-selector";

export const NavBar: FC = () => {
  return (
    <div className="sticky top-0">
      <nav className="z-40 w-full py-6 bg-white">
        <ul className="flex items-center justify-between">
          <li>
            <motion.span
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-black ml-40"
            >
              NEHR
            </motion.span>
          </li>
          <li className="flex items-center gap-8 mr-40">
            <NavbarLinks />
            <LanguageSelector />
          </li>
        </ul>
      </nav>
      <Separator />
    </div>
  );
};
