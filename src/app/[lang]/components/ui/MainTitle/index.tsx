import { PropsWithChildren } from "react";

export interface MainTitleProps extends PropsWithChildren {
  children: string;
}

export default function MainTitle(props: MainTitleProps) {
  return <h1 className="header--0"> {props.children} </h1>;
}
