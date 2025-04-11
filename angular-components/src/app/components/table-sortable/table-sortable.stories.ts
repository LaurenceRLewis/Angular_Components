import { Meta, StoryObj } from '@storybook/angular';
import { TableSortableComponent } from './table-sortable.component';

const meta: Meta<TableSortableComponent> = {
  title: 'Tables/Table (Sortable)',
  component: TableSortableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**TableSortableComponent** is a table component that displays data in a sortable format. It allows users to click on the header buttons to sort the table by ascending or descending order based on the selected column. This component is useful for displaying data that needs to be easily sorted and organized.

### Features
- Toggle icon visibility (always, hover/focus)
- Status role for caption assistive announcement
- Custom ARIA descriptions for accessibility
- Optional initial sort state
- Displaying data in a table format with sortable columns
- Allowing users to sort the table by clicking on the header buttons
- Providing visual indicators for the sorting order
- Customizable sorting behavior based on column data types
- Option to include scope="col" attribute on header cells
- Configurable visibility of sorting icons

### Props

| Name                   | Type                                      | Description                                       |
|------------------------|-------------------------------------------|---------------------------------------------------|
| \`sortable\`            | \`'Sort' | "Don't Sort"\`                  | Toggle sortable headers                          |
| \`iconVisibility\`      | \`'Show icons' | 'Show on hover / focus'\` | Control chevron visibility                       |
| \`includeScope\`        | \`boolean\`                               | Add \`scope="col"\` to \`<th>\` tags               |
| \`initialSortColumnID\` | \`number | null\`                         | Set default sort column index                    |
| \`addRoleStatus\`       | \`'Status Role' | 'No Role'\`              | ARIA role on caption span                        |
| \`ariaDescription\`     | \`string\`                                | Description for sortable buttons                 |
| \`includeAriaDescription\` | \`boolean\`                           | Apply \`aria-description\` to sortable buttons    |
| \`showDescriptionAll\`  | \`'Yes' | 'No'\`                         | Show description always or only when unsorted    |
`
      }
    }
  }
};

export default meta;
type Story = StoryObj<TableSortableComponent>;

export const SortableTable: Story = {
  name: 'Table (Sort function) Build',
  argTypes: {
    sortable: {
      name: 'Enable column sorting',
      control: 'select',
      options: ['Sort', "Don't Sort"],
      description: 'Enable or disable sorting for columns',
      defaultValue: 'Sort'
    },
    includeScope: {
      name: 'Set scope attribute',
      control: 'boolean',
      description: 'Include scope for table headers',
      defaultValue: true
    },
    iconVisibility: {
      name: 'Persistent sort icon or on hover/focus',
      control: 'select',
      options: ['Show icons', 'Show on hover / focus'],
      description: 'Control visibility of the sorting icons',
      defaultValue: 'Show on hover / focus'
    },
    customCaptionText: {
      name: 'Caption help text',
      control: 'text',
      description: 'Optional text to be included in table caption',
      defaultValue: 'Table sorted by, '
    },
    initialSortColumnID: {
      name: 'Initial Sort Column ID',
      control: 'number',
      description: 'Default column to sort',
      defaultValue: 0
    },
    addRoleStatus: {
      name: 'Add the Status Role to the Caption help text.',
      control: 'select',
      options: ['Status Role', 'No Role'],
      description: 'Add role attribute to span',
      defaultValue: 'No Role'
    },
    ariaDescription: {
      name: 'Aria description for sortable columns',
      control: 'text',
      description: 'Description of sortable table columns for screen readers',
      defaultValue: 'Sortable column'
    },
    includeAriaDescription: {
      name: 'Include aria-description',
      control: 'boolean',
      description: 'Toggle whether to include aria-description on sortable buttons',
      defaultValue: true
    },
    showDescriptionAll: {
      name: 'Show description for all sorting states',
      control: 'select',
      options: ['Yes', 'No'],
      description: 'Control whether aria-description is applied only when aria-sort is none or for all sorting actions',
      defaultValue: 'No'
    }
  }  
};
