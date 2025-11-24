import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: [
    { from: '../src/assets/icons', to: '/assets/icons' },
    '../src/styles/config/_fonts.scss',
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      fsCache: true,
      lazyCompilation: true,
    },
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
