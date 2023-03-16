"use client";
import styles from "./styles.module.scss";
// TODO: Use icon library or svg icons as components
// TODO: Take out texts from here to  dicitonary
// TODO: Create Search Bar component
// TODO: Create ThemeSwitcher component
// TODO: Verify if transforms navs and icons into their own components
export default function TheHeader() {
  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className="flex--sb-center">
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeaderActions}`}>
          <span> SEARCH BAR </span>
          <nav className={styles.theHeaderNav}>
            <ul>
              <li className="text--big">Home</li>
              <li className="text--big">Blog</li>
              <li className="text--big">Portfolio</li>
            </ul>
          </nav>
          <span className={styles.themeSwitcher}> Dark/Light</span>
          <span className={styles.theHeaderIcons}>
            <ul>
              <li>🕊️</li>
              <li>🐙</li>
              <li>⬇️</li>
            </ul>
          </span>
          <span className={styles.theHamburgerButton}>🍔</span>
        </div>
      </div>
    </header>
  );
}
