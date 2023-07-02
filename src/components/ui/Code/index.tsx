"use client";
import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { SyntaxHighlighterProps, Prism } from "react-syntax-highlighter";
import {
  materialDark,
  gruvboxDark,
  coldarkDark,
  atomDark,
  a11yDark,
  oneDark,
  oneLight,
  materialLight,
  gruvboxLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Combobox, ComboboxItem } from "../Combobox";

interface CodeProps extends SyntaxHighlighterProps {
  className?: string;
}

const themes = {
  materialDark,
  gruvboxDark,
  coldarkDark,
  atomDark,
  a11yDark,
  oneDark,
  oneLight,
  materialLight,
  gruvboxLight,
};

// TODO: Make storybook
export default function Code({ className, ...props }: CodeProps) {
  const [theme, setTheme] = useState<keyof typeof themes>("materialDark");

  const match = /language-(\w+)/.exec(className || "");

  const changeThemeHandler = useCallback((event: ChangeEvent) => {
    const selectTarget = event.target as HTMLSelectElement;

    setTheme(selectTarget.value as keyof typeof themes);
  }, []);

  const themesOptions: ComboboxItem[] = useMemo(
    () =>
      Object.keys(themes).map(
        (themeKey) =>
          ({
            name: themeKey,
            value: themeKey,
          } as ComboboxItem)
      ),
    []
  );

  return match ? (
    <div className="w--full">
      <div className="flex--end">
        <Combobox
          items={themesOptions}
          defaultValue={theme}
          onChange={changeThemeHandler}
        />
      </div>
      <div className="round--big w--full">
        <Prism
          language={match[1]}
          PreTag="div"
          {...props}
          style={themes[theme]}
          showLineNumbers={true}
          showInlineLineNumbers={true}
        />
      </div>
    </div>
  ) : (
    <code className={`${className} text--md`} {...props} />
  );
}
