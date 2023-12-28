import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DASHBOARD } from "@/locales/namespaces";

export const EncountersCard = () => {
  const { t } = useTranslation(DASHBOARD);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{t("encounters")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">120</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
};
