import { StoryFn, Meta } from "@storybook/react";
import AuthorBadge from "@/components/ui/AuthorBadge";
import { Author } from "@/models/Post";

export default {
  title: "Components/ui/AuthorBadge",
  component: AuthorBadge,
} as Meta<typeof AuthorBadge>;

export const Default: StoryFn<typeof AuthorBadge> = (args: Author) => (
  <AuthorBadge {...args} />
);

Default.args = {
  name: "Andrew GM",
  avatarUrl:
    "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
};
