import type { Meta, StoryObj } from "@storybook/react";
import StockTicker from "./StockTicker";
const meta = {
  title: "Components/Molecules/StockTicker",
  component: StockTicker,
  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof StockTicker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  stockTickerTitle: "Exxon Mobil Corporation (XOM)",
  elementType: "h2",
  stockTickerPrice: "$109.38",
  stockTickerPriceChange: " $-0.61 (-0.56%)",
  stockTickerTime: "4:00pm ET",
  stockTickerDate: "June 27, 2025",
  },
};
