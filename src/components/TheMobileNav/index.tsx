import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import {
  forwardRef,
  ReactElement,
  Ref,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/CloseRounded";
import TheNav from "../TheNav";
import ThemSwitcher from "../ThemeSwitcher";
import SocialNetworks from "../SocialNetworks";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import { ControlledDialogProps } from "@/types";
import useControlledDialog from "@/shared/hooks/useControlledDialog";
import ModalTransition from "../ui/ModalTransition";

interface TheMobileNavProps extends ControlledDialogProps {}

export default function TheMobileNav({ onClose, isOpen }: TheMobileNavProps) {
  const { dialogIsOpen, onCloseHandler } = useControlledDialog({
    onClose,
    isOpen,
  });

  return (
    <Dialog
      fullScreen
      open={dialogIsOpen}
      TransitionComponent={ModalTransition}
    >
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
            <IconButton onClick={onCloseHandler}>
              <CloseIcon className="text--content" fontSize="large" />
            </IconButton>
          </div>
        </header>
        <section className={`p--2 flex--center-column`}>
          <TheNav layout="column" className="text--center" />
          <span className="bg--content mt--4 p--1 round">
            <span className="text--md text--content mr--1">Appereance</span>
            <ThemSwitcher />
          </span>
          <SocialNetworks mode="full" className="mt--4" />
        </section>
        {/* TODO: implement PWA */}
        <Button className="m--2">Download PWA</Button>
      </div>
    </Dialog>
  );
}
