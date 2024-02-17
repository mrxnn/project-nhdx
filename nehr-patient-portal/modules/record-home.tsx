"use client";

import { OverviewCard } from "@/components/overview-card";
import { DASHBOARD } from "@/locales/namespaces";
import { useTranslation } from "react-i18next";
import { MedicalHistoryTimeline } from "./medical-history-timeline";
import { Separator } from "@/components/ui/separator";

export const RecordHome = () => {
  const { t } = useTranslation(DASHBOARD);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard title={t("encounters")} value="120" lastMonthValue="20" />
        <OverviewCard title={t("labReports")} value="3" lastMonthValue="2" />
        <OverviewCard title={t("prescriptions")} value="5" lastMonthValue="1" />
        <OverviewCard title={t("allergies")} value="2" lastMonthValue="1" />
      </div>

      <div className="my-8 gap-x-4 flex items-center">
        <h1 className="font-bold text-lg">Medical History</h1>
        <Separator className="flex-1" />
      </div>

      <MedicalHistoryTimeline />
    </>
  );
};
