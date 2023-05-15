import "../src/styles/_globals.scss";
import { themes } from "@storybook/theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "#282828" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "#f2f4f7" },
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
  },
};
