"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col w-full my-32 text-center items-center md:px-40 max-md:px-4"
    >
      <>
        <h1 className="text-slate-900 text-center text-5xl font-extrabold leading-10 tracking-tighter self-center max-w-[814px] max-md:max-w-full max-md:text-4xl max-md:leading-10 max-md:mt-10">
          Welcome to the National Electronic Health Record Platform.
        </h1>
        <p className="text-slate-500 text-center text-base leading-7 self-center max-w-[694px] mt-3 max-md:max-w-full">
          {`The National Electronic Health Record (NEHR) is a key enabler for Sri
        Lanka’s strategic vision of "One Patient, One Health Record".`}
        </p>
        <div className="flex mt-2 lg:mt-4 gap-2">
          <Button>Sign In</Button>
          <Button variant="outline">Register</Button>
        </div>
      </>
    </motion.div>
  );
};
