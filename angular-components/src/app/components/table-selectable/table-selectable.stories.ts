import { Meta, StoryObj } from '@storybook/angular';
import { TableSelectableComponent } from './table-selectable.component';

const meta: Meta<TableSelectableComponent> = {
  title: 'Tables/Table (Selectable)',
  component: TableSelectableComponent,
  tags: ['autodocs'],
  argTypes: {
    disabledCheckboxes: {
      name: "Set checkbox as disabled (starts at position 0)",
      control: "text",
    },
    defaultCheckedBoxes: {
      name: "Set checkbox as checked (starts at position 0)",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<TableSelectableComponent>;

export const TableWithCheckbox: Story = {
  args: {
    disabledCheckboxes: '',
    defaultCheckedBoxes: '',
  }
};
