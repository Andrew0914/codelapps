import styles from "./styles.module.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";

interface TheNavProps {
  className?: string;
  onHamburguerClick?: () => void;
}

interface RouteItem {
  name: string;
  route: string;
}

export default function TheNav(props: TheNavProps) {
  const routes: RouteItem[] = [
    { name: "Home", route: "/" },
    { name: "Blog", route: "/blog" },
    { name: "Portfolio", route: "/porfolio" },
  ];

  return (
    <nav className={props.className}>
      <ul className={styles.theNav_inlineMenu}>
        {routes.map((routeItem) => (
          <li key={routeItem.name}>
            <Link href={routeItem.route} className="text--md text--link">
              {routeItem.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={`flex--center round--sm ${styles.theNav_hamburguerButton}`}
        onClick={props.onHamburguerClick}
      >
        <MenuRoundedIcon />
      </button>
    </nav>
  );
}
