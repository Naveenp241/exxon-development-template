import type { Meta, StoryObj } from '@storybook/react';
import { SurfacedItem } from './SurfacedItem';

const meta = {
  title: 'Components/Molecules/SurfacedItem',
  component: SurfacedItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof SurfacedItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurfacedItemCard: Story = {
  args: {
    surfacedItemType: "card",
    imageSrc: 'https://www.exxon.com/-/media/project/wep/exxon/exxon-retail-us/premiumretirement-module/premiumretirement-module-fs-xs.webp',
    title: 'Go premium and earn 6¢ in points per gallon',
    description: 'Members earn 6¢/gallon in points on every Synergy Supreme+™ premium fuel purchase, every day, as a replacement for Premium status.',
    links: [{label: 'Details', href: '/en/rewards-program'}]
  }
};

export const SurfacedItemCreditCard: Story = {
    args: {
        surfacedItemType: 'credit-card',
        imageSrc: 'https://www.exxon.com/-/media/project/wep/exxon/exxon-retail-us/smartcard-noshad/updated/smartcard-noshad-surface-sm.png',
        title: 'Go premium and earn 6¢ in points per gallon',
        description: 'Members earn 6¢/gallon in points on every Synergy Supreme+™ premium fuel purchase, every day, as a replacement for Premium status. Already have a card?',
        links: [{label: ' Manage your account here', href: '/en/rewards-program'}]
      }
};

