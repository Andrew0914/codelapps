import { ComponentMeta, ComponentStory } from "@storybook/react";
import Shortcuts from "@/app/[lang]/components/Shortcuts";

export default {
  title: "Components/Shortcuts",
  component: Shortcuts,
} as ComponentMeta<typeof Shortcuts>;

export const Default: ComponentStory<typeof Shortcuts> = () => <Shortcuts />;
