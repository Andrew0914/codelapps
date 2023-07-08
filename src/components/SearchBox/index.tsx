import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ControlledDialogProps } from "@/types";
import useControlledDialog from "@/shared/hooks/useControlledDialog";
import TagsBox from "@/components/ui/TagsBox";
import styles from "./styles.module.scss";
import ModalTransition from "../ui/ModalTransition";

export interface SearchBoxProps extends ControlledDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const fullScreen = useMediaQuery("(max-width:992px)", { noSsr: true });
  const { dialogIsOpen, onCloseHandler } = useControlledDialog(props);
  // TODO: create story fot this
  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialogIsOpen}
      onClose={onCloseHandler}
      TransitionComponent={ModalTransition}
      aria-labelledby="Search box"
    >
      <div className={`bg--content ${styles.searchbox}`}>
        <div className="bg--lead">
          <input type="text" placeholder="search" />
          <span>Esc</span>
        </div>

        <section className="bg--content p--3">
          <div>Search results</div>
          <TagsBox tags={[]} />
        </section>

        <footer className="bg--lead px--3 py--1">
          <span>Enter to select</span>
          <span>Arrowa to navigate</span>
          <span>Esc to close</span>
        </footer>
      </div>
    </Dialog>
  );
}
