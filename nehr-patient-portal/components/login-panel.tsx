"use client";
import { LOGIN } from "@/locales/namespaces";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LoginForm } from "./forms/login";

export const LoginPanel = () => {
  const { t } = useTranslation(LOGIN);

  return (
    <div className="bg-white flex max-md:flex-col max-md:items-stretch max-md:gap-0 h-[calc(100vh-5rem)]">
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0"
      >
        <div className="bg-slate-900 flex grow flex-col justify-center items-center w-full px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-[341px] max-w-full flex-col items-stretch mt-60 mb-72 max-md:my-10">
            <div className="text-white text-5xl font-extrabold tracking-tight max-md:text-4xl max-md:leading-10">
              {t("heading")}
            </div>
            <div className="text-slate-500 text-base leading-7 mt-12 max-md:mt-10">
              {t("subHeading")}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0">
        <div className="bg-white flex grow flex-col justify-center items-center w-full px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-96 max-w-full flex-col items-center mb-56 max-md:my-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
