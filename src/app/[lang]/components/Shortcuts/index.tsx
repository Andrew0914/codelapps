"use client";

import styles from "./styles.module.scss";
import DownloadIcon from "@mui/icons-material/DownloadSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import TiktokIcon from "./assets/tiktok_icon.svg";
import Link from "next/link";

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
    name: "dowload",
    url: "https://github.com/Andrew0914",
    icon: (
      <DownloadIcon
        className={styles.shortcuts_icon}
        fontSize="small"
        viewBox="0 0 22 20"
      />
    ),
  },
];

interface ShortcutsProps {
  className?: string;
}

export default function Shortcuts(props: ShortcutsProps) {
  return (
    <nav className={props.className}>
      <ul className={`inline--list ${styles.shortcuts_list}`}>
        {shortcuts.map((shortcut) => (
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
