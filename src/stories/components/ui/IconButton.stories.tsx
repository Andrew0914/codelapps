import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import IconButton from "@/app/[lang]/components/ui/IconButton";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

export default {
  title: "Components/ui/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = () => (
  <IconButton onClick={action("onClick 💖")}>
    <LocalPizzaIcon />
  </IconButton>
);
