import { ComponentMeta, ComponentStory } from "@storybook/react";
import SectionTitle, {
  SectionTitleProps,
} from "@/app/components/ui/SectionTitle";

export default {
  title: "Components/ui/SectionTitle",
  component: SectionTitle,
} as ComponentMeta<typeof SectionTitle>;

export const Default: ComponentStory<typeof SectionTitle> = (
  args: SectionTitleProps
) => <SectionTitle>{args.children}</SectionTitle>;

Default.args = {
  children: "Codelapps web page",
};
