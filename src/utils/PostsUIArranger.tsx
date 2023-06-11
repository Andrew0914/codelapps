import Button from "../components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import IconButton from "../components/ui/IconButton";
import MainTitle from "../components/ui/MainTitle";
import SwitchButton from "../components/ui/SwitchButton";
import { PropsWithChildren } from "react";
import Code from "@/app/components/ui/Code";

const textComponents = {
  h1: ({ children }: PropsWithChildren) => (
    <h1 className="header--1 text--content my--1">{children}</h1>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <h2 className="header--2 text--content my--1">{children}</h2>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <h3 className="header--3 text--content my--1">{children}</h3>
  ),
  h4: ({ children }: PropsWithChildren) => (
    <h4 className="header--4 text--content my--1">{children}</h4>
  ),
  h5: ({ children }: PropsWithChildren) => (
    <h5 className="header--5 text--content my--1">{children}</h5>
  ),
  h6: ({ children }: PropsWithChildren) => (
    <h6 className="header--5 text--content my--1">{children}</h6>
  ),
  p: ({ children }: PropsWithChildren) => (
    <p className="text--md text--content my--2">{children}</p>
  ),
};
const components = {
  ...textComponents,
  Button,
  a: Link,
  Image,
  code: Code,
  IconButton,
  SwitchButton,
};

export default components;
