import styles from "./styles.module.scss";
import Link from "next/link";

import { useContext, useState } from "react";
import LocaleContext from "@/shared/contexts/LocaleContext";

interface TheNavProps {
  className?: string;
  layout?: "column" | "row";
}

interface RouteItem {
  name: string;
  route: string;
}

export default function TheNav({ className, layout = "row" }: TheNavProps) {
  const { dictionary } = useContext(LocaleContext);

  const routes: RouteItem[] = [
    { name: dictionary.navigation.routes.home, route: "/" },
    { name: dictionary.navigation.routes.blog, route: "/blog" },
    { name: dictionary.navigation.routes.portfolio, route: "/porfolio" },
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
