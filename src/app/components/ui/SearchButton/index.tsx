import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.scss";

interface SearchButtonProps {
  className?: string;
  onSearchButtonClick?: () => void;
}

export default function SearchButton(props: SearchButtonProps) {
  return (
    <button
      className={`${props.className} ${styles.searchButton} flex--sb-center round`}
      onClick={props.onSearchButtonClick}
    >
      <SearchIcon className="text--content" />
      <span className={`text--md text--content ${styles.searchButton_desktop}`}>
        Search
      </span>
      <div
        className={`text--xsmall text--content round--sm ${styles.searchButton_bit} ${styles.searchButton_desktop}`}
      >
        Ctrl K
      </div>
    </button>
  );
}
