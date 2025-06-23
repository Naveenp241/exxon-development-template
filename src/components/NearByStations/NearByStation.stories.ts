import type { Meta, StoryObj } from "@storybook/react";
import NearByStation from "./NearByStation";
const meta = {
  title: "Components/Organisms/NearByStation",
  component: NearByStation,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof NearByStation>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FindAStation: Story = {
  args: {
    variant: "findAStation",
    accountBgImage:
      "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/149080-50059/options/keepaspectratio/sr-header-02-8192-x-1708-short-banner-2880-x-600",
    imageLink: "#",
    accountTitle: "",
    accountDescription: "",
    accountButtonText: "",
    accountButtonLink: "",
  },
};

export const NearByStationInfo: Story = {
  args: {
    variant: "nearByStationInfo",
    imageLink: "#",
    accountBgImage: "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/149080-50059/options/keepaspectratio/sr-header-02-8192-x-1708-short-banner-2880-x-600",
    accountTitle: "Manage your accounts",
    accountDescription:
      "Log in to your Exxon Mobil FleetPro℠, BusinessPro™ or Smart Card™ account, or check your gift card balance.",
    accountButtonText: "Go to accounts",
    accountButtonLink: "#",
  },
};

export const MobilVariant: Story = {
  args: {
    variant: "mobilVariant",
    imageLink: "#",
    accountBgImage: "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/149080-50059/options/keepaspectratio/sr-header-02-8192-x-1708-short-banner-2880-x-600",
    accountTitle: "Manage your accounts",
    accountDescription:
      "Log in to your Exxon Mobil FleetPro℠, BusinessPro™ or Smart Card™ account, or check your gift card balance.",
    accountButtonText: "Go to accounts",
    accountButtonLink: "#",
  }, 
};
