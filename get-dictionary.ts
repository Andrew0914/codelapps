import "server-only";
import { Locale, i18n } from "./i18n-config";
import en from "./locales/en.json";
// We enumerate all dictionaries here for better linting and typescript support
// We also get the defalt import for cleaner types
const dictionaries = {
  es: () => import("./locales/es.json").then((module) => module.default),
  en: () => import("./locales/en.json").then((module) => module.default),
};

type DictionaryObject = typeof en;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
