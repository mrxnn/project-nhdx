import { TranslationsProvider } from "@/contexts/translations-provider";
import { NavBar } from "@/modules/nav-bar";
import { HOME, LOGIN } from "@/locales/namespaces";
import initTranslations from "@/app/i18n";
import { LoginPanel } from "@/components/login-panel";

const i18nNamespaces = [HOME, LOGIN];

export default async function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <NavBar />
      <LoginPanel />
    </TranslationsProvider>
  );
}
