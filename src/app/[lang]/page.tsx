import { Locale } from "../../../i18n-config";
import SocialNetworks from "@/components/SocialNetworks";
import PostsList from "@/components/PostsList";
import TagsBox from "@/components/ui/TagsBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllPostsMetaData } from "../api/posts/controller";
import { getAllTags } from "../api/tags/controller";
import { getDictionary } from "../../../get-dictionary";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const posts = await getAllPostsMetaData();
  const tags = await getAllTags();
  const { home: homeDictionary, tags: tagsDictionary } = await getDictionary(
    lang
  );
  return (
    <div className="flex--center-column">
      <header className="w--full bg--lead">
        <div className="content flex--center-column pt--5 pb--3">
          <div className="flex--sb-center">
            <h1 className="header--0 text--center">
              {homeDictionary.gretting}
            </h1>
            <span className="waving header--1" role="img" aria-label="hand">
              👋
            </span>
          </div>
          <p className="text--content text--md container--xs text--center mt--4">
            {homeDictionary.welcome}
          </p>
          <SocialNetworks mode="short" className="mt--4" />
        </div>
      </header>

      <section className="content py--4">
        <PostsList posts={posts} shouldShowOderFilters={false} />

        <div className="my--2">
          <SectionTitle className="mb--2">{tagsDictionary.title}</SectionTitle>
          <TagsBox tags={tags} />
        </div>
      </section>
    </div>
  );
}
