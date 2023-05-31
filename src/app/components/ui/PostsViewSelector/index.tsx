"use client";
import RadioIcon, { RadioIconGroup } from "../RadioIcon";
import { GridViewRounded, TableRows } from "@mui/icons-material";
import styles from "./styles.module.scss";

export default function PostsViewSelector() {
  return (
    <RadioIconGroup className={styles.postsViewSelector} initialValue="rows">
      <RadioIcon value="grid">
        <GridViewRounded />
      </RadioIcon>
      <RadioIcon value="rows">
        <TableRows />
      </RadioIcon>
    </RadioIconGroup>
  );
}
