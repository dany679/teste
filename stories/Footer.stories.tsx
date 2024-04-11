import Footer from "@/components/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Footer",
  component: Footer,

  parameters: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
