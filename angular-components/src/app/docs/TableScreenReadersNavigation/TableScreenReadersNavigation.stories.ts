import { Meta, StoryObj } from '@storybook/angular';
import { TableScreenReadersNavigation } from './TableScreenReadersNavigation.component';

const meta: Meta<TableScreenReadersNavigation> = {
  title: 'Guides/Screen reader keyboard table navigation',
  component: TableScreenReadersNavigation,
  parameters: {
    docs: {
      description: {
        component: `
This guide explains how to navigate tables using screen readers, keyboard and gestures.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<TableScreenReadersNavigation>;

export const Docs: Story = {
  name: 'Structure Guide'
};
