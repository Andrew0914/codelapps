import ArticleIcon from "@mui/icons-material/Article";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Link from "next/link";
import styles from "./styles.module.scss";

export interface SearchResultItemProps {
  variant: "portfolio" | "post";
  title: string;
  description: string;
  url: string;
}

export default function SearchResultItem(props: SearchResultItemProps) {
  return (
    <li
      className={`text--content flex bg--lead p--1 round mb--1 shadow--y ${styles.searchBox_resultItem}`}
    >
      {props.variant === "post" ? <ArticleIcon /> : <BusinessCenterIcon />}
      <Link className="pl--1" href={props.url}>
        <h5 className="header--5 text--content">{props.title}</h5>
        <p className="text--content text--small">{props.description}</p>
      </Link>
    </li>
  );
}
