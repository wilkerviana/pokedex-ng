module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/_shared/components/**/*.stories.ts",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-controls"
  ]
}