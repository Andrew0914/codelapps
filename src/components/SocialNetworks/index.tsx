"use client";

import styles from "./styles.module.scss";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import TiktokIcon from "./assets/tiktok_icon.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

interface Shortcut {
  name: string;
  url: string;
  icon: JSX.Element;
}

const shortcuts: Shortcut[] = [
  {
    name: "twitter",
    url: "https://twitter.com/Andrew_GMx",
    icon: <TwitterIcon className={styles.shortcuts_icon} fontSize="small" />,
  },
  {
    name: "github",
    url: "https://github.com/Andrew0914",
    icon: <GitHubIcon className={styles.shortcuts_icon} fontSize="small" />,
  },
  {
    name: "tiktok",
    url: "https://www.tiktok.com/@andrewalangmx",
    icon: <TiktokIcon className={styles.shortcuts_tiktok} />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/andrew_gmx/",
    icon: <InstagramIcon className={styles.shortcuts_icon} fontSize="small" />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/AndrewGMx",
    icon: <FacebookIcon className={styles.shortcuts_icon} fontSize="small" />,
  },
];

interface SocialNetworksProps {
  className?: string;
  mode: "full" | "short";
}

export default function SocialNetworks({
  mode = "full",
  className,
}: SocialNetworksProps) {
  return (
    <nav className={className}>
      <ul className={`inline--list ${styles.shortcuts_list}`}>
        {shortcuts
          .slice(0, mode === "short" ? 2 : shortcuts.length)
          .map((shortcut) => (
            <li key={shortcut.name}>
              <a href={shortcut.url} target="_blank">
                {shortcut.icon}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
}
