import { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Components/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    multiExpand: {
      control: 'radio',
      options: ['Single', 'Multiple'],
      description: 'Allow multiple accordions to be open at once',
      defaultValue: 'Single'
    },
    chevronPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position of the chevron',
      defaultValue: 'right'
    },
    NamedRegionContainer: {
      control: 'select',
      options: [
        'Contained in a named landmark region',
        'Not contained in a named landmark region'
      ],
      description: 'Wrap the accordion in a named landmark region',
      defaultValue: 'Contained in a named landmark region'
    },
    items: { table: { disable: true } },
    groupName: { table: { disable: true } }
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
