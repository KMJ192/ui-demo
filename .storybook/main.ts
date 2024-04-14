import type { StorybookConfig } from '@storybook/sveltekit';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-designs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  viteFinal: async (config) => {
    const alias = {
      ...config.resolve?.alias,
      '@src': path.resolve(__dirname, 'src'),
    };

    if (config.resolve) {
      config.resolve.alias = alias;
    }

    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
