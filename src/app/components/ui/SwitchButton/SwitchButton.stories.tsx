import { ComponentMeta, ComponentStory } from "@storybook/react";
import SwitchButton from "@/app/components/ui/SwitchButton";
import { action } from "@storybook/addon-actions";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export default {
  title: "Components/ui/SwitchButton",
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const handler = (isActive: boolean) => {
  const switchAction = action("onSwitch");
  switchAction(isActive);
  return switchAction;
};

export const Default: ComponentStory<typeof SwitchButton> = (props) => (
  <SwitchButton
    onSwitch={handler}
    iconOn={<LightModeIcon fontSize="small" />}
    iconOff={<ModeNightIcon fontSize="small" />}
    size={props.size}
  />
);

Default.args = {
  size: "medium",
};
