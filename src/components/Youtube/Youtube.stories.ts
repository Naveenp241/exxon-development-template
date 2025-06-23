import type { Meta, StoryObj } from "@storybook/react";
import Youtube from "./Youtube";

const meta = {
  title: "Components/Molecules/Youtube",
  component: Youtube,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Youtube>;
export default meta;
type Story = StoryObj<typeof meta>;
export const YoutubeComponent: Story = {
  args: {
    videoId: "dQw4w9WgXcQ",
  },
};

