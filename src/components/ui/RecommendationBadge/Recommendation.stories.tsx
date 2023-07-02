import { StoryFn, Meta } from "@storybook/react";
import RecommendationBadge, {
  RecommendationProps,
} from "@/components/ui/RecommendationBadge";

export default {
  title: "Components/ui/RecommendationBadge",
  component: RecommendationBadge,
} as Meta<typeof RecommendationBadge>;

export const Default: StoryFn<typeof RecommendationBadge> = (
  args: RecommendationProps
) => <RecommendationBadge {...args} />;

Default.args = {
  index: 1,
  title: "La meta de las pruebas unitarias",
  slug: "meta-pruebas-unitarias",
  thumbnail:
    "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
};
