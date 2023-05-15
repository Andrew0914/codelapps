"use client";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
import TheNav from "../TheNav";
import styles from "./styles.module.scss";
import SocialNetworks from "../SocialNetworks";

export default function TheFooter() {
  return (
    <footer className="bg--lead p--2">
      <section className="flex--sb-start">
        <div>
          <span className="text--small-bold">Sections</span>
          <TheNav layout="column" className="my--1" />
        </div>
        <div>
          <span className="text--small-bold">Follow me</span>
          <SocialNetworks mode="full" className="mt--1" />
        </div>
      </section>
      <hr className={`${styles.theFooter_divider} mb--1 mt--1`} />
      <section className="flex--sb-center">
        <span
          className={`flex--sb-center text--content text--xsmall ${styles.theFooter_metadata}`}
        >
          <CopyrightIcon fontSize="small" /> 2023 v1.0
        </span>
        <span
          className={`flex--sb-center text--content text--xsmall ${styles.theFooter_metadata}`}
        >
          Made with 💖 by
          <Link href="https://twitter.com/Andrew_GMx">@Andrew_GMx</Link>
        </span>
      </section>
    </footer>
  );
}
