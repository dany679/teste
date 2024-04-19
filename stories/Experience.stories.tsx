import type { Meta, StoryObj } from "@storybook/react";
import Experiences from "../components/Experience";

const meta = {
  title: "Components/Experiences",
  component: Experiences,
  parameters: {},
  args: {},
} satisfies Meta<typeof Experiences>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
