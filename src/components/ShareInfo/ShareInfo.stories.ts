import type { Meta, StoryObj } from '@storybook/react';
import { ShareInfo } from './ShareInfo';

const meta = {
  title: 'Components/Molecules/ShareInfo',
  component: ShareInfo,
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
} satisfies Meta<typeof ShareInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShareInfoButton: Story = {
  args: {
    socialConfigs: [
      {
        name: 'facebook',
        icon: 'faFacebookF',
        label: 'Facebook link opens in a new window',
        link: 'https://www.facebook.com/',
      },
      {
        name: 'twitter',
        icon: 'faXTwitter',
        label: 'Twitter link opens in a new window',
        link: 'https://x.com/',
      },
      {
        name: 'linkedin',
        icon: 'faLinkedinIn',
        label: 'LinkedIn link opens in a new window',
        link: 'https://www.linkedin.com/',
      },
      {
        name: 'email',
        icon: 'faEnvelope',
        label: 'Email link opens in a new window',
        link: 'https://mail.google.com/',
      },
      {
        name: 'clipboard',
        icon: 'faLink',
        label: 'Copy link to clipboard',
        link: '/',
      },
    ],
  },
};
