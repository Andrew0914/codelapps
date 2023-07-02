import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioIcon, {
  RadioIconGroup,
  RadioIconGroupProps,
} from "@/components/ui/RadioIcon";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

export default {
  title: "Components/ui/RadioIconGroup",
  component: RadioIconGroup,
  argTypes: { onSelect: { action: "onSelect" } },
} as ComponentMeta<typeof RadioIconGroup>;

export const Default: ComponentStory<typeof RadioIconGroup> = (
  args: RadioIconGroupProps
) => (
  <RadioIconGroup {...args}>
    <RadioIcon value="grid">
      <GridViewIcon fontSize="small" />
    </RadioIcon>
    <RadioIcon value="rows">
      <TableRowsIcon fontSize="small" />
    </RadioIcon>
  </RadioIconGroup>
);

Default.args = {
  initialValue: "rows",
};
