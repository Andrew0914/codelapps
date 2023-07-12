"use client";
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
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from "@mui/material";
import { Tag } from "@/models/Post";
import useFetch from "@/shared/hooks/useFetch";

export interface SearchBoxProps extends ControlledDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBoxActions = () => (
  <>
    <span className="flex--sb-center text--content text--small">
      <EnterKeyIcon fontSize="small" /> to select
    </span>
    <span className="flex--sb-center">
      <ArrowKeysIcon fontSize="small" /> to navigate
    </span>
    <span className="flex--sb-center">
      <Bit variant="highlight"> Esc </Bit> to close
    </span>
  </>
);

const SearchBoxTags = ({
  tags,
  loading,
}: {
  tags: Tag[];
  loading: boolean;
}) => (
  <div className="text--center text--center flex--center-column">
    <h4 className="text--big-bold text--content mb--1">
      More interesting topics
    </h4>
    {loading ? (
      <Skeleton variant="rectangular" width={200} height={40} />
    ) : (
      <TagsBox tags={tags} />
    )}
  </div>
);

const SearchBoxResults = () => (
  <>
    <div className="text--center text--content flex--center-column">
      <p className="text--big py--2">Looking for something amazing 🛸</p>
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
  </>
);

const SearchBoxSearcher = () => (
  <>
    <input
      type="text"
      placeholder="Search"
      className={`pl--3 ${styles.searchBox_input} bg--lead text--content text--md`}
    />
    <Bit variant="highlight"> Esc </Bit>
  </>
);
export default function SearchBox(props: SearchBoxProps) {
  // FIXME: use breakpoint as variables from scss
  const fullScreen = useMediaQuery("(max-width:992px)", { noSsr: true });
  const { dialogIsOpen, onCloseHandler } = useControlledDialog(props);

  const [tagsLoading, _tagsError, tags] = useFetch<Tag[]>("api/tags");

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
        <SearchBoxSearcher />
      </DialogTitle>
      <DialogContent className={`bg--content ${styles.searchBox}`}>
        <section className={`bg--content py--2 ${styles.searchBox_content}`}>
          <SearchBoxResults />

          <SearchBoxTags loading={tagsLoading} tags={tags ?? []} />
        </section>
      </DialogContent>
      <DialogActions
        className={`bg--lead px--3 py--1 flex text--content ${styles.searchBox_actions}`}
      >
        <SearchBoxActions />
      </DialogActions>
    </Dialog>
  );
}
