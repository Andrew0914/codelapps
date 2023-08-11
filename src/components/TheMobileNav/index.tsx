import Dialog from "@mui/material/Dialog";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/CloseRounded";
import TheNav from "../TheNav";
import ThemSwitcher from "../ThemeSwitcher";
import SocialNetworks from "../SocialNetworks";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import { ControlledDialogProps } from "@/types";
import ModalTransition from "../ui/ModalTransition";
import { useContext } from "react";
import LocaleContext from "@/shared/contexts/LocaleContext";

interface TheMobileNavProps extends ControlledDialogProps {}

export default function TheMobileNav({ onClose, isOpen }: TheMobileNavProps) {
  const { dictionary } = useContext(LocaleContext);

  return (
    <Dialog fullScreen open={isOpen} TransitionComponent={ModalTransition}>
      <div className={`${styles.navMobile} bg--lead`}>
        <header
          className={`bg--content flex--sb-center p--2 ${styles.navMobile_header}`}
        >
          <h1 className="text--content text--big-bold">Codelapps 🍕</h1>
          <div>
            <IconButton>
              {/* TODO: implemen showing  serch window */}
              <SearchIcon className="text--content" fontSize="large" />
            </IconButton>
            <IconButton onClick={onClose}>
              <CloseIcon className="text--content" fontSize="large" />
            </IconButton>
          </div>
        </header>
        <section className={`p--2 flex--center-column`}>
          <TheNav layout="column" className="text--center" />
          <span className="bg--content mt--4 p--1 round">
            <span className="text--md text--content mr--1">
              {dictionary.navigation.appeareance}
            </span>
            <ThemSwitcher />
          </span>
          <SocialNetworks mode="full" className="mt--4" />
        </section>
        {/* TODO: implement PWA */}
        <Button
          className="m--2"
          aria-label={dictionary.navigation.donwload}
          title={dictionary.navigation.donwload}
        >
          {dictionary.navigation.donwload}
        </Button>
      </div>
    </Dialog>
  );
}
