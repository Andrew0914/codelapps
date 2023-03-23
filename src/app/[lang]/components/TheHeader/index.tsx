"use client";
import TheNav from "../TheNav";
import Shortcuts from "../Shortcuts";
import styles from "./styles.module.scss";

// TODO: Take out texts from here to  dicitonary
// TODO: Create Search Bar component
// TODO: Create ThemeSwitcher component
export default function TheHeader() {
  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className={`flex--sb-center ${styles.theHeader_content}`}>
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeader_actions}`}>
          <span className={styles.theHeader_searchbar}> SEARCH BAR </span>
          <TheNav className={styles.theHeader_nav} />
          <span className={styles.theHeader_themeSwitcher}> Dark/Light</span>
          <Shortcuts className={styles.theHeader_shortcuts} />
        </div>
      </div>
    </header>
  );
}
