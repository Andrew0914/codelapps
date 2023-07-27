"use client";
import TheNav from "../TheNav";
import SocialNetworks from "../SocialNetworks";
import SearchButton from "../ui/SearchButton";
import styles from "./styles.module.scss";
import IconButton from "../ui/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import TheMobileNav from "@/components/TheMobileNav";
import ThemSwitcher from "../ThemeSwitcher";
import SearchBox from "../SearchBox";
import useControlledDialog from "@/shared/hooks/useControlledDialog";

export default function TheHeader() {
  const {
    dialogIsOpen: searchBoxIsOpen,
    closeDialog: closeSearchBox,
    openDialog: openSearchBox,
  } = useControlledDialog();

  const {
    dialogIsOpen: mobileNavIsOpen,
    closeDialog: closeMobileNav,
    openDialog: openMobileNav,
  } = useControlledDialog();

  return (
    <header className={`shadow--y ${styles.theHeader}`}>
      <div className={`flex--sb-center ${styles.theHeader_content} content`}>
        {/* TODO: Go to home when click on codelapps */}
        <h1 className="text--big-bold text--content">🍕 Codelapps</h1>
        <div className={`flex--sb-center ${styles.theHeader_actions}`}>
          <SearchButton
            className={styles.theHeader_searchbar}
            onSearchButtonClick={openSearchBox}
          />
          <SearchBox isOpen={searchBoxIsOpen} onClose={closeSearchBox} />
          <TheNav className={styles.theHeader_nav} />
          <TheMobileNav isOpen={mobileNavIsOpen} onClose={closeMobileNav} />
          <IconButton
            className={styles.theHeader_hamburguer}
            onClick={openMobileNav}
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
