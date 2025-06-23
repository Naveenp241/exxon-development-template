import type { Meta, StoryObj } from '@storybook/react';
import { SocialMedia } from './SocialMedia';

const meta = {
  title: 'Components/Molecules/SocialMedia',
  component: SocialMedia,
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
} satisfies Meta<typeof SocialMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialMediaIcons: Story = {
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
            name: 'Email',
            icon: 'faEnvelope',
            label: 'Email link opens in a new window',
            link: '#',
        },
        {
            name: 'youtube',
            icon: 'faYoutube',
            label: 'youtube link opens in a new window',
            link: '#',
        },
        {
            name: 'instagram',
            icon: 'faInstagram',
            label: 'faInstagram link opens in a new window',
            link: '#',
        },
    ],
    }
};

