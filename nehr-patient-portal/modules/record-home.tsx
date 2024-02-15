"use client";

import { OverviewCard } from "@/components/overview-card";
import { Timeline, type Milestone } from "@/components/timeline";
import { DASHBOARD } from "@/locales/namespaces";
import { useTranslation } from "react-i18next";

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

      <Timeline className="mt-10">
        {data.map((milestone, idx) => (
          <Timeline.Milestone
            key={idx}
            milestone={milestone}
            last={idx === data.length - 1}
          />
        ))}
      </Timeline>
    </>
  );
};

// sample data
const data: Milestone[] = [
  {
    id: "1234",
    institution: "Asiri Surgical Hospital",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "OPD Encounters",
  },
  {
    id: "1234",
    institution: "General Hospital of Sri Lanka",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "HCL Screening",
  },
  {
    id: "1234",
    institution: "Asiri Central Hospital",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "Appoinments",
  },
  {
    id: "1234",
    institution: "KDU Hospital, Werahara",
    date: "2023-01-10",
    time: "14:31",
    encounterType: "Lab Reports",
  },
];
