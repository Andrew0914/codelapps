import Button from "../components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import IconButton from "../components/ui/IconButton";
import MainTitle from "../components/ui/MainTitle";
import SwitchButton from "../components/ui/SwitchButton";
import { PropsWithChildren } from "react";

const textComponents = {
  h1: ({ children }: PropsWithChildren) => (
    <h1 className="heading--1 text--content">{children}</h1>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="heading--2 text--content">{children}</h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="heading--3 text--content">{children}</h3>
  ),
  h4: ({ children }: PropsWithChildren) => (
    <h4 className="heading--4 text--content">{children}</h4>
  ),
  h5: ({ children }: PropsWithChildren) => (
    <h5 className="heading--5 text--content">{children}</h5>
  ),
  h6: ({ children }: PropsWithChildren) => (
    <h6 className="heading--5 text--content">{children}</h6>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="text--md text--content">{children}</p>
  ),
};
const components = {
  ...textComponents,
  Button,
  a: Link,
  img: Image,
  IconButton,
  SwitchButton,
};

export default components;
