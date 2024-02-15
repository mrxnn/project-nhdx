"use client";

import { TranslationsProvider } from "@/contexts/translations-provider";
import { NavBar } from "@/modules/nav-bar";
import { DASHBOARD, HOME } from "@/locales/namespaces";
import initTranslations from "@/app/i18n";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { RecordHome } from "@/modules/record-home";
import { MyProfile } from "@/modules/my-profile";
import { MyPHNs } from "@/modules/my-phns";
import { MyCommunications } from "@/modules/my-communications";
import { PrivacyAndAccess } from "@/modules/privacy-and-access";
import { DashboardTabList } from "@/modules/dashboard-tab-list";
import { AccessHistory } from "@/modules/access-history";

const i18nNamespaces = [HOME, DASHBOARD];

export default async function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col w-full my-8 max-w-6xl mx-auto px-4">
        <Tabs defaultValue="record-home">
          <TabsList>
            <DashboardTabList />
          </TabsList>
          <div className="mt-9">
            <TabsContent value="record-home">
              <RecordHome />
            </TabsContent>
            <TabsContent value="my-phns">
              <MyPHNs />
            </TabsContent>
            <TabsContent value="my-communications">
              <MyCommunications />
            </TabsContent>
            <TabsContent value="access-history">
              <AccessHistory />
            </TabsContent>
            <TabsContent value="privacy-and-access">
              <PrivacyAndAccess />
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </TranslationsProvider>
  );
}
