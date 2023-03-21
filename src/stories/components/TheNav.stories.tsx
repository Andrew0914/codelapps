import { ComponentMeta, ComponentStory } from "@storybook/react";

import TheNav from "@/app/[lang]/components/TheNav";

export default {
  title: "Components/TheNav",
  component: TheNav,
} as ComponentMeta<typeof TheNav>;

export const Default: ComponentStory<typeof TheNav> = () => <TheNav />;
