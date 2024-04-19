import Page from "@/app/[locale]/page";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Page",
  component: Page,
  parameters: {},
  decorators: [
    (Story) => (
      <>
        <Navbar />
        {Story()}
        <Footer />
      </>
    ),
  ],
  args: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Theme: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button_theme = canvas.getByTestId("button-theme-toggle");
    await expect(button_theme).toBeInTheDocument();
    await userEvent.click(button_theme);
  },
};
export const SlideUp: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const navigation = canvas.getByRole("navigation");
    await expect(navigation).toBeInTheDocument();
    await step("Slide Up projects", async () => {
      const projects = within(navigation).getByText(/projects/gi);
      await userEvent.click(projects);
    });

    await step("Slide Up about", async () => {
      const about = within(navigation).getByText(/about/gi);
      await userEvent.click(about);
    });
    await step("Slide Up home", async () => {
      const home = within(navigation).getByText(/home/gi);
      await userEvent.click(home);
    });
  },
};
