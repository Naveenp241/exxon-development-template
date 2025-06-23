import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "components/Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IconPlus: Story = {
  args: {
    icon: "faPlus",
  },
};

export const IconMinus: Story = {
  args: {
    icon: "faMinus",
  },
};
