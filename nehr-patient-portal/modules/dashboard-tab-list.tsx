import { TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";

export const DashboardTabList = () => {
  const { t } = useTranslation("dashboard");
  interface Tab {
    label: string;
    value: string;
  }
  const tabs: Tab[] = [
    {
      label: t("recordHome"),
      value: "record-home",
    },
    {
      label: t("myProfile"),
      value: "my-profile",
    },
    {
      label: t("myPHNs"),
      value: "my-phns",
    },
    {
      label: t("mySubmissions"),
      value: "my-submissions",
    },
    {
      label: t("privacyAndAccess"),
      value: "privacy-and-access",
    },
  ];

  return (
    <>
      {tabs.map((tab) => (
        <TabsTrigger key={tab.value} value={tab.value}>
          {tab.label}
        </TabsTrigger>
      ))}
    </>
  );
};
