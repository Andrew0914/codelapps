import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";
import { createContext } from "react";
import en from "../../../locales/en.json";

export type LocaleMessages = typeof en;
export interface LocaleContextValues {
  lang: Locale;
  dictionary: LocaleMessages;
}

const LocaleContext = createContext<LocaleContextValues>({
  lang: "en",
  dictionary: en,
});

export default LocaleContext;
