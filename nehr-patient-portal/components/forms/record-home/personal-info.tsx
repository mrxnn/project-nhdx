"use client";

import { TitleSeparator } from "@/components/title-separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

export const PersonalInfo = () => {
  const { t } = useTranslation("dashboard");

  return (
    <div>
      <TitleSeparator title={t("personalInformation")} />
      <div className="self-stretch flex items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col gap-2">
          <Label htmlFor="email">{t("name")}</Label>
          <Input type="email" id="email" placeholder={t("name")} />
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col gap-2">
          <Label htmlFor="text">{t("gender")}</Label>
          <Input type="text" id="text" placeholder={t("gender")} />
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col gap-2">
          <Label htmlFor="dob">{t("dob")}</Label>
          <Input type="date" id="dob" placeholder={t("dob")} />
        </div>
      </div>
    </div>
  );
};
