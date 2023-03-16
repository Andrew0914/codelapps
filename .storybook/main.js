const TsconfigPathsPlugin = require("../node_modules/tsconfig-paths-webpack-plugin");
const path = require("path");


module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        sassLoaderOptions: {
          implementation: require("sass"),
        },
      },
    },
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    },
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, {configType}) => {
    // DETECT ALIASES FROM TS CONFIG
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
