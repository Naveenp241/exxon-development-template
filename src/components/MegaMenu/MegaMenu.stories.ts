import type { Meta, StoryObj } from '@storybook/react';
import { MegaMenu, type MenuProps } from './MegaMenu';

const meta = {
  title: 'Components/Molecules/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MegaMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuData: MenuProps[] = [
  {
    title: 'Fuels',
    path: '#',
    items: [
      {
        title: 'Exxon',
        path: '#',
        items: [
          { title: 'Rewards & Credit Cards', path: '#' },
          { title: 'Our Fuel', path: '#' },
          { title: 'Commercial', path: '#' }
        ]
      },
      {
        title: 'Mobil',
        path: '#',
        items: [
          { title: 'Rewards & Credit Cards', path: '#' },
          { title: 'Our Fuel', path: '#' }
        ]
      },
      { title: 'Gas Near You', path: '#' },
      { title: 'Get Help', path: '#' },
      { title: 'Wholesale Fuels', path: '#' }
    ]
  },
  {
    title: 'Lubricants',
    path: '#',
    items: [
      {
        title: 'Mobil Oil',
        path: '#',
        items: [
          { title: 'Personal Vehicle', path: '#' },
          { title: 'Commercial', path: '#' },
          { title: 'Motor Oil & Filter Finder', path: '#' }
        ]
      },
      {
        title: 'Industrial Lubricants',
        path: '#',
        items: [
          { title: 'Lubricants by Type', path: '#' },
          { title: 'Lubricants by Application', path: '#' },
          { title: 'Find Lubricants by Equipment Builder', path: '#' }
        ]
      },
      { title: 'Where to Buy', path: '#' }
    ]
  },
  {
    title: 'Chemicals',
    path: '#',
    items: [{ title: 'Type to enter text', path: '#' }]
  },
  {
    title: 'Sustainability',
    path: '#'
  },
  {
    title: 'About Us',
    path: '#'
  }
];

export const Default: Story = {
  args: {
    menuData
  },
};
