import ArticleIcon from "@mui/icons-material/Article";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import styles from "./styles.module.scss";

interface SearchResultItemProps {
  variant: "portfolio" | "post";
  title: string;
  description: string;
}

export default function SearchResultItem(props: SearchResultItemProps) {
  return (
    <li
      className={`text--content flex bg--lead p--1 round mb--1 ${styles.searchBox_resultItem}`}
    >
      {props.variant === "post" ? <ArticleIcon /> : <BusinessCenterIcon />}
      <div className="pl--1">
        <h5 className="header--5 text--content">{props.title}</h5>
        <p className="text--content text--small">{props.description}</p>
      </div>
    </li>
  );
}
