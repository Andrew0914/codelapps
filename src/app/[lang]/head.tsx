import { getDictionary } from "get-dictionary";

export default async function Head({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <title>☕ Andrew Dev</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={dictionary.siteDescription} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
