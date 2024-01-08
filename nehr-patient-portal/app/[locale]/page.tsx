import { Footer } from "@/modules/footer";
import { HeroSection } from "@/modules/home-hero";
import initTranslations from "../i18n";
import { TranslationsProvider } from "@/contexts/translations-provider";
import { NavBar } from "@/modules/nav-bar";
import { HOME } from "@/locales/namespaces";

const i18nNamespaces = [HOME];

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
      <NavBar />
      <HeroSection />
      <Footer />
    </TranslationsProvider>
  );
}
