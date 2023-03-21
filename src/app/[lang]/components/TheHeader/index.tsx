"use client";
import TheNav from "../TheNav";
import styles from "./styles.module.scss";
import GetAppIcon from "@mui/icons-material/GetApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

// TODO: Use icon library or svg icons as components
// TODO: Take out texts from here to  dicitonary
// TODO: Create Search Bar component
// TODO: Create ThemeSwitcher component
// TODO: Verify if transforms navs and icons into their own components
export default function TheHeader() {
  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className={`flex--sb-center ${styles.theHeader_content}`}>
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeader_actions}`}>
          <span> SEARCH BAR </span>
          <span className={styles.themeSwitcher}> Dark/Light</span>
          <span className={styles.theHeaderIcons}>
            <ul>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <GitHubIcon />
              </li>
              <li>
                <GetAppIcon />
              </li>
            </ul>
          </span>
          <TheNav />
        </div>
      </div>
    </header>
  );
}
