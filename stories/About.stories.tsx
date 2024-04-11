import About from "@/components/About";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/About",
  component: About,
  parameters: {},
  args: {},
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
