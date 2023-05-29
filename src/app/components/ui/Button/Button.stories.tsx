import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "@/app/components/ui/Button";

export default {
  title: "Components/ui/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  children: "Click me",
};
