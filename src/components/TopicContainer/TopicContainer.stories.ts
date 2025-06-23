import type { Meta, StoryObj } from '@storybook/react';
import { TopicContainer } from './TopicContainer';

const meta = {
  title: 'Components/Organisms/Topic Container',
  component: TopicContainer,
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
  argTypes: {
  mediabackgroundColor: { control: 'color' },
  contentbackgroundColor: { control: 'color' },
  media: {
    control: 'radio',
    options: ['image', 'text'],
  },
},
} satisfies Meta<typeof TopicContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const latestNewsContent = [
  {
    heading: "How ExxonMobil and MD Anderson are charting a new path for community health",
    linkTo: "#",
    newsType: "Article",
    duration: "2 min read",
    date: "Jan. 13, 2025"
  },
  {
    heading: "Volunteering: How we help in Asia Pacific",
    linkTo: "#",
    newsType: "News",
    date: "Dec. 3, 2024"
  },
  {
    heading: "Supporting wildlife conservation in Brazil",
    linkTo: "#",
    newsType: "News",
    duration: "2 min read",
    date: "Nov. 8, 2024"
  }
]

export const Variant1: Story = {
  args: {
    columnType: 'column-2',
    media: 'image',
    mediaOrder: 'media',
    mediabackgroundColor: '#f1f2f2',
    contentbackgroundColor: '#cbdfdf',
    mediaContentSubtext: 'Subtext',
    mediaContentHeading: 'Heading',
    mediaContent: 'Content',
    enableShare: true,
    enableLatestNews: false,
    latestNewsContent: latestNewsContent,
    imageSrc: "https://picsum.photos/1440",
    contentHeading: "Delivering industrial solutions",
    content: "As a global industrial company, we’re working with others to provide essential energy and chemical resources to power businesses",
  },
};

export const Variant2: Story = {
  args: {
    columnType: 'column-2',
    media: 'image',
    mediaOrder: 'content',
    mediabackgroundColor: '#f1f2f2',
    contentbackgroundColor: '#cbdfdf',
    mediaContentSubtext: 'Subtext',
    mediaContentHeading: 'Heading',
    mediaContent: 'Content',
    enableShare: true,
    enableLatestNews: false,
    latestNewsContent: latestNewsContent,
    imageSrc: "https://picsum.photos/1440",
    contentHeading: "Delivering industrial solutions",
    content: "As a global industrial company, we’re working with others to provide essential energy and chemical resources to power businesses",
  },
};

export const Variant3: Story = {
  args: {
    columnType: 'column-2',
    media: 'text',
    mediaOrder: 'content',
    mediabackgroundColor: '#cbdfdf',
    contentbackgroundColor: '#f1f2f2',
    mediaContentSubtext: 'Subtext',
    mediaContentHeading: 'Our commitment',
    mediaContent: 'We’re committed to being a good corporate citizen, helping to improve society and quality of life where we operate around the world.',
    enableShare: true,
    enableLatestNews: true,
    latestNewsContent: latestNewsContent,
    contentHeading: "Latest news",
    linkLabel: "Visit the Newsroom",
  },
};

export const Variant4: Story = {
  args: {
    columnType: 'column-1',
    media: 'text',
    mediaOrder: 'content',
    mediabackgroundColor: '#f1f2f2',
    contentbackgroundColor: '#ffffff',
    mediaContentSubtext: 'What we do',
    mediaContentHeading: 'For over 140 years, we’ve discovered',
    mediaContent: 'We continue to evolve to meet growing global demand for oil, natural gas and refined products and plan to play a leading role in the energy transition.',
    enableShare: true,
    enableLatestNews: false,
    latestNewsContent: latestNewsContent,
  },
};

