import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  
  title: 'components/Molecules/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Supporting communities',
    description: 'Local investments, focused on economic and educational benefits, are one of the key ways we support communities in which we operate. We work closely with local communities to understand their unique needs, identify and help contribute to long-term, positive local economic and social development, and support effective risk management. The areas below are important parts of our broader approach to supporting communities.',
  }
};