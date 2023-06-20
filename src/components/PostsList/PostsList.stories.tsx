import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostsList, { PostsListProps } from "@/components/PostsList";
import { PostItemProps } from "../ui/PostItem";

export default {
  title: "Components/PostsList",
  component: PostsList,
} as ComponentMeta<typeof PostsList>;

export const Default: ComponentStory<typeof PostsList> = (
  args: PostsListProps
) => <PostsList {...args} />;

const posts: PostItemProps[] = [
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar:
      "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    url: "http://codelapps.com",
  },
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias",
    excerpt: "Test de pruebas unitarias",
    author: "Andrew GM",
    avatar:
      "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1337&q=80",
    url: "http://codelapps.com",
  },
  {
    date: "05 May 2023",
    title: "Pruebas Unitarias muchas pruebas para ver que pasa",
    excerpt:
      "Test de pruebas unitarias Test de pruebas unitariasTest de pruebas unitarias",
    author: "Andrew GM",
    avatar:
      "https://images.unsplash.com/photo-1602514328225-24d95071ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1682685796766-0fddd3e480de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    url: "http://codelapps.com",
  },
];

Default.args = {
  posts,
};
