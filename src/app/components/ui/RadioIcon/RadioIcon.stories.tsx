import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioIcon, { RadioIconProps } from "@/app/components/ui/RadioIcon";
import GridViewIcon from "@mui/icons-material/GridView";

export default {
  title: "Components/ui/RadioIcon",
  component: RadioIcon,
  argTypes: { onChange: { action: "onChange" } },
} as ComponentMeta<typeof RadioIcon>;

export const Default: ComponentStory<typeof RadioIcon> = (
  args: RadioIconProps
) => (
  <RadioIcon {...args}>
    <GridViewIcon />
  </RadioIcon>
);

Default.args = {
  value: "grid",
  isChecked: true,
};
