import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta = {
  title: 'Components/Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'lightGray',
      values: [
        { name: 'lightGray', value: '#f0f0f0' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageAtom: Story = {
  args: {
    src: '',
    alt: '',
  },
};

