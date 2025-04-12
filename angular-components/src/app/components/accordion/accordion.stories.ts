import { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    multiExpand: {
      name: "Open single or multiple sections",
      control: "radio",
      options: ["Single", "Multiple"],
      defaultValue: "Single",
      description: "Allow multiple accordions to be open at once",
    },
    chevronPosition: {
      name: "Icon position",
      control: "radio",
      options: ["left", "right"],
      defaultValue: "right",
      description: "Position of the chevron",
    },
    items: {
      table: { disable: true },
    },
    NamedRegionContainer: {
      name: "Option to wrap accordion in a named region",
      control: { type: "select" },
      options: [
        "Contained in a named landmark region",
        "Not contained in a named landmark region",
      ],
      defaultValue: "Contained in a named landmark region",
    },
    groupName: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**AccordionComponent** is a fully accessible ARIA-compliant accordion that supports:

- Single or multiple open sections
- Left or right chevron icon
- Full keyboard navigation (Enter, Space, Arrow keys, Home, End)
- Optional wrapping in a named ARIA region

### Keyboard Support

| Key         | Action                            |
|-------------|-----------------------------------|
| Enter/Space | Toggle active section             |
| Arrow Keys  | Navigate between headings         |
| Home/End    | Jump to first/last heading        |
        `
      }
    }
    
  }
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Accordion: Story = {
  args: {
    groupName: 'cats',
    chevronPosition: 'right',
    multiExpand: 'Single',
    NamedRegionContainer: 'Contained in a named landmark region',
    items: [
      { title: 'Persian', content: 'Persian cats are known for their long, luxurious fur and flat faces.' },
      { title: 'Siamese', content: 'Siamese cats have sleek, short coats and striking blue almond-shaped eyes.' },
      { title: 'Maine Coon', content: 'Maine Coon cats are large, friendly cats with tufted ears and bushy tails.' },
      { title: 'Bengal', content: 'Bengal cats are known for their wild appearance and energetic nature.' }
    ]
  }
};
