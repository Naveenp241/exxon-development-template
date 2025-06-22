import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'Components/Molecules/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundGradient: { control: 'text' },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CorporateHero: Story = {
  args: {
    heroType: "corporate-hero",
    enableSubtitle: false,
    enableContent: false,
    enableClick: false,
    href: "#",
    subtitle: "Subtitle",
    title: 'Title',
    content: "Content",
    fontColor: 'dark'
  },
};

export const CorporateMain: Story = {
  args: {
    heroType: "corporate-main",
    enableSubtitle: true,
    enableContent: true,
    subtitle: "Subtitle",
    title: 'Title',
    content: "Content",
    buttonLink: '#',
    buttonName: 'Button',
    fontColor: 'dark'
  },
};

export const FuelsHero: Story = {
  args: {
    heroType: "fuels-hero",
    content: "Content",
    buttonLink: '#',
    buttonName: 'Button',
    fontColor: 'dark'
  },
};

