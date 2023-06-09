"use client";
import React, { ChangeEvent, useCallback, useState } from "react";
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
export default function code({ className, ...props }: CodeProps) {
  const [theme, setTheme] = useState<keyof typeof themes>("materialDark");

  const match = /language-(\w+)/.exec(className || "");

  const changeThemeHandler = useCallback((event: ChangeEvent) => {
    const selectTarget = event.target as HTMLSelectElement;

    setTheme(selectTarget.value as keyof typeof themes);
  }, []);

  return match ? (
    <div className="w--full">
      <div className="flex--end">
        <select
          onChange={changeThemeHandler}
          className="px--1 text--highlight bg--lead shadow--xy round"
          defaultValue={theme}
        >
          {Object.keys(themes).map((key) => {
            return (
              <option key={key} value={key} selected={key === theme}>
                {key}
              </option>
            );
          })}
        </select>
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
