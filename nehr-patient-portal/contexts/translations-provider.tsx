"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";

interface TranslationsProviderProps {
  children: JSX.Element | JSX.Element[];
  locale: string;
  namespaces: string[];
  resources: any;
}

export const TranslationsProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
