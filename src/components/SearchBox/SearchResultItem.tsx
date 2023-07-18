import ArticleIcon from "@mui/icons-material/Article";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import classNames from "classnames";
import Link from "next/link";
import styles from "./styles.module.scss";

export interface SearchResultItemProps {
  variant: "portfolio" | "post";
  title: string;
  description: string;
  url: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function SearchResultItem(props: SearchResultItemProps) {
  const classes = classNames(
    "text--content flex bg--lead p--1 round mb--1 shadow--y",
    styles.searchBox_resultItem,
    { [styles.searchBox_resultItem_selected]: props.isSelected === true }
  );

  const clickHandler = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <li className={classes}>
      {props.variant === "post" ? <ArticleIcon /> : <BusinessCenterIcon />}
      <Link className="pl--1" href={props.url} onClick={clickHandler}>
        <h5 className="header--5 text--content">{props.title}</h5>
        <p className="text--content text--small">{props.description}</p>
      </Link>
    </li>
  );
}
