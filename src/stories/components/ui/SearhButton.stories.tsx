import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchButton from "@/app/[lang]/components/ui/SearchButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ui/SearchButton",
  component: SearchButton,
} as ComponentMeta<typeof SearchButton>;

export const Default: ComponentStory<typeof SearchButton> = () => (
  <SearchButton onSearchButtonClick={action("onSearchButtonClick 🔎")} />
);
