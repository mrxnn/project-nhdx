"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="sticky top-full bg-slate-900 flex w-full flex-col justify-center pt-8 max-md:pt-0 px-40 pb-8 max-md:px-4 max-md:max-w-full ">
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full max-w-full items-stretch justify-between gap-5 max-md:flex-wrap"
      >
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
              <div className="text-white text-base leading-7 tracking-normal max-md:mt-10">
                <h4 className="text-xl font-semibold tracking-tight">
                  About the portal
                  <br />
                </h4>
                <span className="font-bold">
                  <br />
                </span>
                <span className="">
                  <Link href="#">About NEHR Patient Portal</Link>
                  <br />
                  <Link href="#">About NEHR</Link>
                  <br />
                  <Link href="#">Contributing Organisations</Link>
                  <br />
                  <Link href="#">Contact Us</Link>
                  <br />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <div className="text-white text-base leading-7 tracking-normal max-md:max-w-full">
                  <h4 className="text-xl font-semibold tracking-tight">
                    Important Links
                    <br />
                  </h4>
                  <span className="">
                    <br />
                    <Link href="#">Ministry of Health</Link>
                    <br />
                    <Link href="#">
                      Health Information Unit, Ministry of Health
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex basis-[0%] flex-col items-stretch self-start max-md:mt-10">
          <div className="text-white text-xl font-extrabold leading-7 tracking-normal whitespace-nowrap">
            Follow
          </div>
          <div className="flex items-stretch justify-between gap-5 mt-9 max-md:justify-center">
            <Link href="#">
              <FaFacebook color="white" size={24} />
            </Link>
            <Link href="#">
              <FaInstagram color="white" size={24} />
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center text-slate-600 text-xs leading-7 whitespace-nowrap items-center mt-32 max-md:mt-10">
        Copyright {new Date().getFullYear()} © Ministry Of Health - Sri Lanka
      </div>
    </footer>
  );
};
