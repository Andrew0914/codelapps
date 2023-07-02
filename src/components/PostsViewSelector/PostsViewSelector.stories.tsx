import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostsViewSelector, {
  PostsViewSelectorProps,
} from "@/components/PostsViewSelector";

export default {
  title: "Components/PostsViewSelector",
  component: PostsViewSelector,
} as ComponentMeta<typeof PostsViewSelector>;

export const Default: ComponentStory<typeof PostsViewSelector> = (
  args: PostsViewSelectorProps
) => <PostsViewSelector {...args} />;

Default.args = {};
