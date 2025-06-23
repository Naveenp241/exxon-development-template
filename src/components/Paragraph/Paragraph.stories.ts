import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";
const meta = {
  title: "Components/Molecules/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    showArrow: { control: "boolean" },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;
export const BasicParagraph: Story = {
  args: {
    paragraph:
      "Fuel injectors – like spray bottles – don’t work well when they’re clogged. When it comes to functionality, fuel injectors are an essential part of your car’s engine, delivering fuel at the right time to ensure efficient combustion. Some lower tier gas can leave deposits on fuel injectors, resulting in decreased performance. This is one of the big differences between premium gas vs regular that can make a big impact.",
  },
};
export const ParagraphWithInlineTextLink: Story = {
  args: {
    paragraph:
      "Fuel injectors – like spray bottles – don’t work well when they’re clogged. When it comes to functionality, fuel injectors are an essential part of your car’s engine, delivering fuel at the right time to ensure efficient combustion. Some lower tier gas can leave deposits on fuel injectors, resulting in decreased performance. This is one of the big differences between premium gas vs regular that can make a big impact.",
    inlineTextLink: "impact",
    inlineTextLinkURL: "#",
  },
};
export const ParagraphWithCTAText: Story = {
  args: {
    paragraph:
      "Fuel injectors – like spray bottles – don’t work well when they’re clogged. When it comes to functionality, fuel injectors are an essential part of your car’s engine, delivering fuel at the right time to ensure efficient combustion. Some lower tier gas can leave deposits on fuel injectors, resulting in decreased performance. This is one of the big differences between premium gas vs regular that can make a big impact.",
    inlineTextLink: "impact",
    inlineTextLinkURL: "#",
    ctaText: "Learn more about Synergy™ quality gas",
    ctaTextURL: "#",
  },
};
export const ParagraphWithListAndCTAText: Story = {
  args: {
    paragraph:
      "Fuel injectors – like spray bottles – don’t work well when they’re clogged. When it comes to functionality, fuel injectors are an essential part of your car’s engine, delivering fuel at the right time to ensure efficient combustion. Some lower tier gas can leave deposits on fuel injectors, resulting in decreased performance. This is one of the big differences between premium gas vs regular that can make a big impact.",
    inlineTextLink: "impact",
    inlineTextLinkURL: "#",
    listItems: [
      "Deposits accumulate on port fuel injection (PFI) intake valves and gasoline direct injection (GDI) fuel injectors",
      "Our Synergy Supreme+ premium gas contains significantly more cleaning agents than federal standards require leading to outstanding cleanliness",
      "It keeps your engine clean by reducing deposit buildup",
      "It even cleans up your engine by removing existing deposits left behind by gasoline that meets minimum government standards††",
    ],
    ctaText: "Learn more about Synergy™ quality gas",
    ctaTextURL: "#",
  },
};

