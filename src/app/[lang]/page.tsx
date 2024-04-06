import { Locale } from "../../../i18n-config";
import SocialNetworks from "@/components/SocialNetworks";
import PostsList from "@/components/PostsList";
import TagsBox from "@/components/ui/TagsBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllPostsMetaData } from "../api/posts/controller";
import { getAllTags } from "../api/tags/controller";
import { getDictionary } from "../../../get-dictionary";
import Image from "next/image";
import IAvatar from "@/components/IAvatart";


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
    <>
      <header className="w--full bg--lead bg--stars">

        <div className="flex--center-column py--8 content">
          <span className="text--content text--big text--md mb--4">
            {homeDictionary.gretting}
          </span>

          <h1 className="header--0 text--center">
            {homeDictionary.myName}
          </h1>

          <p className="text--content text--big container--xs mt--4 text--center">
            {homeDictionary.aboutMe}
          </p>

          <p className="text--content text--xsmall container--xs mt--3 text--center">
            {homeDictionary.currentTechnologies}
          </p>

          <IAvatar
            src="/images/common/i_am_andrew.png"
            width={180}
            height={180}
            alt=""
            title=""
            className="circle mt--4"
            href="/about"
            textAction={homeDictionary.aboutMeTitle}
          />

          <SocialNetworks mode="full" className="mt--4" />

        </div>

      </header>

      <section className="content py--4">
        <PostsList posts={posts} shouldShowOderFilters={false} />

        <div className="my--2">
          <SectionTitle className="mb--2">{tagsDictionary.title}</SectionTitle>
          <TagsBox tags={tags} />
        </div>
      </section>
    </>
  );
}
