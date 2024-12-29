import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

// Define the type for component metadata
const meta: Meta<typeof Header> = {
    title: "PageComponents/Header",
    component: Header,
    tags: ["autodocs"], // Enable automatic documentation generation
    parameters: {
        layout: "fullscreen", // Display the component in fullscreen mode
    },
};

export default meta;

// Define the Story type
type Story = StoryObj<typeof Header>;

const iconSrc = "https://picsum.photos/150";

// Define individual stories using the new syntax
export const DefaultHeader: Story = {
    args: {
        title: "Appx UI",
        companyIconOptions: {
            src: iconSrc,
            options: {
                sizeOption: "small",
            },
        },
        profileIconOptions: {
            src: iconSrc,
            options: {
                sizeOption: "small",
            }
        },
    }
};