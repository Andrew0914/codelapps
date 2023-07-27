import "@/styles/_globals.scss";
import { i18n, Locale } from "../../../i18n-config";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import LocaleContextProvider from "@/shared/contexts/LocaleContextProvider";
import { getDictionary } from "../../../get-dictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const appLang = params.lang as Locale;

  const dictionary = await getDictionary(appLang);

  return (
    <html lang={appLang}>
      <body>
        <LocaleContextProvider lang={appLang} dictionary={dictionary}>
          <TheHeader />
          <main>{children}</main>
          <TheFooter />
        </LocaleContextProvider>
      </body>
    </html>
  );
}
