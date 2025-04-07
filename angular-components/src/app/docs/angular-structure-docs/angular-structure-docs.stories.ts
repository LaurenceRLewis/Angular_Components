import { Meta, StoryObj } from '@storybook/angular';
import { AngularStructureDocsComponent } from './angular-structure-docs.component';

const meta: Meta<AngularStructureDocsComponent> = {
  title: 'Guides/Angular Structure Docs',
  component: AngularStructureDocsComponent,
  parameters: {
    docs: {
      description: {
        component: `
This guide explains how to use Angular structural directives (*ngIf, *ngFor),
along with invisible containers like ng-container and ng-content
to preserve HTML validity, semantic accessibility, and maintainable layout.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<AngularStructureDocsComponent>;

export const Docs: Story = {
  name: 'Structure Guide'
};
