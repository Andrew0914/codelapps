import { Tag as TagProps } from "@/models/Post";
import classNames from "classnames";
import { Locale } from "i18n-config";
import Tag from "../Tag";
import styles from "./styles.module.scss";
export interface TagsBoxProps {
  tags: TagProps[];
  className?: string;
}

export default function TagsBox(props: TagsBoxProps) {
  const classes = classNames(props.className, styles.tagsBox);
  return (
    <aside className={classes}>
      {props.tags.map((tag, index) => (
        <div key={`${index}-${tag.name}`} className="flex--center">
          <Tag {...tag}>{tag.name}</Tag>
        </div>
      ))}
    </aside>
  );
}
