import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
const meta = {
  title: "Components/Organisms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

const data =  [
  {
    id: "1",
    title: "What can I purchase with my Gift Card?",
    paragraph:
      "Your Exxon and Mobil Gift Card can be used to purchase fuel, car washes, snacks and other on-the-go items at the pump or in the store at more than 12,000 Exxon-and-Mobil-branded stations nationwide.",
  },
  {
    id: "2",
    title: "Where can I use my Gift Card?",
    paragraph:
      "You can use your Gift Card at any Exxon or Mobil station, at the pump or in the store on eligible registers. Find a station at exxon.com/find-station.",
    inlineTextLink: "exxon.com/find-station",
    inlineTextLinkURL: "#"
  },
  {
    id: "3",
    title: "What is my Gift Card balance?",
    paragraph: "Please visit this link to check your Gift Card balance.",
    inlineTextLink: "this link",
    inlineTextLinkURL: "#"
  },
];

const locationsData = [
  {
    id: "1",
    title: "Africa",
    locations: [
      {
        title: "Cameroon",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Côte d’Ivoire",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Egypt",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Ethiopia",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Gabon",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Kenya",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
    ]
  },
  {
    id: "2",
    title: "Asia Pacific",
    locations: [
      {
        title: "Cameroon",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Iraq",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
    ]
  },
  {
    id: "3",
    title: "Europe",
    locations: [
      {
        title: "Cameroon",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
      {
        title: "Iraq",
        categories: [{
          label: 'link label',
          languages: [
            {
              languageLabel: 'English',
              languageLink: '#'
            },
            {
              languageLabel: 'Français',
              languageLink: '#'
            }
          ]
        }]
      },
    ]
  },
]

export const Default: Story = {
  args: {
    items: data
  },
};

export const locations: Story = {
  args: {
    items: locationsData
  },
};

