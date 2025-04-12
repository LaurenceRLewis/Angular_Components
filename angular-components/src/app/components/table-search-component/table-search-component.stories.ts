import { Meta, StoryObj } from '@storybook/angular';
import { TableSearchComponent } from './table-search-component';

const meta: Meta<TableSearchComponent> = {
    title: 'Tables/Table (Search function)',
    component: TableSearchComponent,
    tags: ['autodocs'],
    argTypes: {
      containerRole: {
        name: 'Set role on container',
        control: { type: 'select' },
        options: [undefined, 'search'],
        labels: {
          undefined: '(HTML) No role',
          search: '(ARIA) Has role search',
        },
      },
      inputType: {
        name: 'Set type value',
        control: { type: 'select' },
        options: ['search', 'text'],
        labels: {
          search: 'type=search',
          text: 'type=text',
        },
      },
      inputRole: {
        name: 'Set role on input',
        control: { type: 'select' },
        options: [undefined, 'searchbox'],
        labels: {
          undefined: '(HTML) No role',
          searchbox: '(ARIA) Has role searchbox',
        },
      },
    },
  };  

export default meta;
type Story = StoryObj<TableSearchComponent>;

export const SearchTable: Story = {
  args: {
    containerRole: 'search',
    inputType: 'search',
    inputRole: undefined,
  },
};
