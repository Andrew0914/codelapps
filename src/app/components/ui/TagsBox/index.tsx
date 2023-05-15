import Tag from "../Tag";
import styles from "./styles.module.scss";

export interface TagContent {
  name: string;
  destiny: string;
}

export interface TagsBoxProps {
  tags: TagContent[];
}

export default function TagsBox(props: TagsBoxProps) {
  return (
    <aside className={styles.tagsBox}>
      {props.tags.map((tag, index) => (
        <div key={`${index}-${tag.name}`} className="flex--center">
          <Tag href={tag.destiny}>{tag.name}</Tag>
        </div>
      ))}
    </aside>
  );
}
