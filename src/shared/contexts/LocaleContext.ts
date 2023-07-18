import { Locale } from "i18n-config";
import { createContext } from "react";

export interface LocaleContextValues {
  lang: Locale;
  dictionary: { [key: string]: string };
}

const LocaleContext = createContext<LocaleContextValues>({
  lang: "en",
  dictionary: {},
});

export default LocaleContext;
