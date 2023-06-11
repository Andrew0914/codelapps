import "@/styles/_globals.scss";
import { i18n } from "../../../i18n-config";
import TheHeader from "@/app/components/TheHeader";
import TheFooter from "@/app/components/TheFooter";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <TheHeader />
        <main>{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
