"use client";
import TheNav from "../TheNav";
import SocialNetworks from "../SocialNetworks";
import SearchButton from "../ui/SearchButton";
import styles from "./styles.module.scss";
import IconButton from "../ui/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TheMobileNav from "@/components/TheMobileNav";
import { useState } from "react";
import ThemSwitcher from "../ThemeSwitcher";
import SearchBox from "../SearchBox";

// TODO: Take out texts from here to  dicitonary
export default function TheHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchBoxIsOpen, setSearchBoxIsOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const onMobileCloseHandler = () => {
    setMobileNavOpen(false);
  };

  const onSearchBoxCloseHandler = () => {
    setSearchBoxIsOpen(false);
  };

  const onSearchButtonClickHandler = () => {
    setSearchBoxIsOpen(!searchBoxIsOpen);
  };

  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className={`flex--sb-center ${styles.theHeader_content} content`}>
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeader_actions}`}>
          <SearchButton
            className={styles.theHeader_searchbar}
            onSearchButtonClick={onSearchButtonClickHandler}
          />
          <SearchBox
            isOpen={searchBoxIsOpen}
            onClose={onSearchBoxCloseHandler}
          />
          <TheNav className={styles.theHeader_nav} />
          <TheMobileNav isOpen={mobileNavOpen} onClose={onMobileCloseHandler} />
          <IconButton
            className={styles.theHeader_hamburguer}
            onClick={toggleMobileNav}
          >
            <MenuRoundedIcon />
          </IconButton>
          <span className={styles.theHeader_themeSwitcher}>
            <ThemSwitcher />
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
