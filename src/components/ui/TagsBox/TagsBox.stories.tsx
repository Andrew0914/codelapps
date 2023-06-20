import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagsBox, { TagsBoxProps } from "@/components/ui/TagsBox";

export default {
  title: "Components/ui/TagsBox",
  component: TagsBox,
} as ComponentMeta<typeof TagsBox>;

export const Default: ComponentStory<typeof TagsBox> = (args: TagsBoxProps) => (
  <TagsBox {...args} />
);

Default.args = {
  tags: [
    { name: "Javascript", url: "/javascript" },
    { name: "PHP", url: "/php" },
    { name: "Design", url: "/design" },
    { name: "Java", url: "/java" },
    { name: "Elixir", url: "/Elixir" },
    { name: "Svg", url: "/Svg" },
    { name: "Flutter", url: "/flutter" },
  ],
};
