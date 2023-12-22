"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { LOGIN } from "@/locales/namespaces";

export const LoginForm = () => {
  const { t } = useTranslation(LOGIN);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-black text-3xl font-extrabold leading-9 tracking-tight whitespace-nowrap">
        {t("form.title")}
      </div>
      <Input
        className="mt-10 pl-3 pr-16 py-2 max-md:mt-10 max-md:pr-5"
        type="text"
        placeholder={t("form.username")}
      />
      <Input
        className="mt-6 pl-3 pr-16 py-2 max-md:pr-5"
        type="password"
        placeholder={t("form.password")}
      />
      <Button className="mt-6 max-md:mt-10 w-full">{t("form.button")}</Button>
    </motion.div>
  );
};
