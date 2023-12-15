import { Footer } from "@/modules/footer";
import { HeroSection } from "@/modules/home-hero";
import initTranslations from "../i18n";
import { TranslationsProvider } from "@/contexts/translations-provider";

const i18nNamespaces = ["home"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <HeroSection />
      <Footer />
    </TranslationsProvider>
  );
}
