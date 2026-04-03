import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@workspace/ui/components/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "Visual style of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    asChild: {
      control: false,
    },
  },
  args: {
    children: "Button",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Variants ────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

// ─── Sizes ───────────────────────────────────────────────────────────────────

export const SizeDefault: Story = {
  name: "Size / Default",
  args: {
    size: "default",
    children: "Default size",
  },
};

export const SizeSm: Story = {
  name: "Size / Small",
  args: {
    size: "sm",
    children: "Small",
  },
};

export const SizeLg: Story = {
  name: "Size / Large",
  args: {
    size: "lg",
    children: "Large",
  },
};

export const SizeIcon: Story = {
  name: "Size / Icon",
  args: {
    size: "icon",
    children: "★",
    "aria-label": "Favourite",
  },
};

// ─── States ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const DisabledDestructive: Story = {
  name: "Disabled / Destructive",
  args: {
    variant: "destructive",
    disabled: true,
    children: "Disabled",
  },
};

export const DisabledOutline: Story = {
  name: "Disabled / Outline",
  args: {
    variant: "outline",
    disabled: true,
    children: "Disabled",
  },
};
