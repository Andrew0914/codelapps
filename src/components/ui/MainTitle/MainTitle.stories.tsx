import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainTitle, { MainTitleProps } from "@/components/ui/MainTitle";

export default {
  title: "Components/ui/MainTitle",
  component: MainTitle,
} as ComponentMeta<typeof MainTitle>;

export const Default: ComponentStory<typeof MainTitle> = (
  args: MainTitleProps
) => <MainTitle>{args.children}</MainTitle>;

Default.args = {
  children: "Codelapps web page ",
};
