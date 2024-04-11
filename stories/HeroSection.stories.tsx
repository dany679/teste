import HeroSection from "@/components/HeroSection";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/HeroSection",
  component: HeroSection,
  parameters: {},
  args: {},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
