import type { Meta, StoryObj } from "@storybook/react";
import FuelsCard from "./FuelsCard";
const meta = {
  title: "Components/Molecules/FuelsCard",
  component: FuelsCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FuelsCard>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    imageUrl:
      "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/133213-50059/options/keepaspectratio/20230626-xto-permian-00160-8192-x-4610-landscape-169-2880-x-1620",
    title: "Official fuel supplier for the Porsche Carrera Cup North America",
    description:
      "As the official sponsor for this race series, Synergy Supreme+ premium gas helps keep engines 3X cleaner for better gas mileage. And during each race week this year, you can earn 18¢ in points/gallon every time you fuel up — that’s 3X the points!",
    linkText: "View race schedule",
    linkUrl: "#",
  },
};
