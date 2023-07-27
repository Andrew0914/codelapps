"use client";
import RadioIcon, { RadioIconGroup } from "../ui/RadioIcon";
import { GridViewRounded, TableRows } from "@mui/icons-material";
import styles from "./styles.module.scss";
import { ChangeEvent, useCallback, useMemo, useState, useContext } from "react";
import { Combobox, ComboboxItem } from "../ui/Combobox";
import LocaleContext from "@/shared/contexts/LocaleContext";

export interface PostsViewSelectorProps {
  onPostsViewMode?: (mode: "grid" | "rows") => void;
  onOrderChange?: (order: "newest" | "oldest") => void;
  shouldShowFilters?: boolean;
  className?: string;
}

export default function PostsViewSelector({
  onPostsViewMode,
  className,
  onOrderChange,
  shouldShowFilters,
}: PostsViewSelectorProps) {
  const [order, setOrder] = useState<"newest" | "oldest">("newest");
  const { dictionary } = useContext(LocaleContext);

  const orderOptions: ComboboxItem[] = useMemo(
    () => [
      { name: dictionary.post.filters.newest, value: "newest" },
      { name: dictionary.post.filters.oldest, value: "oldest" },
    ],
    []
  );

  const selectViewModeHandler = useCallback(
    (value: string | number) => {
      if (onPostsViewMode && (value === "grid" || value === "rows"))
        onPostsViewMode(value);
    },
    [onPostsViewMode]
  );

  const changeOderHandler = useCallback(
    (event: ChangeEvent) => {
      const selectTarget = event.target as HTMLSelectElement;
      const newOrder = selectTarget.value as "newest" | "oldest";
      setOrder(newOrder);
      if (onOrderChange) onOrderChange(newOrder);
    },
    [onOrderChange]
  );

  return (
    <div className="flex">
      {shouldShowFilters && (
        <Combobox
          items={orderOptions}
          defaultValue="newest"
          onChange={changeOderHandler}
          className="mr--2"
        />
      )}

      <RadioIconGroup
        className={`${styles.postsViewSelector}  ${className}`}
        initialValue="rows"
        onSelect={selectViewModeHandler}
      >
        <RadioIcon value="grid">
          <GridViewRounded />
        </RadioIcon>
        <RadioIcon value="rows">
          <TableRows />
        </RadioIcon>
      </RadioIconGroup>
    </div>
  );
}
