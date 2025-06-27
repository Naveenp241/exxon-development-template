import type { Meta, StoryObj } from "@storybook/react";
import CardBlock from "./CardBlock";
const meta = {
  title: "Components/Molecules/CardBlock",
  component: CardBlock,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardBlock>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Simple: Story = {
  args: {
    imageUrl: "https://www.exxon.com/-/media/project/wep/exxon/exxon-retail-us/gift-card/hero-image/1340x400---hero---xl.jpg",
    title: "Credit cards",
  },
};
export const Detailed: Story = {
  args: {
    imageUrl:
      "https://www.exxon.com/-/media/project/wep/exxon/exxon-retail-us/gift-card/hero-image/1340x400---hero---xl.jpg",
    title: "Exxon™ and Mobil™ Gas Gift Cards",
    description:
      "Exxon™ and Mobil™ Gift Cards are a convenient and simple way to purchase fuel, snacks and other on-the-go items at more than 12,000 Exxon and Mobil stations nationwide. They’re thoughtful gifts for all occasions and for friends and family who commute or enjoy road trips.",
    buttonText: "View Gas Card Balance",
    buttonLink: "#",
  },
};
