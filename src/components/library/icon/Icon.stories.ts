import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

// Define the type for component metadata
const meta: Meta<typeof Icon> = {
  title: "Library/Icon",
  component: Icon,
  tags: ["autodocs"], // Enable automatic documentation generation
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
};

export default meta;

// Define the Story type
type Story = StoryObj<typeof Icon>;

const iconSrc = "https://picsum.photos/150";

// Define individual stories using the new syntax
export const SmallIconWithLabelTop: Story = {
  args: {
    src: iconSrc,
    label: "Small Icon",
    showLabel: true,
    options: {
      sizeOption: "small",
      position: "top",
    },
  },
};

export const MediumIconWithLabelBottom: Story = {
  args: {
    src: iconSrc,
    label: "Medium Icon",
    showLabel: true,
    options: {
      sizeOption: "medium",
      position: "bottom",
    },
  },
};

export const LargeIconWithLabelLeft: Story = {
  args: {
    src: iconSrc,
    label: "Large Icon",
    showLabel: true,
    options: {
      sizeOption: "large",
      position: "left",
    },
  },
};

export const LargeIconWithLabelRight: Story = {
  args: {
    src: iconSrc,
    label: "Large Icon",
    showLabel: true,
    options: {
      sizeOption: "large",
      position: "right",
    },
  },
};

export const HideLabel: Story = {
  args: {
    src: iconSrc,
    label: "Hidden Icon Label",
    showLabel: false,

    options: {
      "width": 100,
      "height": 100
    }
  }
};