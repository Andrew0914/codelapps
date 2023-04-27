import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagsBox, { TagsBoxProps } from "@/app/[lang]/components/ui/TagsBox";

export default {
  title: "Components/ui/TagsBox",
  component: TagsBox,
} as ComponentMeta<typeof TagsBox>;

export const Default: ComponentStory<typeof TagsBox> = (args: TagsBoxProps) => (
  <TagsBox {...args} />
);

Default.args = {
  tags: [
    { name: "Javascript", destiny: "/javascript" },
    { name: "PHP", destiny: "/php" },
    { name: "Design", destiny: "/design" },
    { name: "Java", destiny: "/java" },
    { name: "Elixir", destiny: "/Elixir" },
    { name: "Svg", destiny: "/Svg" },
    { name: "Flutter", destiny: "/flutter" },
  ],
};
