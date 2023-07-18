import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ControlledDialogProps } from "@/types";
import TagsBox from "@/components/ui/TagsBox";
import styles from "./styles.module.scss";
import ModalTransition from "../ui/ModalTransition";
import Bit from "../ui/Bit";
import EnterKeyIcon from "@mui/icons-material/KeyboardReturn";
import ArrowKeysIcon from "@mui/icons-material/SwapVert";
import SearchResultItem, { SearchResultItemProps } from "./SearchResultItem";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from "@mui/material";
import { Tag } from "@/models/Post";
import useFetch from "@/shared/hooks/useFetch";
import {
  FormEvent,
  KeyboardEvent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
// @ts-ignore
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";

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
    <h4 className="text--big-bold text--content mb--2">
      More interesting topics
    </h4>
    {loading ? (
      <Skeleton variant="rounded" animation="wave" width={200} height={32} />
    ) : (
      <TagsBox tags={tags} />
    )}
  </div>
);

const SearchBoxResults = ({
  results,
  loading,
  error,
  term,
  selectedIndex,
  onClick,
}: {
  results?: SearchResultItemProps[];
  loading: boolean;
  error?: Error;
  term: string;
  selectedIndex: number;
  onClick: () => void;
}) => {
  const CenterContent = ({ children }: PropsWithChildren) => (
    <div className="text--center text--content flex--center-column">
      {children}
    </div>
  );

  if (!term)
    return (
      <CenterContent>
        <p className="text--big py--4">Looking for something amazing 🪐</p>
      </CenterContent>
    );

  if (error)
    <CenterContent>
      <p className="text--big py--4">
        Something is wrong, please try agai or reload 👾✖️
      </p>
    </CenterContent>;

  if (!results || results?.length <= 0)
    return (
      <CenterContent>
        <p className="text--big py--4">No results found 🛸</p>
      </CenterContent>
    );

  if (loading)
    return (
      <CenterContent>
        <Skeleton
          variant="rounded"
          animation="wave"
          height={64}
          className="my--2 w--full"
        />
      </CenterContent>
    );

  return (
    <ul className={`${styles.searchBox_results} w--full my--3`} role="listbox">
      {results.map((item, index) => (
        <SearchResultItem
          key={item.title}
          {...item}
          isSelected={index === selectedIndex}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

const SearchBoxSearcher = ({
  onSearch,
}: {
  onSearch: (e: FormEvent) => void;
}) => (
  <>
    <input
      type="text"
      role="searchbox"
      placeholder="Search"
      className={`pl--3 ${styles.searchBox_input} bg--lead text--content text--md`}
      onInput={onSearch}
    />
    <Bit variant="highlight"> Esc </Bit>
  </>
);

export default function SearchBox({ isOpen, onClose }: SearchBoxProps) {
  // FIXME: use breakpoint as variables from scss
  // TODO: create unit tests
  const [term, setTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fullScreen = useMediaQuery("(max-width:992px)", { noSsr: true });
  const router = useRouter();

  const [tagsLoading, _tagsError, tags] = useFetch<Tag[]>("/api/tags");
  const [searchLoading, searchError, searchResults] = useFetch<
    SearchResultItemProps[]
  >(`/api/search?term=${term}`);

  const searcHandler = debounce((e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setTerm(encodeURIComponent(input.value));
  }, 300);

  const onResultClickHandler = useCallback(() => {
    onClose();
  }, [onClose]);

  const onKeyDownHandler = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (!searchResults) return;

      const lastItemIndex = searchResults?.length - 1;

      switch (e.key.toLowerCase()) {
        case "arrowup":
          setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : 0);
          break;
        case "arrowdown":
          setSelectedIndex(
            selectedIndex < lastItemIndex ? selectedIndex + 1 : lastItemIndex
          );
          break;
        case "enter":
          e.preventDefault();
          router.replace(searchResults[selectedIndex].url);
          onClose();
          break;
        case "escape":
          onClose();
          break;
      }
    },
    [router, searchResults, selectedIndex, onClose]
  );

  // TODO: create story fot this
  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={onClose}
      TransitionComponent={ModalTransition}
      aria-labelledby="Search box"
      maxWidth="sm"
      fullWidth
      scroll="paper"
      onKeyDownCapture={onKeyDownHandler}
    >
      <DialogTitle className={`bg--lead ${styles.searchBox_header} pr--3`}>
        <SearchBoxSearcher onSearch={searcHandler} />
      </DialogTitle>
      <DialogContent
        className={`bg--content py--2 ${styles.searchBox_content}`}
      >
        <SearchBoxResults
          results={searchResults}
          loading={searchLoading}
          error={searchError}
          term={term}
          selectedIndex={selectedIndex}
          onClick={onResultClickHandler}
        />
        <SearchBoxTags loading={tagsLoading} tags={tags ?? []} />
      </DialogContent>
      <DialogActions
        className={`bg--lead px--3 py--1 flex text--content ${styles.searchBox_actions}`}
      >
        <SearchBoxActions />
      </DialogActions>
    </Dialog>
  );
}
