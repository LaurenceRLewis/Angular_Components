import { Meta, StoryObj } from '@storybook/angular';
import { TableSearchComponent } from './table-search-component';
import { TableSearchWrapperModule } from './table-search-wrapper.module';

const meta: Meta<TableSearchComponent> = {
    title: 'Tables/Table (Search function)',
    component: TableSearchComponent,
    decorators: [
      moduleMetadata({
        imports: [TableSearchWrapperModule], // ✅ use the wrapper module
      }),
    ],
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
        description: 'Sets the ARIA role on the container element. Defaults to "search".',
      },
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
        options: [undefined, 'searchbox'],
        labels: {
          type: 'select',
          select: 'Adds search role',
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
