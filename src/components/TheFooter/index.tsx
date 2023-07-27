"use client";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
import TheNav from "../TheNav";
import styles from "./styles.module.scss";
import SocialNetworks from "../SocialNetworks";
import { useContext } from "react";
import LocaleContext from "@/shared/contexts/LocaleContext";

export default function TheFooter() {
  const { dictionary } = useContext(LocaleContext);
  return (
    <footer className="bg--lead">
      <div className="content py--2">
        <section className="flex--sb-start">
          <div>
            <span className="text--small-bold">
              {dictionary.footer.sections}
            </span>
            <TheNav layout="column" className="my--1" />
          </div>
          <div>
            <span className="text--small-bold">
              {dictionary.footer.followMe}
            </span>
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
            {dictionary.footer.madeWith}
            <Link href="https://twitter.com/Andrew_GMx">@Andrew_GMx</Link>
          </span>
        </section>
      </div>
    </footer>
  );
}
