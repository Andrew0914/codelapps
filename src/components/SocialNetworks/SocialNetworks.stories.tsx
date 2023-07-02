import { ComponentMeta, ComponentStory } from "@storybook/react";
import SocialNetworks from "@/components/SocialNetworks";

export default {
  title: "Components/SocialNetworks",
  component: SocialNetworks,
} as ComponentMeta<typeof SocialNetworks>;

export const Default: ComponentStory<typeof SocialNetworks> = (props) => (
  <SocialNetworks {...props} />
);

Default.args = {
  mode: "full",
};
