import type { Meta, StoryObj } from "@storybook/react";
import FooterNav from "./FooterNav";
const meta = {
  title: "Components/Atoms/FooterNav",
  component: FooterNav,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FooterNav>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    items: [
      {
        imageUrl:
          "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/139688-50059/resize/2048x4096/options/keepaspectratio/1885-standard-oil-trust-supporting-910-x-511-landscape-169-2880-x-1620",
        title: "About Us",
        links: [
          { text: "Our history", url: "#" },
          { text: "Corporate governance", url: "#" },
        ],
      },
      {
        imageUrl:
          "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/139688-50059/resize/2048x4096/options/keepaspectratio/1885-standard-oil-trust-supporting-910-x-511-landscape-169-2880-x-1620",
        title: "Careers",
        links: [
          { text: "Our history", url: "#" },
          { text: "Corporate governance", url: "#" },
        ],
      },
    ],
  },
};