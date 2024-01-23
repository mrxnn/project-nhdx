"use client";

import { TitleSeparator } from "@/components/title-separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

export const AccountInfo = () => {
  const { t } = useTranslation("dashboard");

  return (
    <div>
      <TitleSeparator title={t("accountInformation")} />
      <div className="flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-3 self-stretch items-stretch justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col gap-2">
            <Label htmlFor="text">{t("lastPortalLogin")}</Label>
            <Input
              type="text"
              id="text"
              placeholder={t("lastPortalLogin")}
              disabled
            />
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col gap-2">
            <Label htmlFor="text">{t("lastProviderAccess")}</Label>
            <Input
              type="text"
              id="text"
              placeholder={t("lastProviderAccess")}
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-3 self-stretch items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex grow flex-col gap-2">
            <Label htmlFor="linked-phns">{t("linkedPHNs")}</Label>
            <Input
              type="text"
              id="linked-phns"
              placeholder={t("linkedPHNs")}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};
