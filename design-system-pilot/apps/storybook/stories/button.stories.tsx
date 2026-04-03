import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@workspace/ui/components/button";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "subtle", "secondary", "ghost", "link"],
      description: "Visual style of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-circle"],
      description: "Size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    isLoading: {
      control: "boolean",
      description: 'Figma "loading" state — shows a spinner and disables the button',
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
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

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

/** Figma "subtle" — slate/100 bg, dark text, slate/200 on hover */
export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Subtle",
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

/** Figma "just icon circle" — 40px circular button with border */
export const SizeIconCircle: Story = {
  name: "Size / Icon Circle",
  args: {
    size: "icon-circle",
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

/** Figma "loading" — spinner + text, button is auto-disabled */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading",
  },
};

export const LoadingDestructive: Story = {
  name: "Loading / Destructive",
  args: {
    variant: "destructive",
    isLoading: true,
    children: "Deleting",
  },
};

export const LoadingOutline: Story = {
  name: "Loading / Outline",
  args: {
    variant: "outline",
    isLoading: true,
    children: "Saving",
  },
};
