"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export const NavbarLinks = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link href="#">{t("faq")}</Link>
      <Link href="#">{t("contactUs")}</Link>
    </>
  );
};
