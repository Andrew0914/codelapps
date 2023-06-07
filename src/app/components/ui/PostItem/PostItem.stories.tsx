import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostItem, { PostItemProps } from "@/app/components/ui/PostItem";

export default {
  title: "Components/ui/PostItem",
  component: PostItem,
} as ComponentMeta<typeof PostItem>;

export const Default: ComponentStory<typeof PostItem> = (
  args: PostItemProps
) => <PostItem {...args} />;

Default.args = {
  title: "This is a long post title to be render in the post item",
  excerpt:
    "The width property represents the rendered width in pixels, so it will affect how large the image appears.",
  date: "25 May 2023",
  author: "Andrew GM",
  thumbnail:
    "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  avatar:
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
};
