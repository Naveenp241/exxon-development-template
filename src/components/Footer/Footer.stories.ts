import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Components/Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullwidth',
  },
  
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterComponent: Story = {
  args: {},
};
