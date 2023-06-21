import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import SocialNetworks from "@/components/SocialNetworks";
import PostsList from "@/components/PostsList";
import { PostItemProps } from "@/components/ui/PostItem";
import Button from "@/components/ui/Button";
import TagsBox from "@/components/ui/TagsBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { Tag } from "@/models/Post";



// TODO: get fixed texts from dictionary en - es
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex--center-column">
      <header className="w--full bg--lead">
        <div className="content flex--center-column pt--5 pb--3">
          <div className="flex--sb-center">
            <h1 className="header--0 text--center">Hola, soy Andrew GM </h1>
            <span className="waving header--1" role="img" aria-label="hand">
              👋
            </span>
          </div>
          <p className="text--content text--md container--xs text--center mt--4">
            Front-end, Back-end, apps móviles, juegos y más. ¡Bienvenido a mi
            rincón digital donde la creatividad y la tecnología se fusionan!
          </p>
          <SocialNetworks mode="short" className="mt--4" />
        </div>
      </header>

      <section className="content py--4">
        <PostsList posts={[]} />

        <div className="my--2">
          <SectionTitle className="mb--2">Tags</SectionTitle>
          <TagsBox tags={[]} />
        </div>
      </section>
    </div>
  );
}
