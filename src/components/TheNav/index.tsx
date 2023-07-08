import styles from "./styles.module.scss";
import Link from "next/link";

import { useState } from "react";

interface TheNavProps {
  className?: string;
  layout?: "column" | "row";
}

interface RouteItem {
  name: string;
  route: string;
}

export default function TheNav({ className, layout = "row" }: TheNavProps) {
  const routes: RouteItem[] = [
    { name: "Home", route: "/" },
    { name: "Blog", route: "/blog" },
    { name: "Portfolio", route: "/porfolio" },
  ];

  return (
    <nav className={className}>
      <ul className={`${styles.theNav_listMenu} ${styles[layout]}`}>
        {routes.map((routeItem) => (
          <li key={routeItem.name}>
            <Link href={routeItem.route} className="text--md text--link">
              {routeItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
