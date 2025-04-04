import { Meta, StoryObj } from '@storybook/angular';
import { TableSortableComponent } from './table-sortable.component';

const meta: Meta<TableSortableComponent> = {
  title: 'Tables/Sortable Table',
  component: TableSortableComponent,
  tags: ['autodocs'],
  argTypes: {
    sortable: {
      control: 'select',
      options: ['Sort', "Don't Sort"],
      description: 'Enable or disable column sorting'
    },
    includeScope: {
      control: 'boolean',
      description: 'Include scope="col" for <th> elements'
    },
    iconVisibility: {
      control: 'select',
      options: ['Show icons', 'Show on hover / focus'],
      description: 'Control when sort icons appear'
    },
    addRoleStatus: {
      control: 'select',
      options: ['Status Role', 'No Role'],
      description: 'Add ARIA role="status" to caption help text'
    },
    customCaptionText: {
      control: 'text',
      description: 'Custom prefix text in caption help'
    },
    initialSortColumnID: {
      control: 'number',
      description: 'Initial column index to sort'
    },
    ariaDescription: {
      control: 'text',
      description: 'ARIA description for sortable buttons'
    },
    includeAriaDescription: {
      control: 'boolean',
      description: 'Enable or disable aria-description'
    },
    showDescriptionAll: {
      control: 'select',
      options: ['Yes', 'No'],
      description: 'Show description only on unsorted columns or always'
    }
  }
};

export default meta;
type Story = StoryObj<TableSortableComponent>;

export const SortableTable: Story = {
  name: 'Table (Sort function) Build',
  args: {
    sortable: 'Sort',
    includeScope: true,
    iconVisibility: 'Show icons',
    addRoleStatus: 'No Role',
    customCaptionText: 'Table sorted by, ',
    initialSortColumnID: 0,
    ariaDescription: 'Sortable column',
    includeAriaDescription: true,
    showDescriptionAll: 'No'
  }
};
