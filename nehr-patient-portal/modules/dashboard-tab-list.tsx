import { TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  label: string;
  value: string;
  disabled?: boolean;
}

export const DashboardTabList = () => {
  const tabs: Tab[] = [
    {
      label: "Record Home",
      value: "record-home",
    },
    {
      label: "My PHNs",
      value: "my-phns",
    },
    {
      label: "My Communications",
      value: "my-communications",
    },
    {
      label: "Access History",
      value: "access-history",
    },
    {
      label: "Privacy and Access",
      value: "privacy-and-access",
    },
  ];

  return (
    <>
      {tabs.map(({ value, disabled, label }) => (
        <TabsTrigger key={value} value={value} disabled={disabled}>
          {label}
        </TabsTrigger>
      ))}
    </>
  );
};
