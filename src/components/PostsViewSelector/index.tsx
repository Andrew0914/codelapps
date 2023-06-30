"use client";
import RadioIcon, { RadioIconGroup } from "../ui/RadioIcon";
import { GridViewRounded, TableRows } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { useCallback } from "react";

export interface PostsViewSelectorProps {
  onPostsViewMode: (mode: "grid" | "rows") => void;
  className?: string;
}

export default function PostsViewSelector({
  onPostsViewMode,
  className,
}: PostsViewSelectorProps) {
  const selectHandler = useCallback(
    (value: string | number) => {
      if (value === "grid" || value === "rows") onPostsViewMode(value);
    },
    [onPostsViewMode]
  );
  // TODO: add ordering behaviour Older | Newer
  return (
    <RadioIconGroup
      className={`${styles.postsViewSelector}  ${className}`}
      initialValue="rows"
      onSelect={selectHandler}
    >
      <RadioIcon value="grid">
        <GridViewRounded />
      </RadioIcon>
      <RadioIcon value="rows">
        <TableRows />
      </RadioIcon>
    </RadioIconGroup>
  );
}
