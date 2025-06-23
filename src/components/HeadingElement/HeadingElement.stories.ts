import type { Meta, StoryObj } from "@storybook/react";
import { HeadingElement } from "./HeadingElement";

const meta = {
  title: "components/Atoms/HeadingElement",
  component: HeadingElement,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HeadingElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elementType: 'h4',
    title: "What can I purchase with my Gift Card?",
  },
};
