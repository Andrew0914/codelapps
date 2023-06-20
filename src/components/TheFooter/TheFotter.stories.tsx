import { ComponentMeta, ComponentStory } from "@storybook/react";

import TheFooter from "@/components/TheFooter";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/TheFooter",
  component: TheFooter,
} as ComponentMeta<typeof TheFooter>;

export const Default: ComponentStory<typeof TheFooter> = () => <TheFooter />;
