import "@/styles/globals.scss";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <h1 className="header--0">Current locale: {lang}</h1>
      <p>This text is rendered on the server: {dictionary.hello}</p>
    </div>
  );
}
