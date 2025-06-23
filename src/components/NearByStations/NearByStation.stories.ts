import type { Meta, StoryObj } from "@storybook/react";
import NearByStation from "./NearByStation";
const meta = {
  title: "Pages/NearByStation",
  component: NearByStation,
  tags: ["autodocs"],
  argTypes: {
    heroTitle: {
      control: "text",
      description: "HTML string with <sup> elements",
    },
  },
} satisfies Meta<typeof NearByStation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    heroImage:
      "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/149080-50059/options/keepaspectratio/sr-header-02-8192-x-1708-short-banner-2880-x-600",
    heroTitle: "Find an Exxon<sup>®</sup> or Mobil<sup>®</sup> station near me",
    heroDescription:
      "Whether you're looking for premium or regular gas, diesel or a convenience store, our station finder makes it easy to find a nearby station.",
    heroButtonText: "Find a station",
    heroButtonLink: "#",
    accountTitle: "Manage your accounts",
    accountDescription:
      "Log in to your Exxon Mobil FleetPro℠, BusinessPro™ or Smart Card™ account, or check your gift card balance.",
    accountButtonText: "Go to accounts",
    accountButtonLink: "#",
    faqTitle: "Frequently Asked Questions",
    faqDescription:
      "Get answers to your questions on the Exxon Mobil Rewards+ program, our app, products and more.",
    faqButtonText: "View FAQs",
    faqButtonLink: "#",
    faqDisclaimer:
      "*For select Exxon Mobil Rewards+ members only. Earn the points (10 points per gallon)...",
  },
};
