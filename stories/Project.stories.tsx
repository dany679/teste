import Projects from "@/components/Projects";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Projects",
  component: Projects,
  parameters: {},
  args: {},
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
