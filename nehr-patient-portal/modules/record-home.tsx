"use client";

import { AccountInfo } from "@/components/forms/record-home/account-info";
import { PersonalInfo } from "@/components/forms/record-home/personal-info";
import { OverviewCard } from "@/components/overview-card";
import { DASHBOARD } from "@/locales/namespaces";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import {
  FaClinicMedical,
  FaFileMedicalAlt,
  FaHeadSideCough,
  FaNotesMedical,
} from "react-icons/fa";

const PATIENT_HOST =
  "https://728bba0c-9f10-4bb1-833b-7a9ce5dbfac8-dev.e1-eu-north-azure.choreoapis.dev/mlsa/patient/lk-fhir-patient-api-803/v1.0";

export const RecordHome = () => {
  const { t } = useTranslation(DASHBOARD);
  const { data: auth } = useSession();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["patient"],
    queryFn: async () => {
      const response = await fetch(`${PATIENT_HOST}/fhir/r4/Patient/54`, {
        headers: {
          Authorization: `Bearer ${auth?.user.idToken}`,
        },
      });

      const json = await response.json();
      return json;
    },
  });

  console.log(data, isLoading, isError);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewCard
          title={t("encounters")}
          value="120"
          lastMonthValue="20"
          icon={<FaClinicMedical className="h-5 w-5 text-muted-foreground" />}
        />
        <OverviewCard
          title={t("labReports")}
          value="3"
          lastMonthValue="2"
          icon={<FaFileMedicalAlt className="h-5 w-5 text-muted-foreground" />}
        />
        <OverviewCard
          title={t("prescriptions")}
          value="5"
          lastMonthValue="1"
          icon={<FaNotesMedical className="h-5 w-5 text-muted-foreground" />}
        />
        <OverviewCard
          title={t("allergies")}
          value="2"
          lastMonthValue="1"
          icon={<FaHeadSideCough className="h-5 w-5 text-muted-foreground" />}
        />
      </div>
      <PersonalInfo />
      <AccountInfo />
    </div>
  );
};
