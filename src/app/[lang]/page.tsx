import "@/styles/_globals.scss";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import SocialNetworks from "../components/SocialNetworks";
import TagsBox from "../components/ui/TagsBox";
import PostItem, { PostItemProps } from "../components/ui/PostItem";
import PostsList from "../components/ui/PostsList";

const posts: PostItemProps[] = [
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar: "",
    thumbnail: "",
  },
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar: "",
    thumbnail: "",
  },
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar: "",
    thumbnail: "",
  },
];

// TODO: get fixed texts from dictionary en - es
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex--center-column">
      <section className="w--full bg--lead">
        <div className="content flex--center-column pt--5 pb--3">
          <h1 className="header--0 text--center">Hola, soy Andrew GM 👋</h1>
          <p className="text--content text--md container--xs text--center mt--4">
            Front-end, Back-end, apps móviles, juegos y más. ¡Bienvenido a mi
            rincón digital donde la creatividad y la tecnología se fusionan!
          </p>
          <SocialNetworks mode="short" className="mt--4" />
        </div>
      </section>

      <section className="content py--4">
        <PostsList posts={posts} />
      </section>
    </div>
  );
}
