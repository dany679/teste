import Navbar from "@/components/Navbar";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    title: { type: "string", defaultValue: "Why is type undefined?" },
  },
  parameters: {},
  args: {
    locale: "en",
  },
  decorators: [
    (StoryDark) => {
      return StoryDark();
    },
  ],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Toggle: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button_theme = canvas.getByTestId("button-theme-toggle");
    await expect(button_theme).toBeInTheDocument();
    await userEvent.click(button_theme);
  },
};
