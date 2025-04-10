import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',        // ✅ Optional: Accessibility testing
    '@storybook/addon-docs'         // ✅ Needed for Docs tab & markdown
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true                  // ✅ Enables auto-generated Docs tab
  },
  staticDirs: [
    { from: '../src/assets', to: '/assets' }
  ],
};

export default config;
