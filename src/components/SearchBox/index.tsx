import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ControlledDialogProps } from "@/types";
import useControlledDialog from "@/shared/hooks/useControlledDialog";
import TagsBox from "@/components/ui/TagsBox";
import styles from "./styles.module.scss";
import ModalTransition from "../ui/ModalTransition";
import Bit from "../ui/Bit";
import EnterKeyIcon from "@mui/icons-material/KeyboardReturn";
import ArrowKeysIcon from "@mui/icons-material/SwapVert";
import SearchResultItem from "./SearchResultItem";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";

export interface SearchBoxProps extends ControlledDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBox(props: SearchBoxProps) {
  // FIXME: use breakpoint as variables from scss
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
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogTitle className={`bg--lead ${styles.searchBox_header} pr--3`}>
        <input
          type="text"
          placeholder="Search"
          className={`pl--3 ${styles.searchBox_input} bg--lead text--content text--md`}
        />
        <Bit variant="highlight"> Esc </Bit>
      </DialogTitle>
      <DialogContent className={`bg--content ${styles.searchBox}`}>
        <section className={`bg--content py--2 ${styles.searchBox_content}`}>
          <div className="text--center text--content flex--center-column">
            <p className="text--big py--2">No results 🛸</p>
          </div>
          {/* <ul className={`${styles.searchBox_results} w--full`}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
              <SearchResultItem
                key={index}
                variant="portfolio"
                title="The real state of unit testing"
                description="Short description of post with"
              />
            ))}
          </ul> */}

          <div className="text--center">
            <h4 className="text--big-bold text--content mb--1">
              More interesting topics
            </h4>
            <TagsBox
              tags={[
                { name: "Javascript", url: "javascript" },
                { name: "Javascript", url: "javascript" },
                { name: "Javascript", url: "javascript" },
              ]}
            />
          </div>
        </section>
      </DialogContent>
      <DialogActions
        className={`bg--lead px--3 py--1 flex text--content ${styles.searchBox_actions}`}
      >
        <span className="flex--sb-center text--content text--small">
          <EnterKeyIcon fontSize="small" /> to select
        </span>
        <span className="flex--sb-center">
          <ArrowKeysIcon fontSize="small" /> to navigate
        </span>
        <span className="flex--sb-center">
          <Bit variant="highlight"> Esc </Bit> to close
        </span>
      </DialogActions>
    </Dialog>
  );
}
