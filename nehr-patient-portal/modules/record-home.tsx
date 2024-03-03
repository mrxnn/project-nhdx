"use client";

import { OverviewCard } from "@/components/overview-card";
import { MedicalHistoryTimeline } from "./medical-history-timeline";
import { TitleSeparator } from "@/components/title-separator";

export const RecordHome = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard title="Encounters" value="120" lastMonthValue="20" />
        <OverviewCard title="Lab Reports" value="3" lastMonthValue="2" />
        <OverviewCard title="Prescriptions" value="5" lastMonthValue="1" />
        <OverviewCard title="Allergies" value="2" lastMonthValue="1" />
      </div>

      <TitleSeparator title="Medical History" />

      <MedicalHistoryTimeline />
    </>
  );
};
