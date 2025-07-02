import type { Meta, StoryObj } from "@storybook/react";
import SingleFeature from "./SingleFeature";
import type { SingleFeatureProps } from "./SingleFeature";

const meta: Meta<typeof SingleFeature> = {
  title: "Components/Organisms/SingleFeature",
  component: SingleFeature,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    featureTheme: {
      control: {
        type: "radio",
      },
      options: ["light", "dark"],
      table: {
        type: { summary: '"light" | "dark"' },
        defaultValue: { summary: "dark" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<SingleFeatureProps>;

export const Default: Story = {
  args: {
    featureBgImage: "https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/139777-50059/resize/2048x4096/options/keepaspectratio/content-playbook-background-2",
    featureContent:
      "The need for energy is universal. That's why ExxonMobil scientists and engineers are pioneering new research and pursuing new technologies to reduce emissions while creating more efficient fuels. We're committed to responsibly meeting the world's energy needs.",
    featureButtonText: "Who we are",
    featureButtonLink: "https://corporate.exxonmobil.com/who-we-are",
    featureTheme: "dark",
  },
};
