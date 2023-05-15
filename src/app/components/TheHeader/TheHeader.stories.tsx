import { ComponentMeta, ComponentStory } from "@storybook/react";

import TheHeader from "@/app/components/TheHeader";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TheHeader",
  component: TheHeader,
} as ComponentMeta<typeof TheHeader>;

export const Default: ComponentStory<typeof TheHeader> = () => <TheHeader />;
