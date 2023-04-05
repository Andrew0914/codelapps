"use client";
import TheNav from "../TheNav";
import Shortcuts from "../Shortcuts";
import SearchButton from "../ui/SearchButton";
import SwitchButton from "../ui/SwitchButton";
import styles from "./styles.module.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

// TODO: Take out texts from here to  dicitonary
export default function TheHeader() {
  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className={`flex--sb-center ${styles.theHeader_content}`}>
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeader_actions}`}>
          <SearchButton className={styles.theHeader_searchbar} />
          <TheNav className={styles.theHeader_nav} />
          <span className={styles.theHeader_themeSwitcher}>
            <SwitchButton
              size="small"
              iconOn={<LightModeIcon fontSize="small" />}
              iconOff={<ModeNightIcon fontSize="small" />}
            />
          </span>
          <Shortcuts className={styles.theHeader_shortcuts} />
        </div>
      </div>
    </header>
  );
}
