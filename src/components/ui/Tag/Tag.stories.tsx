import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag, { TagProps } from "@/components/ui/Tag";

export default {
  title: "Components/ui/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: ComponentStory<typeof Tag> = (args: TagProps) => (
  <Tag {...args}>{args.children}</Tag>
);

Default.args = {
  children: "Javascript",
  url: "/javascript",
  name: "Javascript",
};
