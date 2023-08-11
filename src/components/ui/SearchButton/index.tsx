import LocaleContext from "@/shared/contexts/LocaleContext";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import styles from "./styles.module.scss";

interface SearchButtonProps {
  className?: string;
  onSearchButtonClick?: () => void;
}

export default function SearchButton(props: SearchButtonProps) {
  const { dictionary } = useContext(LocaleContext);

  return (
    <button
      className={`${props.className} ${styles.searchButton} flex--sb-center round`}
      onClick={props.onSearchButtonClick}
      aria-label="Da click o enter o presionar Ctrl + K para abrir el dialogo de búsqueda"
      title="Abrir dialogo de búsqueda"
    >
      <SearchIcon className="text--content" />
      <span className={`text--md text--content ${styles.searchButton_desktop}`}>
        {dictionary.searchBox.search}
      </span>
      <div
        className={`text--xsmall text--content round--sm ${styles.searchButton_bit} ${styles.searchButton_desktop}`}
      >
        {dictionary.searchBox.control}
      </div>
    </button>
  );
}
