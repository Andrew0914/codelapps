"use client";
import { PostBase } from "@/models/Post";
import LocaleContext from "@/shared/contexts/LocaleContext";
import { useContext } from "react";
import RecommendationBadge from "../ui/RecommendationBadge";

interface PostFooterProps {
  recommendations: PostBase[];
}
// TODO: Create story
export default function PostFooter({ recommendations }: PostFooterProps) {
  const { dictionary } = useContext(LocaleContext);
  const recommendationsItems =
    recommendations &&
    recommendations.map((recommendation, index) => {
      return (
        <RecommendationBadge
          key={recommendation.slug}
          {...recommendation}
          index={index + 1}
        />
      );
    });

  return (
    <footer className="my--3">
      <h5 className="header--5">{dictionary.post.recommendations}</h5>
      <hr className="my--3" />
      <div className="mb--3 grid--auto">{recommendationsItems}</div>
    </footer>
  );
}
