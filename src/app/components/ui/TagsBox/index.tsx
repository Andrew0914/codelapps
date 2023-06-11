import { Tag as TagProps } from "@/app/models/Post";
import classNames from "classnames";
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
          <Tag href={tag.url}>{tag.name}</Tag>
        </div>
      ))}
    </aside>
  );
}
