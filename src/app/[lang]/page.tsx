import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import SocialNetworks from "../components/SocialNetworks";
import PostsList from "../components/PostsList";
import { PostItemProps } from "../components/ui/PostItem";
import Button from "../components/ui/Button";
import TagsBox, { TagContent } from "../components/ui/TagsBox";
import SectionTitle from "../components/ui/SectionTitle";

const posts: PostItemProps[] = [
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar:
      "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    url: "http://codelapps.com",
  },
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar:
      "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80",
    url: "http://codelapps.com",
  },
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias muchas pruebas para ver que pasa",
    excerpt:
      "Test de pruebas unitarias Test de pruebas unitariasTest de pruebas unitarias",
    author: "Andrew GM",
    avatar:
      "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1682685796766-0fddd3e480de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    url: "http://codelapps.com",
  },
];
const tags: TagContent[] = [
  {
    name: "Javascript",
    destiny: "/javascript",
  },
  {
    name: "Design",
    destiny: "/design",
  },
  {
    name: "Elixir",
    destiny: "/elixir",
  },
  {
    name: "Gaming",
    destiny: "/gaming",
  },
  {
    name: "React",
    destiny: "/react",
  },
  {
    name: "HTML",
    destiny: "/html",
  },
  {
    name: "CSS",
    destiny: "/css",
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
      </section>

      <section className="content py--4">
        <PostsList posts={posts} />
        <div className="mt--4 flex--center">
          <Button className="w--half"> More posts </Button>
        </div>
        <div className="my--2">
          <SectionTitle className="mb--2">Tags</SectionTitle>
          <TagsBox tags={tags} />
        </div>
      </section>
    </div>
  );
}
