"use client";
import { PropsWithChildren } from "react";
import LocaleContext, { LocaleContextValues } from "./LocaleContext";

interface LocaleContextProviderProps
  extends PropsWithChildren,
    LocaleContextValues {}
export default function LocaleContextProvider(
  props: LocaleContextProviderProps
) {
  return (
    <LocaleContext.Provider
      value={{ lang: props.lang, dictionary: props.dictionary }}
    >
      {props.children}
    </LocaleContext.Provider>
  );
}
