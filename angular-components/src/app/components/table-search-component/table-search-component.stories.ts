import { Meta, StoryObj } from '@storybook/angular';
import { TableSearchComponent } from './table-search-component';

const meta: Meta<TableSearchComponent> = {
    title: 'Tables/Table (Search)',
    component: TableSearchComponent,
    tags: ['autodocs'],
    argTypes: {
      // containerRole: {
      //   name: 'Set role on container',
      //   control: { type: 'select' },
      //   options: [undefined, 'search'],
      //   labels: {
      //     undefined: '(HTML) No role',
      //     search: '(ARIA) Has role search',
      //   },
      //   description: 'Sets the ARIA role on the container element. Defaults to "search".',
      // },
      inputType: {
        name: 'Set input type value',
        control: { type: 'select' },
        options: ['search', 'text'],
        labels: {
          text: 'input type text',
          search: 'role search',
        },
      },
      inputRole: {
        name: 'Set explicit role on input',
        control: { type: 'select' },
        options: ['No explicit role set', 'searchbox'], // ✅ No more undefined here
        labels: {
          'No explicit role set': 'No explicit role set',
          searchbox: 'Adds searchbox role',
        },
      },            
    },
  };  

export default meta;
type Story = StoryObj<TableSearchComponent>;

export const SearchTable: Story = {
  args: {
    inputRole: 'No explicit role set', // ✅ string sentinel
  },
};

