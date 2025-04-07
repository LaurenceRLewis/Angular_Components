import { Meta, StoryObj } from '@storybook/angular';
import { TableSortableComponent } from './table-sortable.component';

const meta: Meta<TableSortableComponent> = {
  title: 'Tables/Sortable Table',
  component: TableSortableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**TableSortableComponent** is an accessible table with sortable columns.  
It supports sorting via header buttons, icon visibility control, ARIA roles, and keyboard navigation.

### Features
- Sort columns via click or keyboard
- Toggle icon visibility (always, hover/focus)
- Status role for caption assistive announcement
- Custom ARIA descriptions for accessibility
- Optional initial sort state

### Keyboard Support

| Key         | Action                        |
|-------------|-------------------------------|
| Enter/Space | Sort selected column          |
| Tab         | Navigate to next column       |
| Shift+Tab   | Navigate to previous column   |

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
