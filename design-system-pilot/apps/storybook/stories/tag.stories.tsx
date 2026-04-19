import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@workspace/ui/components/tag";
import type { ComponentProps } from "react";

type TagProps = ComponentProps<typeof Tag>;

const meta: Meta<TagProps> = {
  title: "UI/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "positive", "error", "warning", "info"],
      description: "Visual style of the tag",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "neutral" },
      },
    },
  },
  args: {
    children: "Tag",
  },
};

export default meta;
type Story = StoryObj<TagProps>;

// ─── Variants ────────────────────────────────────────────────────────────────

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Neutral",
  },
};

export const Positive: Story = {
  args: {
    variant: "positive",
    children: "Positive",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

// ─── Showcase ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="neutral">Neutral</Tag>
      <Tag variant="positive">Positive</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
};
