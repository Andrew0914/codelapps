"use client";
import TheNav from "../TheNav";
import SocialNetworks from "../SocialNetworks";
import SearchButton from "../ui/SearchButton";
import SwitchButton from "../ui/SwitchButton";
import styles from "./styles.module.scss";
import IconButton from "../ui/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";

// TODO: Take out texts from here to  dicitonary
export default function TheHeader() {
  const changeTheme = (classTheme: "light" | "dark") => {
    document.querySelector("body")!.className = classTheme;
  };

  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className={`flex--sb-center ${styles.theHeader_content}`}>
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeader_actions}`}>
          <SearchButton className={styles.theHeader_searchbar} />
          <TheNav className={styles.theHeader_nav} />
          <IconButton className={styles.theHeader_hamburguer}>
            <MenuRoundedIcon />
          </IconButton>
          <span className={styles.theHeader_themeSwitcher}>
            <SwitchButton
              size="small"
              iconOn={<LightModeIcon fontSize="small" />}
              iconOff={<ModeNightIcon fontSize="small" />}
              onSwitch={(isActive: boolean) => {
                changeTheme(isActive ? "light" : "dark");
                return undefined;
              }}
            />
          </span>
          <SocialNetworks mode="short" className={styles.theHeader_shortcuts} />
          <IconButton>
            <DownloadRounded />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
